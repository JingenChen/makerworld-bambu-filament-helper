(function () {
  const { BAMBU_FILAMENTS_DB } = window.BambuFilamentMatcher;
  const searchInput = document.getElementById("searchInput");
  const seriesSelect = document.getElementById("seriesSelect");
  const listEl = document.getElementById("filamentList");
  const toastEl = document.getElementById("toast");
  let timer = null;

  function showToast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => toastEl.classList.remove("show"), 1600);
  }

  function render() {
    const q = (searchInput.value || "").trim().toLowerCase();
    const seriesFilter = seriesSelect.value;

    const filtered = BAMBU_FILAMENTS_DB.filter(item => {
      if (seriesFilter) {
        if (seriesFilter === "ABS" || seriesFilter === "ASA" || seriesFilter === "TPU" || seriesFilter === "PC" || seriesFilter === "PA") {
          if (item.material !== seriesFilter) return false;
        } else if (item.series !== seriesFilter) {
          return false;
        }
      }
      if (!q) return true;
      return (
        item.nameZh.toLowerCase().includes(q) ||
        item.nameEn.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.series.toLowerCase().includes(q) ||
        item.hex.toLowerCase().includes(q)
      );
    });

    listEl.innerHTML = "";
    for (const item of filtered) {
      const div = document.createElement("div");
      div.className = "item";
      div.innerHTML = `
        <div class="item-left">
          <span class="swatch" style="background:${item.hex}"></span>
          <div>
            <div class="info-main">${item.series} · ${item.nameZh}</div>
            <div class="info-sub">${item.nameEn}</div>
          </div>
        </div>
        <div class="item-right">
          <div class="code">${item.code}</div>
          <div class="hex">${item.hex}</div>
        </div>
      `;
      div.addEventListener("click", () => {
        const text = `${item.series} ${item.nameZh} (${item.code})`;
        navigator.clipboard.writeText(item.code).then(() => {
          showToast(`已复制编码 ${item.code}：${text}`);
        });
      });
      listEl.appendChild(div);
    }
  }

  searchInput.addEventListener("input", render);
  seriesSelect.addEventListener("change", render);
  render();
})();
