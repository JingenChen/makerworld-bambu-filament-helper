/**
 * 拓竹官方耗材色卡与编码数据库 (Bambu Lab Official Filaments Database)
 * 涵盖 PLA Basic, PLA Matte, PLA Silk+, PLA Translucent, PLA Wood, PLA-CF, PLA Metal,
 * PLA Sparkle, PLA Marble, PLA Galaxy, PLA Glow, PLA Aero, PLA Pure,
 * PETG HF, PETG Basic, PETG Matte, PETG Translucent, PETG-CF,
 * ABS, ABS-GF, ASA, ASA Aero, ASA-CF, TPU 95A HF, TPU for AMS, PC, PC FR, PA/PET/PPA/PPS-CF 等
 */
(function (root) {
  const BAMBU_FILAMENTS_DB = [
    // ==================== PLA Basic (10xxx) ====================
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10100", nameZh: "玉石白", nameEn: "Jade White", hex: "#FFFFFF" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10101", nameZh: "黑色", nameEn: "Black", hex: "#000000" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10102", nameZh: "银色", nameEn: "Silver", hex: "#A6A9AA" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10103", nameZh: "灰色", nameEn: "Gray", hex: "#8E9089" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10104", nameZh: "浅灰", nameEn: "Light Gray", hex: "#D1D3D5" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10105", nameZh: "深灰", nameEn: "Dark Gray", hex: "#545454" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10200", nameZh: "红色", nameEn: "Red", hex: "#C12E1F" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10201", nameZh: "米肤色", nameEn: "Beige", hex: "#F7E6DE" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10202", nameZh: "品红", nameEn: "Magenta", hex: "#EC008C" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10203", nameZh: "粉色", nameEn: "Pink", hex: "#F55A74" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10204", nameZh: "玫红", nameEn: "Hot Pink", hex: "#F5547C" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10205", nameZh: "栗红", nameEn: "Maroon Red", hex: "#9D2235" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10300", nameZh: "橙色", nameEn: "Orange", hex: "#FF6A13" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10301", nameZh: "南瓜橙", nameEn: "Pumpkin Orange", hex: "#FF9016" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10400", nameZh: "黄色", nameEn: "Yellow", hex: "#F4EE2A" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10401", nameZh: "金色", nameEn: "Gold", hex: "#E4BD68" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10402", nameZh: "向日葵黄", nameEn: "Sunflower Yellow", hex: "#FEC600" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10501", nameZh: "拓竹绿", nameEn: "Bambu Green", hex: "#00AE42" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10502", nameZh: "槲寄生绿", nameEn: "Mistletoe Green", hex: "#3F8E43" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10503", nameZh: "亮绿", nameEn: "Bright Green", hex: "#BECF00" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10601", nameZh: "蓝色", nameEn: "Blue", hex: "#0A2989" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10602", nameZh: "蓝灰", nameEn: "Blue Gray", hex: "#5B6579" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10603", nameZh: "青色", nameEn: "Cyan", hex: "#0086D6" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10604", nameZh: "钴蓝", nameEn: "Cobalt Blue", hex: "#0056B8" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10605", nameZh: "松石绿", nameEn: "Turquoise", hex: "#00B1B7" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10700", nameZh: "紫色", nameEn: "Purple", hex: "#5E43B7" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10701", nameZh: "靛紫", nameEn: "Indigo Purple", hex: "#482960" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10800", nameZh: "棕色", nameEn: "Brown", hex: "#9D432C" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10801", nameZh: "青铜", nameEn: "Bronze", hex: "#847D48" },
    { material: "PLA", series: "PLA Basic", seriesShort: "Basic", tier: "basic", priority: 1, code: "10802", nameZh: "可可棕", nameEn: "Cocoa Brown", hex: "#6F5034" },

    // ==================== PLA Matte 哑光 (11xxx) ====================
    { material: "PLA", series: "PLA Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "11100", nameZh: "象牙白", nameEn: "Ivory White", hex: "#FFFFFF" },
    { material: "PLA", series: "PLA Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "11101", nameZh: "炭黑", nameEn: "Charcoal", hex: "#000000" },
    { material: "PLA", series: "PLA Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "11102", nameZh: "岩石灰", nameEn: "Ash Gray", hex: "#9B9EA0" },
    { material: "PLA", series: "PLA Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "11103", nameZh: "骨白", nameEn: "Bone White", hex: "#CBC6B8" },
    { material: "PLA", series: "PLA Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "11104", nameZh: "水泥灰", nameEn: "Nardo Gray", hex: "#757575" },
    { material: "PLA", series: "PLA Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "11200", nameZh: "猩红", nameEn: "Scarlet Red", hex: "#DE4343" },
    { material: "PLA", series: "PLA Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "11201", nameZh: "樱花粉", nameEn: "Sakura Pink", hex: "#E8AFCF" },
    { material: "PLA", series: "PLA Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "11202", nameZh: "暗红", nameEn: "Dark Red", hex: "#BB3D43" },
    { material: "PLA", series: "PLA Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "11203", nameZh: "赤陶色", nameEn: "Terracotta", hex: "#B15533" },
    { material: "PLA", series: "PLA Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "11204", nameZh: "梅子色", nameEn: "Plum", hex: "#950051" },
    { material: "PLA", series: "PLA Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "11300", nameZh: "柑橘橙", nameEn: "Mandarin Orange", hex: "#F99963" },
    { material: "PLA", series: "PLA Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "11400", nameZh: "柠檬黄", nameEn: "Lemon Yellow", hex: "#F7D959" },
    { material: "PLA", series: "PLA Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "11401", nameZh: "沙漠黄", nameEn: "Desert Tan", hex: "#E8DBB7" },
    { material: "PLA", series: "PLA Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "11500", nameZh: "草绿", nameEn: "Grass Green", hex: "#61C680" },
    { material: "PLA", series: "PLA Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "11501", nameZh: "暗绿", nameEn: "Dark Green", hex: "#68724D" },
    { material: "PLA", series: "PLA Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "11502", nameZh: "苹果绿", nameEn: "Apple Green", hex: "#C2E189" },
    { material: "PLA", series: "PLA Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "11600", nameZh: "海军蓝", nameEn: "Marine Blue", hex: "#0078BF" },
    { material: "PLA", series: "PLA Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "11601", nameZh: "冰蓝", nameEn: "Ice Blue", hex: "#A3D8E1" },
    { material: "PLA", series: "PLA Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "11602", nameZh: "暗蓝", nameEn: "Dark Blue", hex: "#042F56" },
    { material: "PLA", series: "PLA Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "11603", nameZh: "天蓝", nameEn: "Sky Blue", hex: "#56B7E6" },
    { material: "PLA", series: "PLA Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "11700", nameZh: "丁香紫", nameEn: "Lilac Purple", hex: "#AE96D4" },
    { material: "PLA", series: "PLA Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "11800", nameZh: "拿铁棕", nameEn: "Latte Brown", hex: "#D3B7A7" },
    { material: "PLA", series: "PLA Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "11801", nameZh: "暗棕", nameEn: "Dark Brown", hex: "#7D6556" },
    { material: "PLA", series: "PLA Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "11802", nameZh: "黑巧色", nameEn: "Dark Chocolate", hex: "#4D3324" },
    { material: "PLA", series: "PLA Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "11803", nameZh: "焦糖色", nameEn: "Caramel", hex: "#AE835B" },

    // ==================== PLA Silk+ 丝绸 (13xxx) ====================
    { material: "PLA", series: "PLA Silk+", seriesShort: "Silk+", tier: "silk", priority: 3, code: "13110", nameZh: "丝绸白", nameEn: "White", hex: "#FFFFFF" },
    { material: "PLA", series: "PLA Silk+", seriesShort: "Silk+", tier: "silk", priority: 3, code: "13109", nameZh: "丝绸银", nameEn: "Silver", hex: "#C8C8C8" },
    { material: "PLA", series: "PLA Silk+", seriesShort: "Silk+", tier: "silk", priority: 3, code: "13108", nameZh: "钛灰", nameEn: "Titan Gray", hex: "#5F6367" },
    { material: "PLA", series: "PLA Silk+", seriesShort: "Silk+", tier: "silk", priority: 3, code: "13205", nameZh: "糖果红", nameEn: "Candy Red", hex: "#D02727" },
    { material: "PLA", series: "PLA Silk+", seriesShort: "Silk+", tier: "silk", priority: 3, code: "13206", nameZh: "玫瑰金", nameEn: "Rose Gold", hex: "#BA9594" },
    { material: "PLA", series: "PLA Silk+", seriesShort: "Silk+", tier: "silk", priority: 3, code: "13207", nameZh: "丝绸粉", nameEn: "Pink", hex: "#F7ADA6" },
    { material: "PLA", series: "PLA Silk+", seriesShort: "Silk+", tier: "silk", priority: 3, code: "13404", nameZh: "香槟金", nameEn: "Champagne", hex: "#F3CFB2" },
    { material: "PLA", series: "PLA Silk+", seriesShort: "Silk+", tier: "silk", priority: 3, code: "13405", nameZh: "丝绸金", nameEn: "Gold", hex: "#F4A925" },
    { material: "PLA", series: "PLA Silk+", seriesShort: "Silk+", tier: "silk", priority: 3, code: "13506", nameZh: "糖果绿", nameEn: "Candy Green", hex: "#018814" },
    { material: "PLA", series: "PLA Silk+", seriesShort: "Silk+", tier: "silk", priority: 3, code: "13507", nameZh: "薄荷绿", nameEn: "Mint", hex: "#96DCB9" },
    { material: "PLA", series: "PLA Silk+", seriesShort: "Silk+", tier: "silk", priority: 3, code: "13603", nameZh: "婴儿蓝", nameEn: "Baby Blue", hex: "#A8C6EE" },
    { material: "PLA", series: "PLA Silk+", seriesShort: "Silk+", tier: "silk", priority: 3, code: "13604", nameZh: "丝绸蓝", nameEn: "Blue", hex: "#008BDA" },
    { material: "PLA", series: "PLA Silk+", seriesShort: "Silk+", tier: "silk", priority: 3, code: "13702", nameZh: "丝绸紫", nameEn: "Purple", hex: "#8671CB" },

    // ==================== PLA Translucent 半透明 (13xxx) ====================
    { material: "PLA", series: "PLA Translucent", seriesShort: "Translucent", tier: "special", priority: 4, code: "13210", nameZh: "半透红", nameEn: "Red", hex: "#B50011" },
    { material: "PLA", series: "PLA Translucent", seriesShort: "Translucent", tier: "special", priority: 4, code: "13211", nameZh: "樱桃粉", nameEn: "Cherry Pink", hex: "#F5B6CD" },
    { material: "PLA", series: "PLA Translucent", seriesShort: "Translucent", tier: "special", priority: 4, code: "13301", nameZh: "半透橙", nameEn: "Orange", hex: "#F74E02" },
    { material: "PLA", series: "PLA Translucent", seriesShort: "Translucent", tier: "special", priority: 4, code: "13410", nameZh: "柔和黄", nameEn: "Mellow Yellow", hex: "#F5DBAB" },
    { material: "PLA", series: "PLA Translucent", seriesShort: "Translucent", tier: "special", priority: 4, code: "13510", nameZh: "浅玉绿", nameEn: "Light Jade", hex: "#96D8AF" },
    { material: "PLA", series: "PLA Translucent", seriesShort: "Translucent", tier: "special", priority: 4, code: "13610", nameZh: "半透冰蓝", nameEn: "Ice Blue", hex: "#B8CDE9" },
    { material: "PLA", series: "PLA Translucent", seriesShort: "Translucent", tier: "special", priority: 4, code: "13611", nameZh: "半透蓝", nameEn: "Blue", hex: "#0047BB" },
    { material: "PLA", series: "PLA Translucent", seriesShort: "Translucent", tier: "special", priority: 4, code: "13612", nameZh: "半透青绿", nameEn: "Teal", hex: "#009FA1" },
    { material: "PLA", series: "PLA Translucent", seriesShort: "Translucent", tier: "special", priority: 4, code: "13710", nameZh: "半透紫", nameEn: "Purple", hex: "#8344B0" },
    { material: "PLA", series: "PLA Translucent", seriesShort: "Translucent", tier: "special", priority: 4, code: "13711", nameZh: "薰衣草紫", nameEn: "Lavender", hex: "#B8ACD6" },

    // ==================== PLA Wood 木质 (13xxx) ====================
    { material: "PLA", series: "PLA Wood", seriesShort: "Wood", tier: "special", priority: 4, code: "13106", nameZh: "白橡木", nameEn: "White Oak", hex: "#D6CCA3" },
    { material: "PLA", series: "PLA Wood", seriesShort: "Wood", tier: "special", priority: 4, code: "13107", nameZh: "黑胡桃木", nameEn: "Black Walnut", hex: "#4F3F24" },
    { material: "PLA", series: "PLA Wood", seriesShort: "Wood", tier: "special", priority: 4, code: "13204", nameZh: "红木", nameEn: "Rosewood", hex: "#4C241C" },
    { material: "PLA", series: "PLA Wood", seriesShort: "Wood", tier: "special", priority: 4, code: "13403", nameZh: "赭黄木", nameEn: "Ochre Yellow", hex: "#C98935" },
    { material: "PLA", series: "PLA Wood", seriesShort: "Wood", tier: "special", priority: 4, code: "13505", nameZh: "经典桦木", nameEn: "Classic Birch", hex: "#918669" },
    { material: "PLA", series: "PLA Wood", seriesShort: "Wood", tier: "special", priority: 4, code: "13801", nameZh: "陶土棕木", nameEn: "Clay Brown", hex: "#995F11" },

    // ==================== PLA Metal / Sparkle / Marble / Galaxy ====================
    { material: "PLA", series: "PLA Metal", seriesShort: "Metal", tier: "special", priority: 4, code: "13100", nameZh: "铁灰金属", nameEn: "Iron Gray Metallic", hex: "#43403D" },
    { material: "PLA", series: "PLA Metal", seriesShort: "Metal", tier: "special", priority: 4, code: "13400", nameZh: "铱金金属", nameEn: "Iridium Gold Metallic", hex: "#B39B84" },
    { material: "PLA", series: "PLA Metal", seriesShort: "Metal", tier: "special", priority: 4, code: "13500", nameZh: "氧化绿金属", nameEn: "Oxide Green Metallic", hex: "#1D7C6A" },
    { material: "PLA", series: "PLA Metal", seriesShort: "Metal", tier: "special", priority: 4, code: "13600", nameZh: "钴蓝金属", nameEn: "Cobalt Blue Metallic", hex: "#39699E" },
    { material: "PLA", series: "PLA Metal", seriesShort: "Metal", tier: "special", priority: 4, code: "13800", nameZh: "铜棕金属", nameEn: "Copper Brown Metallic", hex: "#AA6443" },

    { material: "PLA", series: "PLA Sparkle", seriesShort: "Sparkle", tier: "special", priority: 4, code: "13101", nameZh: "玛瑙黑闪耀", nameEn: "Onyx Black Sparkle", hex: "#2D2B28" },
    { material: "PLA", series: "PLA Sparkle", seriesShort: "Sparkle", tier: "special", priority: 4, code: "13102", nameZh: "板岩灰闪耀", nameEn: "Slate Gray Sparkle", hex: "#8E9089" },
    { material: "PLA", series: "PLA Sparkle", seriesShort: "Sparkle", tier: "special", priority: 4, code: "13200", nameZh: "绯红闪耀", nameEn: "Crimson Red Sparkle", hex: "#792B36" },
    { material: "PLA", series: "PLA Sparkle", seriesShort: "Sparkle", tier: "special", priority: 4, code: "13402", nameZh: "经典金闪耀", nameEn: "Classic Gold Sparkle", hex: "#CEA629" },
    { material: "PLA", series: "PLA Sparkle", seriesShort: "Sparkle", tier: "special", priority: 4, code: "13501", nameZh: "高山绿闪耀", nameEn: "Alpine Green Sparkle", hex: "#3F5443" },
    { material: "PLA", series: "PLA Sparkle", seriesShort: "Sparkle", tier: "special", priority: 4, code: "13700", nameZh: "皇室紫闪耀", nameEn: "Royal Purple Sparkle", hex: "#483D8B" },

    { material: "PLA", series: "PLA Marble", seriesShort: "Marble", tier: "special", priority: 4, code: "13103", nameZh: "白色大理石", nameEn: "White Marble", hex: "#F7F3F0" },
    { material: "PLA", series: "PLA Marble", seriesShort: "Marble", tier: "special", priority: 4, code: "13201", nameZh: "红花岗岩", nameEn: "Red Granite", hex: "#AD4E38" },

    { material: "PLA", series: "PLA Galaxy", seriesShort: "Galaxy", tier: "special", priority: 4, code: "13203", nameZh: "银河棕", nameEn: "Brown", hex: "#684A43" },
    { material: "PLA", series: "PLA Galaxy", seriesShort: "Galaxy", tier: "special", priority: 4, code: "13503", nameZh: "银河绿", nameEn: "Green", hex: "#3B665E" },
    { material: "PLA", series: "PLA Galaxy", seriesShort: "Galaxy", tier: "special", priority: 4, code: "13504", nameZh: "星云色", nameEn: "Nebulae", hex: "#424379" },
    { material: "PLA", series: "PLA Galaxy", seriesShort: "Galaxy", tier: "special", priority: 4, code: "13602", nameZh: "银河紫", nameEn: "Purple", hex: "#594177" },

    // ==================== PLA-CF / Glow / Aero / Pure ====================
    { material: "PLA", series: "PLA-CF", seriesShort: "CF", tier: "cf", priority: 5, code: "14100", nameZh: "碳纤黑", nameEn: "Black", hex: "#000000" },
    { material: "PLA", series: "PLA-CF", seriesShort: "CF", tier: "cf", priority: 5, code: "14101", nameZh: "熔岩灰", nameEn: "Lava Gray", hex: "#4D5054" },
    { material: "PLA", series: "PLA-CF", seriesShort: "CF", tier: "cf", priority: 5, code: "14200", nameZh: "勃艮第红", nameEn: "Burgundy Red", hex: "#951E23" },
    { material: "PLA", series: "PLA-CF", seriesShort: "CF", tier: "cf", priority: 5, code: "14500", nameZh: "抹茶绿", nameEn: "Matcha Green", hex: "#5C9748" },
    { material: "PLA", series: "PLA-CF", seriesShort: "CF", tier: "cf", priority: 5, code: "14600", nameZh: "牛仔蓝", nameEn: "Jeans Blue", hex: "#6E88BC" },
    { material: "PLA", series: "PLA-CF", seriesShort: "CF", tier: "cf", priority: 5, code: "14601", nameZh: "皇家蓝", nameEn: "Royal Blue", hex: "#2842AD" },
    { material: "PLA", series: "PLA-CF", seriesShort: "CF", tier: "cf", priority: 5, code: "14700", nameZh: "鸢尾紫", nameEn: "Iris Purple", hex: "#69398E" },

    { material: "PLA", series: "PLA Glow", seriesShort: "Glow", tier: "special", priority: 5, code: "15200", nameZh: "夜光粉", nameEn: "Glow Pink", hex: "#F17B8F" },
    { material: "PLA", series: "PLA Glow", seriesShort: "Glow", tier: "special", priority: 5, code: "15300", nameZh: "夜光橙", nameEn: "Glow Orange", hex: "#FF9D5B" },
    { material: "PLA", series: "PLA Glow", seriesShort: "Glow", tier: "special", priority: 5, code: "15400", nameZh: "夜光黄", nameEn: "Glow Yellow", hex: "#F8FF80" },
    { material: "PLA", series: "PLA Glow", seriesShort: "Glow", tier: "special", priority: 5, code: "15500", nameZh: "夜光绿", nameEn: "Glow Green", hex: "#A1FFAC" },
    { material: "PLA", series: "PLA Glow", seriesShort: "Glow", tier: "special", priority: 5, code: "15600", nameZh: "夜光蓝", nameEn: "Glow Blue", hex: "#7AC0E9" },

    { material: "PLA", series: "PLA Aero", seriesShort: "Aero", tier: "special", priority: 6, code: "14102", nameZh: "发泡白", nameEn: "White", hex: "#FFFFFF" },
    { material: "PLA", series: "PLA Aero", seriesShort: "Aero", tier: "special", priority: 6, code: "14103", nameZh: "发泡黑", nameEn: "Black", hex: "#000000" },
    { material: "PLA", series: "PLA Aero", seriesShort: "Aero", tier: "special", priority: 6, code: "14104", nameZh: "发泡灰", nameEn: "Gray", hex: "#8E9089" },

    { material: "PLA", series: "PLA Pure", seriesShort: "Pure", tier: "special", priority: 5, code: "17100", nameZh: "纯白", nameEn: "Pure White", hex: "#FFFFFF" },
    { material: "PLA", series: "PLA Pure", seriesShort: "Pure", tier: "special", priority: 5, code: "17101", nameZh: "纯黑", nameEn: "Absolute Black", hex: "#000000" },
    { material: "PLA", series: "PLA Pure", seriesShort: "Pure", tier: "special", priority: 5, code: "17200", nameZh: "奶昔粉", nameEn: "Milky Pink", hex: "#F7CED7" },
    { material: "PLA", series: "PLA Pure", seriesShort: "Pure", tier: "special", priority: 5, code: "17300", nameZh: "杏色", nameEn: "Apricot", hex: "#FFB673" },
    { material: "PLA", series: "PLA Pure", seriesShort: "Pure", tier: "special", priority: 5, code: "17600", nameZh: "浅蓝", nameEn: "Baby Blue", hex: "#A4DBE8" },

    // ==================== PETG HF 高速系列 (33xxx) ====================
    { material: "PETG", series: "PETG HF", seriesShort: "HF", tier: "basic", priority: 1, code: "33100", nameZh: "白色", nameEn: "White", hex: "#FFFFFF" },
    { material: "PETG", series: "PETG HF", seriesShort: "HF", tier: "basic", priority: 1, code: "33101", nameZh: "灰色", nameEn: "Gray", hex: "#ADB1B2" },
    { material: "PETG", series: "PETG HF", seriesShort: "HF", tier: "basic", priority: 1, code: "33102", nameZh: "黑色", nameEn: "Black", hex: "#000000" },
    { material: "PETG", series: "PETG HF", seriesShort: "HF", tier: "basic", priority: 1, code: "33103", nameZh: "深灰", nameEn: "Dark Gray", hex: "#515151" },
    { material: "PETG", series: "PETG HF", seriesShort: "HF", tier: "basic", priority: 1, code: "33200", nameZh: "红色", nameEn: "Red", hex: "#EB3A3A" },
    { material: "PETG", series: "PETG HF", seriesShort: "HF", tier: "basic", priority: 1, code: "33300", nameZh: "橙色", nameEn: "Orange", hex: "#F75403" },
    { material: "PETG", series: "PETG HF", seriesShort: "HF", tier: "basic", priority: 1, code: "33400", nameZh: "黄色", nameEn: "Yellow", hex: "#FFD00B" },
    { material: "PETG", series: "PETG HF", seriesShort: "HF", tier: "basic", priority: 1, code: "33401", nameZh: "奶油色", nameEn: "Cream", hex: "#F9DFB9" },
    { material: "PETG", series: "PETG HF", seriesShort: "HF", tier: "basic", priority: 1, code: "33500", nameZh: "绿色", nameEn: "Green", hex: "#00AE42" },
    { material: "PETG", series: "PETG HF", seriesShort: "HF", tier: "basic", priority: 1, code: "33501", nameZh: "青柠绿", nameEn: "Lime Green", hex: "#6EE53C" },
    { material: "PETG", series: "PETG HF", seriesShort: "HF", tier: "basic", priority: 1, code: "33502", nameZh: "森林绿", nameEn: "Forest Green", hex: "#39541A" },
    { material: "PETG", series: "PETG HF", seriesShort: "HF", tier: "basic", priority: 1, code: "33600", nameZh: "蓝色", nameEn: "Blue", hex: "#002E96" },
    { material: "PETG", series: "PETG HF", seriesShort: "HF", tier: "basic", priority: 1, code: "33601", nameZh: "湖蓝", nameEn: "Lake Blue", hex: "#1F79E5" },
    { material: "PETG", series: "PETG HF", seriesShort: "HF", tier: "basic", priority: 1, code: "33801", nameZh: "花生棕", nameEn: "Peanut Brown", hex: "#875718" },

    // ==================== PETG Basic 基础系列 (30xxx) ====================
    { material: "PETG", series: "PETG Basic", seriesShort: "Basic", tier: "basic", priority: 2, code: "30106", nameZh: "白色", nameEn: "White", hex: "#FFFFFF" },
    { material: "PETG", series: "PETG Basic", seriesShort: "Basic", tier: "basic", priority: 2, code: "30105", nameZh: "黑色", nameEn: "Black", hex: "#000000" },
    { material: "PETG", series: "PETG Basic", seriesShort: "Basic", tier: "basic", priority: 2, code: "30107", nameZh: "灰色", nameEn: "Gray", hex: "#7F7E83" },
    { material: "PETG", series: "PETG Basic", seriesShort: "Basic", tier: "basic", priority: 2, code: "30108", nameZh: "雾霾蓝", nameEn: "Misty Blue", hex: "#688197" },
    { material: "PETG", series: "PETG Basic", seriesShort: "Basic", tier: "basic", priority: 2, code: "30201", nameZh: "红色", nameEn: "Red", hex: "#D6001C" },
    { material: "PETG", series: "PETG Basic", seriesShort: "Basic", tier: "basic", priority: 2, code: "30301", nameZh: "橙色", nameEn: "Orange", hex: "#FF671F" },
    { material: "PETG", series: "PETG Basic", seriesShort: "Basic", tier: "basic", priority: 2, code: "30402", nameZh: "黄色", nameEn: "Yellow", hex: "#FCE300" },
    { material: "PETG", series: "PETG Basic", seriesShort: "Basic", tier: "basic", priority: 2, code: "30403", nameZh: "深米色/金", nameEn: "Dark Beige", hex: "#B28B33" },
    { material: "PETG", series: "PETG Basic", seriesShort: "Basic", tier: "basic", priority: 2, code: "30502", nameZh: "绿色", nameEn: "Green", hex: "#009639" },
    { material: "PETG", series: "PETG Basic", seriesShort: "Basic", tier: "basic", priority: 2, code: "30503", nameZh: "松绿", nameEn: "Pine Green", hex: "#7CD82B" },
    { material: "PETG", series: "PETG Basic", seriesShort: "Basic", tier: "basic", priority: 2, code: "30603", nameZh: "宝蓝/湖蓝", nameEn: "Reflex Blue", hex: "#0069B1" },
    { material: "PETG", series: "PETG Basic", seriesShort: "Basic", tier: "basic", priority: 2, code: "30604", nameZh: "藏青蓝", nameEn: "Navy Blue", hex: "#001489" },
    { material: "PETG", series: "PETG Basic", seriesShort: "Basic", tier: "basic", priority: 2, code: "30800", nameZh: "深棕", nameEn: "Dark Brown", hex: "#4F2C1D" },

    // ==================== PETG Matte 哑光系列 (35xxx) ====================
    { material: "PETG", series: "PETG Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "35100", nameZh: "哑光白", nameEn: "White", hex: "#FFFFFF" },
    { material: "PETG", series: "PETG Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "35101", nameZh: "哑光黑", nameEn: "Black", hex: "#000000" },
    { material: "PETG", series: "PETG Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "35102", nameZh: "哑光灰", nameEn: "Gray", hex: "#7F7E83" },
    { material: "PETG", series: "PETG Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "35500", nameZh: "哑光青柠", nameEn: "Lime", hex: "#C0DF16" },
    { material: "PETG", series: "PETG Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "35501", nameZh: "牛油果绿", nameEn: "Avocado Green", hex: "#BCE194" },
    { material: "PETG", series: "PETG Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "35600", nameZh: "婴儿蓝", nameEn: "Baby Blue", hex: "#B9D9EB" },
    { material: "PETG", series: "PETG Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "35700", nameZh: "哑光粉", nameEn: "Pink", hex: "#FABBCB" },
    { material: "PETG", series: "PETG Matte", seriesShort: "Matte", tier: "matte", priority: 2, code: "35702", nameZh: "紫罗兰", nameEn: "Violet", hex: "#A7A4E0" },

    // ==================== PETG Translucent (32xxx) & PETG-CF (31xxx) ====================
    { material: "PETG", series: "PETG Translucent", seriesShort: "Translucent", tier: "special", priority: 4, code: "32101", nameZh: "透明无色", nameEn: "Clear", hex: "#FFFFFF" },
    { material: "PETG", series: "PETG Translucent", seriesShort: "Translucent", tier: "special", priority: 4, code: "32100", nameZh: "半透灰", nameEn: "Translucent Gray", hex: "#8E8E8E" },
    { material: "PETG", series: "PETG Translucent", seriesShort: "Translucent", tier: "special", priority: 4, code: "32200", nameZh: "半透粉", nameEn: "Translucent Pink", hex: "#F9C1BD" },
    { material: "PETG", series: "PETG Translucent", seriesShort: "Translucent", tier: "special", priority: 4, code: "32300", nameZh: "半透橙", nameEn: "Translucent Orange", hex: "#FF911A" },
    { material: "PETG", series: "PETG Translucent", seriesShort: "Translucent", tier: "special", priority: 4, code: "32500", nameZh: "半透橄榄", nameEn: "Translucent Olive", hex: "#748C45" },
    { material: "PETG", series: "PETG Translucent", seriesShort: "Translucent", tier: "special", priority: 4, code: "32501", nameZh: "半透青绿", nameEn: "Translucent Teal", hex: "#77EDD7" },
    { material: "PETG", series: "PETG Translucent", seriesShort: "Translucent", tier: "special", priority: 4, code: "32600", nameZh: "半透浅蓝", nameEn: "Translucent Light Blue", hex: "#61B0FF" },
    { material: "PETG", series: "PETG Translucent", seriesShort: "Translucent", tier: "special", priority: 4, code: "32700", nameZh: "半透紫", nameEn: "Translucent Purple", hex: "#D6ABFF" },
    { material: "PETG", series: "PETG Translucent", seriesShort: "Translucent", tier: "special", priority: 4, code: "32800", nameZh: "半透棕", nameEn: "Translucent Brown", hex: "#C9A381" },

    { material: "PETG", series: "PETG-CF", seriesShort: "CF", tier: "cf", priority: 5, code: "31100", nameZh: "碳纤黑", nameEn: "Black", hex: "#000000" },
    { material: "PETG", series: "PETG-CF", seriesShort: "CF", tier: "cf", priority: 5, code: "31101", nameZh: "钛灰", nameEn: "Titan Gray", hex: "#565656" },
    { material: "PETG", series: "PETG-CF", seriesShort: "CF", tier: "cf", priority: 5, code: "31200", nameZh: "砖红", nameEn: "Brick Red", hex: "#9F332A" },
    { material: "PETG", series: "PETG-CF", seriesShort: "CF", tier: "cf", priority: 5, code: "31500", nameZh: "孔雀石绿", nameEn: "Malachite Green", hex: "#16B08E" },
    { material: "PETG", series: "PETG-CF", seriesShort: "CF", tier: "cf", priority: 5, code: "31600", nameZh: "靛蓝", nameEn: "Indigo Blue", hex: "#324585" },
    { material: "PETG", series: "PETG-CF", seriesShort: "CF", tier: "cf", priority: 5, code: "31700", nameZh: "紫罗兰", nameEn: "Violet Purple", hex: "#583061" },

    // ==================== ABS / ABS-GF / ASA (40xxx-46xxx) ====================
    { material: "ABS", series: "ABS", seriesShort: "Basic", tier: "basic", priority: 1, code: "40100", nameZh: "白色", nameEn: "White", hex: "#FFFFFF" },
    { material: "ABS", series: "ABS", seriesShort: "Basic", tier: "basic", priority: 1, code: "40101", nameZh: "黑色", nameEn: "Black", hex: "#000000" },
    { material: "ABS", series: "ABS", seriesShort: "Basic", tier: "basic", priority: 1, code: "40102", nameZh: "银色", nameEn: "Silver", hex: "#87909A" },
    { material: "ABS", series: "ABS", seriesShort: "Basic", tier: "basic", priority: 1, code: "40200", nameZh: "红色", nameEn: "Red", hex: "#D32941" },
    { material: "ABS", series: "ABS", seriesShort: "Basic", tier: "basic", priority: 1, code: "40300", nameZh: "橙色", nameEn: "Orange", hex: "#FF6A13" },
    { material: "ABS", series: "ABS", seriesShort: "Basic", tier: "basic", priority: 1, code: "40400", nameZh: "黄色", nameEn: "Yellow", hex: "#FCE900" },
    { material: "ABS", series: "ABS", seriesShort: "Basic", tier: "basic", priority: 1, code: "40401", nameZh: "米色", nameEn: "Beige", hex: "#DFD1A7" },
    { material: "ABS", series: "ABS", seriesShort: "Basic", tier: "basic", priority: 1, code: "40402", nameZh: "橘黄", nameEn: "Tangerine Yellow", hex: "#FFC72C" },
    { material: "ABS", series: "ABS", seriesShort: "Basic", tier: "basic", priority: 1, code: "40500", nameZh: "拓竹绿", nameEn: "Bambu Green", hex: "#00AE42" },
    { material: "ABS", series: "ABS", seriesShort: "Basic", tier: "basic", priority: 1, code: "40501", nameZh: "薄荷绿", nameEn: "Mint", hex: "#7AE1BF" },
    { material: "ABS", series: "ABS", seriesShort: "Basic", tier: "basic", priority: 1, code: "40502", nameZh: "橄榄绿", nameEn: "Olive", hex: "#789D4A" },
    { material: "ABS", series: "ABS", seriesShort: "Basic", tier: "basic", priority: 1, code: "40600", nameZh: "蓝色", nameEn: "Blue", hex: "#0A2CA5" },
    { material: "ABS", series: "ABS", seriesShort: "Basic", tier: "basic", priority: 1, code: "40601", nameZh: "天青蓝", nameEn: "Azure", hex: "#489FDF" },
    { material: "ABS", series: "ABS", seriesShort: "Basic", tier: "basic", priority: 1, code: "40602", nameZh: "藏青蓝", nameEn: "Navy Blue", hex: "#0C2340" },
    { material: "ABS", series: "ABS", seriesShort: "Basic", tier: "basic", priority: 1, code: "40700", nameZh: "紫色", nameEn: "Purple", hex: "#AF1685" },
    { material: "ABS", series: "ABS", seriesShort: "Basic", tier: "basic", priority: 1, code: "40701", nameZh: "薰衣草紫", nameEn: "Lavender", hex: "#7248BD" },

    { material: "ABS", series: "ABS-GF", seriesShort: "GF", tier: "cf", priority: 4, code: "41100", nameZh: "玻纤白", nameEn: "White", hex: "#FFFFFF" },
    { material: "ABS", series: "ABS-GF", seriesShort: "GF", tier: "cf", priority: 4, code: "41101", nameZh: "玻纤黑", nameEn: "Black", hex: "#000000" },
    { material: "ABS", series: "ABS-GF", seriesShort: "GF", tier: "cf", priority: 4, code: "41102", nameZh: "玻纤灰", nameEn: "Gray", hex: "#C6C6C6" },
    { material: "ABS", series: "ABS-GF", seriesShort: "GF", tier: "cf", priority: 4, code: "41200", nameZh: "玻纤红", nameEn: "Red", hex: "#E83100" },
    { material: "ABS", series: "ABS-GF", seriesShort: "GF", tier: "cf", priority: 4, code: "41300", nameZh: "玻纤橙", nameEn: "Orange", hex: "#F48438" },
    { material: "ABS", series: "ABS-GF", seriesShort: "GF", tier: "cf", priority: 4, code: "41600", nameZh: "玻纤蓝", nameEn: "Blue", hex: "#0C3B95" },

    { material: "ASA", series: "ASA", seriesShort: "Basic", tier: "basic", priority: 1, code: "45100", nameZh: "白色", nameEn: "White", hex: "#FFFAF2" },
    { material: "ASA", series: "ASA", seriesShort: "Basic", tier: "basic", priority: 1, code: "45101", nameZh: "黑色", nameEn: "Black", hex: "#000000" },
    { material: "ASA", series: "ASA", seriesShort: "Basic", tier: "basic", priority: 1, code: "45102", nameZh: "灰色", nameEn: "Gray", hex: "#8A949E" },
    { material: "ASA", series: "ASA", seriesShort: "Basic", tier: "basic", priority: 1, code: "45200", nameZh: "红色", nameEn: "Red", hex: "#E02928" },
    { material: "ASA", series: "ASA", seriesShort: "Basic", tier: "basic", priority: 1, code: "45500", nameZh: "绿色", nameEn: "Green", hex: "#00A6A0" },
    { material: "ASA", series: "ASA", seriesShort: "Basic", tier: "basic", priority: 1, code: "45600", nameZh: "蓝色", nameEn: "Blue", hex: "#2140B4" },
    { material: "ASA", series: "ASA Aero", seriesShort: "Aero", tier: "special", priority: 4, code: "46100", nameZh: "发泡白", nameEn: "White Aero", hex: "#F5F1DD" },
    { material: "ASA", series: "ASA-CF", seriesShort: "CF", tier: "cf", priority: 4, code: "46101", nameZh: "碳纤黑", nameEn: "Black", hex: "#000000" },

    // ==================== TPU (51xxx-53xxx) ====================
    { material: "TPU", series: "TPU 95A HF", seriesShort: "95A HF", tier: "basic", priority: 1, code: "51102", nameZh: "白色", nameEn: "White", hex: "#FFFFFF" },
    { material: "TPU", series: "TPU 95A HF", seriesShort: "95A HF", tier: "basic", priority: 1, code: "51100", nameZh: "黑色", nameEn: "Black", hex: "#101820" },
    { material: "TPU", series: "TPU 95A HF", seriesShort: "95A HF", tier: "basic", priority: 1, code: "51101", nameZh: "灰色", nameEn: "Gray", hex: "#898D8D" },
    { material: "TPU", series: "TPU 95A HF", seriesShort: "95A HF", tier: "basic", priority: 1, code: "51200", nameZh: "红色", nameEn: "Red", hex: "#C8102E" },
    { material: "TPU", series: "TPU 95A HF", seriesShort: "95A HF", tier: "basic", priority: 1, code: "51400", nameZh: "黄色", nameEn: "Yellow", hex: "#F3E600" },
    { material: "TPU", series: "TPU 95A HF", seriesShort: "95A HF", tier: "basic", priority: 1, code: "51600", nameZh: "蓝色", nameEn: "Blue", hex: "#0072CE" },

    { material: "TPU", series: "TPU for AMS", seriesShort: "for AMS", tier: "matte", priority: 2, code: "53100", nameZh: "白色", nameEn: "White", hex: "#FFFFFF" },
    { material: "TPU", series: "TPU for AMS", seriesShort: "for AMS", tier: "matte", priority: 2, code: "53101", nameZh: "黑色", nameEn: "Black", hex: "#000000" },
    { material: "TPU", series: "TPU for AMS", seriesShort: "for AMS", tier: "matte", priority: 2, code: "53102", nameZh: "灰色", nameEn: "Gray", hex: "#939393" },
    { material: "TPU", series: "TPU for AMS", seriesShort: "for AMS", tier: "matte", priority: 2, code: "53200", nameZh: "红色", nameEn: "Red", hex: "#ED0000" },
    { material: "TPU", series: "TPU for AMS", seriesShort: "for AMS", tier: "matte", priority: 2, code: "53400", nameZh: "黄色", nameEn: "Yellow", hex: "#F9EF41" },
    { material: "TPU", series: "TPU for AMS", seriesShort: "for AMS", tier: "matte", priority: 2, code: "53500", nameZh: "荧光绿", nameEn: "Neon Green", hex: "#90FF1A" },
    { material: "TPU", series: "TPU for AMS", seriesShort: "for AMS", tier: "matte", priority: 2, code: "53600", nameZh: "蓝色", nameEn: "Blue", hex: "#5898DD" },

    // ==================== PC / PA / PET / PPA / PPS ====================
    { material: "PC", series: "PC", seriesShort: "Basic", tier: "basic", priority: 1, code: "60100", nameZh: "白色", nameEn: "White", hex: "#FFFFFF" },
    { material: "PC", series: "PC", seriesShort: "Basic", tier: "basic", priority: 1, code: "60101", nameZh: "黑色", nameEn: "Black", hex: "#000000" },
    { material: "PC", series: "PC", seriesShort: "Basic", tier: "basic", priority: 1, code: "60102", nameZh: "透明黑", nameEn: "Clear Black", hex: "#1A1A1A" },
    { material: "PC", series: "PC", seriesShort: "Basic", tier: "basic", priority: 1, code: "60103", nameZh: "透明", nameEn: "Transparent", hex: "#F5F7FA" },
    { material: "PC", series: "PC FR", seriesShort: "FR", tier: "matte", priority: 2, code: "63101", nameZh: "阻燃白", nameEn: "White", hex: "#FFFFFF" },
    { material: "PC", series: "PC FR", seriesShort: "FR", tier: "matte", priority: 2, code: "63100", nameZh: "阻燃黑", nameEn: "Black", hex: "#000000" },
    { material: "PC", series: "PC FR", seriesShort: "FR", tier: "matte", priority: 2, code: "63102", nameZh: "阻燃灰", nameEn: "Gray", hex: "#A8A8AA" },

    { material: "PA", series: "PAHT-CF", seriesShort: "PAHT-CF", tier: "cf", priority: 1, code: "70100", nameZh: "碳纤黑", nameEn: "Black", hex: "#000000" },
    { material: "PA", series: "PA6-CF", seriesShort: "PA6-CF", tier: "cf", priority: 1, code: "72100", nameZh: "碳纤黑", nameEn: "Black", hex: "#000000" },
    { material: "PA", series: "PA6-GF", seriesShort: "PA6-GF", tier: "cf", priority: 2, code: "72102", nameZh: "玻纤白", nameEn: "White", hex: "#EAEAE4" },
    { material: "PA", series: "PA6-GF", seriesShort: "PA6-GF", tier: "cf", priority: 2, code: "72103", nameZh: "玻纤灰", nameEn: "Gray", hex: "#353533" },
    { material: "PA", series: "PA6-GF", seriesShort: "PA6-GF", tier: "cf", priority: 2, code: "72104", nameZh: "玻纤黑", nameEn: "Black", hex: "#000000" },
    { material: "PA", series: "PA6-GF", seriesShort: "PA6-GF", tier: "cf", priority: 2, code: "72200", nameZh: "玻纤橙", nameEn: "Orange", hex: "#FF4800" },
    { material: "PA", series: "PA6-GF", seriesShort: "PA6-GF", tier: "cf", priority: 2, code: "72600", nameZh: "玻纤蓝", nameEn: "Blue", hex: "#75AED8" },
    { material: "PET", series: "PET-CF", seriesShort: "PET-CF", tier: "cf", priority: 1, code: "71100", nameZh: "碳纤黑", nameEn: "Black", hex: "#000000" },
    { material: "PPA", series: "PPA-CF", seriesShort: "PPA-CF", tier: "cf", priority: 1, code: "73100", nameZh: "碳纤黑", nameEn: "Black", hex: "#000000" },
    { material: "PPS", series: "PPS-CF", seriesShort: "PPS-CF", tier: "cf", priority: 1, code: "76100", nameZh: "碳纤黑", nameEn: "Black", hex: "#000000" }
  ];

  // 颜色工具函数：解析 #RRGGBB 或 rgb(r,g,b)
  function parseColorToRgb(colorStr) {
    if (!colorStr) return null;
    const s = String(colorStr).trim();
    const hexMatch = s.match(/^#?([0-9a-fA-F]{6})([0-9a-fA-F]{2})?$/);
    if (hexMatch) {
      const hex = hexMatch[1];
      return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16),
        hex: "#" + hex.toUpperCase()
      };
    }
    const rgbMatch = s.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
    if (rgbMatch) {
      const r = Math.min(255, Math.max(0, parseInt(rgbMatch[1], 10)));
      const g = Math.min(255, Math.max(0, parseInt(rgbMatch[2], 10)));
      const b = Math.min(255, Math.max(0, parseInt(rgbMatch[3], 10)));
      const hex = "#" + [r, g, b].map(v => v.toString(16).padStart(2, "0")).join("").toUpperCase();
      return { r, g, b, hex };
    }
    return null;
  }

  // RGB 转 CIELAB，用于计算感知色差 Delta E (CIE76)
  function rgbToLab(r, g, b) {
    let rn = r / 255, gn = g / 255, bn = b / 255;
    rn = rn > 0.04045 ? Math.pow((rn + 0.055) / 1.055, 2.4) : rn / 12.92;
    gn = gn > 0.04045 ? Math.pow((gn + 0.055) / 1.055, 2.4) : gn / 12.92;
    bn = bn > 0.04045 ? Math.pow((bn + 0.055) / 1.055, 2.4) : bn / 12.92;

    let x = (rn * 0.4124 + gn * 0.3576 + bn * 0.1805) / 0.95047;
    let y = (rn * 0.2126 + gn * 0.7152 + bn * 0.0722) / 1.00000;
    let z = (rn * 0.0193 + gn * 0.1192 + bn * 0.9505) / 1.08883;

    x = x > 0.008856 ? Math.cbrt(x) : (7.787 * x) + 16 / 116;
    y = y > 0.008856 ? Math.cbrt(y) : (7.787 * y) + 16 / 116;
    z = z > 0.008856 ? Math.cbrt(z) : (7.787 * z) + 16 / 116;

    return {
      L: (116 * y) - 16,
      a: 500 * (x - y),
      b: 200 * (y - z)
    };
  }

  function deltaE(lab1, lab2) {
    const dL = lab1.L - lab2.L;
    const da = lab1.a - lab2.a;
    const db = lab1.b - lab2.b;
    return Math.sqrt(dL * dL + da * da + db * db);
  }

  // 预计算数据库中所有条目的 RGB 与 Lab
  for (const item of BAMBU_FILAMENTS_DB) {
    const parsed = parseColorToRgb(item.hex);
    item.rgb = parsed;
    item.lab = rgbToLab(parsed.r, parsed.g, parsed.b);
  }

  // 归一化材质名，例如 "PLA-CF" -> baseMaterial="PLA", exactSub="PLA-CF"
  function normalizeMaterial(rawMat) {
    const m = String(rawMat || "PLA").trim().toUpperCase();
    if (m.startsWith("PLA")) return { base: "PLA", raw: m };
    if (m.startsWith("PETG")) return { base: "PETG", raw: m };
    if (m.startsWith("ABS")) return { base: "ABS", raw: m };
    if (m.startsWith("ASA")) return { base: "ASA", raw: m };
    if (m.startsWith("TPU")) return { base: "TPU", raw: m };
    if (m.startsWith("PC")) return { base: "PC", raw: m };
    if (m.startsWith("PA")) return { base: "PA", raw: m };
    if (m.startsWith("PET")) return { base: "PET", raw: m };
    if (m.startsWith("PPA")) return { base: "PPA", raw: m };
    if (m.startsWith("PPS")) return { base: "PPS", raw: m };
    return { base: m, raw: m };
  }

  /**
   * 根据材质和颜色匹配拓竹官方耗材：
   * - 同时返回同材质下的各主要系列匹配（例如 PLA Basic / PLA Matte / PLA Silk+，或 PETG HF / PETG Basic / PETG Matte）
   * - 支持精确 Hex 匹配 (exactMatches) + 各系列最接近颜色匹配 (bySeriesNearest)
   */
  function matchBambuFilaments(rawMaterial, colorInput) {
    const parsed = parseColorToRgb(colorInput);
    if (!parsed) return null;

    const targetLab = rgbToLab(parsed.r, parsed.g, parsed.b);
    const matInfo = normalizeMaterial(rawMaterial);

    // 筛选同大类材质（若没有则回退全库）
    let candidates = BAMBU_FILAMENTS_DB.filter(f => f.material === matInfo.base);
    if (candidates.length === 0) {
      candidates = BAMBU_FILAMENTS_DB;
    }

    // 如果原始标注了具体子系列（如 PLA-CF / PETG-CF / ABS-GF），优先标注但仍同时展示 Basic/Matte
    const scored = candidates.map(item => {
      const dE = item.hex.toUpperCase() === parsed.hex ? 0 : deltaE(targetLab, item.lab);
      return {
        ...item,
        deltaE: Number(dE.toFixed(1)),
        isExact: dE < 0.8
      };
    });

    scored.sort((a, b) => {
      if (a.isExact !== b.isExact) return a.isExact ? -1 : 1;
      if (Math.abs(a.deltaE - b.deltaE) > 1.2) return a.deltaE - b.deltaE;
      return a.priority - b.priority;
    });

    // 1. 所有精确匹配项（按 priority 排序，例如 #FFFFFF 会同时命中 PLA Basic 玉石白 10100、PLA Matte 象牙白 11100、PLA Silk+ 丝绸白 13110）
    const exactMatches = scored.filter(s => s.isExact).sort((a, b) => a.priority - b.priority);

    // 2. 按核心系列分组取最佳匹配，确保同时能看到 Basic / Matte 等信息
    const primarySeriesOrder = {
      PLA: ["PLA Basic", "PLA Matte", "PLA Silk+", "PLA Translucent", "PLA Wood", "PLA-CF", "PLA Metal", "PLA Sparkle", "PLA Marble", "PLA Glow"],
      PETG: ["PETG HF", "PETG Basic", "PETG Matte", "PETG Translucent", "PETG-CF"],
      ABS: ["ABS", "ABS-GF"],
      ASA: ["ASA", "ASA Aero", "ASA-CF"],
      TPU: ["TPU 95A HF", "TPU for AMS"],
      PC: ["PC", "PC FR"]
    }[matInfo.base] || [];

    const seriesBestMap = {};
    for (const item of scored) {
      if (!seriesBestMap[item.series] || item.deltaE < seriesBestMap[item.series].deltaE) {
        seriesBestMap[item.series] = item;
      }
    }

    // 构建主要展示列表（优先保证同时包含 Basic 与 Matte 等主力系列）
    const displayList = [];
    const usedCodes = new Set();

    // 如果有精确匹配，先把核心系列（priority <= 3：Basic / Matte / Silk+ / HF）的精确匹配放进去
    for (const ex of exactMatches) {
      if (ex.priority <= 3 && !usedCodes.has(ex.code)) {
        displayList.push(ex);
        usedCodes.add(ex.code);
      }
    }

    // 对于 PLA / PETG，如果某个主力系列（如 Basic 或 Matte）还没有在 displayList 中，补充该系列下色差最小（dE <= 18）的推荐款
    const mustShowSeries = matInfo.base === "PLA"
      ? ["PLA Basic", "PLA Matte"]
      : matInfo.base === "PETG"
        ? ["PETG HF", "PETG Basic", "PETG Matte"]
        : primarySeriesOrder.slice(0, 2);

    for (const sName of mustShowSeries) {
      const alreadyHasSeries = displayList.some(d => d.series === sName);
      if (!alreadyHasSeries && seriesBestMap[sName]) {
        const bestInSeries = seriesBestMap[sName];
        if (bestInSeries.isExact || bestInSeries.deltaE <= 18 || displayList.length === 0) {
          displayList.push(bestInSeries);
          usedCodes.add(bestInSeries.code);
        }
      }
    }

    // 如果最佳全局匹配是特殊系列（如 PLA Wood / PLA Metal / PLA Translucent / PLA-CF）且色差明显比 Basic/Matte 更准，也加入展示
    const globalBest = scored[0];
    if (globalBest && !usedCodes.has(globalBest.code)) {
      displayList.unshift(globalBest);
      usedCodes.add(globalBest.code);
    }

    // 按 (isExact 优先 -> priority 优先 -> deltaE) 排序，让 Basic / Matte 清晰并列
    displayList.sort((a, b) => {
      if (a.isExact !== b.isExact) return a.isExact ? -1 : 1;
      if (Math.abs(a.deltaE - b.deltaE) <= 3.0) return a.priority - b.priority;
      return a.deltaE - b.deltaE;
    });

    return {
      hex: parsed.hex,
      rgb: parsed,
      material: matInfo.base,
      rawMaterial: matInfo.raw,
      exactMatches,
      displayList: displayList.slice(0, 3),
      allCandidates: scored.slice(0, 8)
    };
  }

  const api = {
    BAMBU_FILAMENTS_DB,
    parseColorToRgb,
    matchBambuFilaments
  };

  root.BambuFilamentMatcher = api;
})(typeof window !== "undefined" ? window : globalThis);
