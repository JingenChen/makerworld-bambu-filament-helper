/**
 * MakerWorld 拓竹耗材色号与编码助手 - Content Script
 * 自动识别 MakerWorld 打印配置浮层、分盘详情弹窗及页面耗材块，
 * 关联显示拓竹官方耗材的实际颜色名（同时显示 Basic / Matte / Silk+ / HF 等系列）与 5 位编码。
 */
(function () {
  if (!window.BambuFilamentMatcher) return;
  const { matchBambuFilaments, parseColorToRgb } = window.BambuFilamentMatcher;

  let toastEl = null;
  let toastTimer = null;

  function showToast(text) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "bambu-fh-toast";
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = text;
    toastEl.classList.add("show");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      if (toastEl) toastEl.classList.remove("show");
    }, 2000);
  }

  function copyText(text, label) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`已复制: ${label || text}`);
      }).catch(() => fallbackCopy(text, label));
    } else {
      fallbackCopy(text, label);
    }
  }

  function fallbackCopy(text, label) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      showToast(`已复制: ${label || text}`);
    } catch (_) {}
    document.body.removeChild(ta);
  }

  /**
   * 从单个 .filaments-block 节点提取 { material, weight, bgStyle, hex }
   */
  function extractFilamentBlockInfo(blockEl) {
    const matEl = blockEl.querySelector(".material-text");
    const weightEl = blockEl.querySelector(".weight-text");
    const material = matEl ? matEl.textContent.trim() : (blockEl.textContent.trim().split(/\s+/)[0] || "PLA");
    const weight = weightEl ? weightEl.textContent.trim() : "";

    // 优先取内联 style.background / style.backgroundColor，其次取 getComputedStyle
    const inlineStyle = blockEl.getAttribute("style") || "";
    let colorRaw = "";
    const bgMatch = inlineStyle.match(/background(?:-color)?\s*:\s*([^;]+)/i);
    if (bgMatch) {
      colorRaw = bgMatch[1].trim();
    }
    if (!colorRaw) {
      colorRaw = window.getComputedStyle(blockEl).backgroundColor;
    }

    const parsed = parseColorToRgb(colorRaw);
    if (!parsed) return null;

    return {
      material,
      weight,
      hex: parsed.hex,
      rgb: parsed
    };
  }

  /**
   * 为单个耗材项创建展示行 DOM（同时展示 Basic / Matte / Silk+ 等对应系列、颜色名与 5 位编码）
   */
  function createFilamentMatchRow(slotIndex, info, matchResult) {
    const row = document.createElement("div");
    row.className = "bambu-fh-row";

    const top = document.createElement("div");
    top.className = "bambu-fh-row-top";

    const source = document.createElement("div");
    source.className = "bambu-fh-source";

    const swatch = document.createElement("span");
    swatch.className = "bambu-fh-swatch";
    swatch.style.backgroundColor = info.hex;

    const label = document.createElement("span");
    label.textContent = `${info.material}${info.weight ? " · " + info.weight : ""}`;

    source.appendChild(swatch);
    source.appendChild(label);

    const hexTag = document.createElement("span");
    hexTag.className = "bambu-fh-hex";
    hexTag.textContent = info.hex;
    hexTag.title = "点击复制十六进制色值 " + info.hex;
    hexTag.addEventListener("click", (e) => {
      e.stopPropagation();
      copyText(info.hex, info.hex);
    });

    top.appendChild(source);
    top.appendChild(hexTag);
    row.appendChild(top);

    const badgesWrap = document.createElement("div");
    badgesWrap.className = "bambu-fh-badges";

    const items = matchResult && matchResult.displayList ? matchResult.displayList : [];
    for (const item of items) {
      const badge = document.createElement("span");
      badge.className = "bambu-fh-badge";
      badge.setAttribute("data-tier", item.tier || "basic");

      const approxPrefix = item.isExact ? "" : "≈ ";
      const seriesLabel = item.series;
      const fullCopyText = `Bambu ${item.series} ${item.nameZh} (${item.code})`;

      badge.title = `${item.isExact ? "官方精确色值匹配" : `相近官方色 (色差 ΔE=${item.deltaE}，官方色值 ${item.hex})`}
系列: ${item.series}
中文名: ${item.nameZh} (${item.nameEn})
耗材编码: ${item.code}
点击复制耗材编码: ${item.code}（按住 Shift 点击可复制完整名称）`;

      const seriesSpan = document.createElement("span");
      seriesSpan.className = "bambu-fh-series-tag";
      seriesSpan.textContent = seriesLabel;

      const dotSpan = document.createElement("span");
      dotSpan.className = "bambu-fh-color-dot";
      dotSpan.style.backgroundColor = item.hex;

      const nameSpan = document.createElement("span");
      nameSpan.textContent = `${approxPrefix}${item.nameZh} ${item.nameEn}`;

      const codeSpan = document.createElement("span");
      codeSpan.className = "bambu-fh-code";
      codeSpan.textContent = `(${item.code})`;

      badge.appendChild(seriesSpan);
      badge.appendChild(dotSpan);
      badge.appendChild(nameSpan);
      badge.appendChild(codeSpan);

      badge.addEventListener("click", (e) => {
        e.stopPropagation();
        if (e.shiftKey) {
          copyText(fullCopyText, fullCopyText);
        } else {
          copyText(item.code, `${item.series} ${item.nameZh} (${item.code})`);
        }
      });

      badgesWrap.appendChild(badge);
    }

    row.appendChild(badgesWrap);

    return row;
  }

  /**
   * 扫描页面上所有包含 .filaments-block 的父级容器，并在下方插入/更新拓竹官方耗材对照面板
   */
  function enhanceAllFilamentContainers() {
    const allBlocks = Array.from(document.querySelectorAll(".filaments-block"));
    if (allBlocks.length === 0) return;

    // 找到每个 .filaments-block 的分组容器（如 .filaments_detail 或 .filaments_info 或直接父节点）
    const groupMap = new Map();
    for (const block of allBlocks) {
      const groupContainer = block.closest(".filaments_detail, .filaments_info") || block.parentElement;
      if (!groupContainer) continue;
      if (!groupMap.has(groupContainer)) {
        groupMap.set(groupContainer, []);
      }
      groupMap.get(groupContainer).push(block);
    }

    for (const [groupContainer, blocks] of groupMap.entries()) {
      const extracted = blocks.map(extractFilamentBlockInfo).filter(Boolean);
      if (extracted.length === 0) continue;

      // 计算当前耗材列表的指纹，避免未变化时重复重建 DOM
      const fingerprint = extracted.map(x => `${x.material}:${x.hex}:${x.weight}`).join("|");

      let panel = groupContainer.parentElement
        ? groupContainer.parentElement.querySelector(":scope > .bambu-fh-container")
        : null;

      // 如果 groupContainer 本身就是 flex 行或块容器，确保面板插在 groupContainer 内部末尾或紧随其后
      if (!panel) {
        panel = groupContainer.querySelector(":scope > .bambu-fh-container");
      }

      if (panel && panel.getAttribute("data-fingerprint") === fingerprint) {
        continue;
      }

      if (!panel) {
        panel = document.createElement("div");
        panel.className = "bambu-fh-container";
        // 对于 .filaments_detail 或 .filaments_info，插在它内部末尾或紧跟它后面最自然
        if (groupContainer.classList.contains("filaments_detail") || groupContainer.classList.contains("filaments_info")) {
          groupContainer.insertAdjacentElement("afterend", panel);
        } else {
          groupContainer.appendChild(panel);
        }
      }

      panel.setAttribute("data-fingerprint", fingerprint);
      panel.innerHTML = "";

      const header = document.createElement("div");
      header.className = "bambu-fh-header";
      header.innerHTML = `
        <span class="bambu-fh-header-title">
          <span class="bambu-fh-header-dot"></span>
          <span>拓竹官方耗材色号对照 (Basic / Matte 等)</span>
        </span>
        <span class="bambu-fh-header-tip">点击标签复制编码</span>
      `;
      panel.appendChild(header);

      const list = document.createElement("div");
      list.className = "bambu-fh-list";

      extracted.forEach((info, idx) => {
        const matchResult = matchBambuFilaments(info.material, info.hex);
        const row = createFilamentMatchRow(idx, info, matchResult);
        list.appendChild(row);

        // 同时给原生的 .filaments-block 增加直观的鼠标悬停提示
        if (blocks[idx] && matchResult && matchResult.displayList.length > 0) {
          const tipLines = matchResult.displayList.map(
            m => `${m.isExact ? "●" : "≈"} ${m.series} ${m.nameZh} (${m.nameEn}) - 编码: ${m.code}`
          );
          blocks[idx].title = `色值: ${info.hex}\n${tipLines.join("\n")}`;
        }
      });

      panel.appendChild(list);
    }
  }

  // 防抖调度
  let rafId = null;
  function scheduleEnhance() {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      rafId = null;
      enhanceAllFilamentContainers();
    });
  }

  // 初次运行
  enhanceAllFilamentContainers();

  // 监听 DOM 变化（处理鼠标悬停 #mouse-over-popover 弹出、切换打印配置卡片、打开分盘详情等）
  const observer = new MutationObserver(() => {
    scheduleEnhance();
  });

  observer.observe(document.documentElement || document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["style", "class"]
  });
})();
