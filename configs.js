// Imported from https://stanisk223.github.io/
// Put map screenshots in images/maps and set image to the file path.
window.LOBBY_CATEGORIES = [
  "All",
  "Lava Maps",
  "Water Maps",
  "Inverted/Smoothed Maps",
  "Large Format",
  "Tweaks",
  "Mods"
];

// Last-known current names from BAR's live map metadata. app.js refreshes these
// automatically and caches the full live list in the visitor's browser.
window.BAR_MAP_NAME_FALLBACK = {
  "Ancient Vault": "Ancient Vault v1.4",
  "Ascendancy": "Ascendancy v2.2",
  "Carrot Mountains": "Carrot Mountains v2.0",
  "Flats and Forests": "Flats and Forests v2.2",
  "Glacial Gap": "Glacial Gap v1.1",
  "Koom Valley 3": "Koom Valley 3 3.1",
  "Full Metal Plate": "Full Metal Plate 1.7",
  "Rustcrown Canyon": "Rustcrown Canyon 1.3",
  "Supreme Isthmus": "Supreme Isthmus v2.1",
  "Tempest": "Tempest_V3"
};

window.LOBBY_CONFIGS = [
  {
    id: "V1001",
    title: "Tempest",
    variant: "Central Lava Crater",
    description: "Tempest with a central lava crater for separation.",
    category: "Lava Maps",
    image: "images/maps/V1001.png",
    map: "Tempest",
    commands: "!bset map_waterlevel -183\n!bset map_waterislava 1\n!bset map_lavatiderhythm disabled\n!bset map_tweaklava 0"
  },
  {
    id: "W1001",
    title: "Ancient Vault",
    variant: "Water Level 650",
    description: "Water map",
    category: "Water Maps",
    image: "images/maps/W1001.png",
    map: "Ancient Vault",
    commands: "!bset map_waterlevel 650"
  },
  {
    id: "W1002",
    title: "Ascendancy",
    variant: "Naval Lanes",
    description: "Two naval lanes through the middle of the map.",
    category: "Water Maps",
    image: "images/maps/W1002.png",
    map: "Ascendancy",
    commands: "!bset debugcommands extremebelow 600 1.5, minheight 640, extremebelow 800 3.0, floor 700, extremeabove 2400 0.5\n!bset map_waterlevel 400"
  },
  {
    id: "W1003",
    title: "Carrot Mountains",
    variant: "Naval Conversion",
    description: "Naval battle.",
    category: "Water Maps",
    image: "images/maps/W1003.png",
    map: "Carrot Mountains",
    commands: "!bset debugcommands extreme 2.5, floor 1280, extremeabove 2000 0.3\n!bset map_waterlevel 1337"
  },
  {
    id: "L1001",
    title: "Flats and Forests",
    variant: "Mountainous",
    description: "Becomes more mountains and trees.",
    category: "Large Format",
    image: "images/maps/L1001.png",
    map: "Flats and Forests",
    commands: "!bset debugcommands extremeabove 200 4, extremeabove 250 1.5, extremeabove 300 1.8"
  },
  {
    id: "L1002",
    title: "Supreme Isthmus",
    variant: "Falling Lava Tides",
    description: "Open lava map with tides falling away to expose mountains after 10 minutes. Lava does not rise.",
    category: "Large Format",
    image: "images/maps/L1002.png",
    map: "Supreme Isthmus",
    commands: "!bset map_waterlevel -104\n!bset map_waterislava 1\n!bset map_lavatiderhythm enabled\n!bset map_lavatidemode lavastarthigh\n!bset map_lavahighlevel 20\n!bset map_lavahighdwell 600\n!bset map_lavalowlevel 0\n!bset map_lavalowdwell 30000\n!bset map_tweaklava 0"
  },
  {
    id: "I1001",
    title: "Glacial Gap",
    variant: "Inverted",
    description: "Inverted: a land map with pits instead of mountains.",
    category: "Inverted/Smoothed Maps",
    image: "images/maps/I1001.png",
    map: "Glacial Gap",
    commands: "!bset debugcommands invertmap"
  },
  {
    id: "W1004",
    title: "Glacial Gap",
    variant: "Amphibious Lanes",
    description: "Land in the middle with flattened top and bottom naval lanes that amphibious units can traverse.",
    category: "Water Maps",
    image: "images/maps/W1004.png",
    map: "Glacial Gap",
    commands: "!bset debugcommands extremebelow 1000 3, minheight 340, extremebelow 3000 2.2, floor 900, extremeabove -800 0.17\n!bset map_waterlevel -440"
  },
  {
    id: "W1005",
    title: "Koom Valley",
    variant: "Central Sea",
    description: "Central sea with players on either side.",
    category: "Water Maps",
    image: "images/maps/W1005.png",
    map: "Koom Valley 3",
    commands: "!bset debugcommands extremebelow 680 0.5\n!bset map_waterlevel 660"
  },
  {
    id: "W1006",
    title: "Metal Plate",
    variant: "Water Level 600",
    description: "Water map.",
    category: "Water Maps",
    image: "images/maps/W1006.png",
    map: "Full Metal Plate",
    commands: "!bset map_waterlevel 600"
  },
  {
    id: "W1007",
    title: "Rustcrown Canyon",
    variant: "Three Naval Lanes",
    description: "Becomes three naval lanes.",
    category: "Water Maps",
    image: "images/maps/W1007.png",
    map: "Rustcrown Canyon",
    commands: "!bset debugcommands extremeabove 390 0.2, extremeabove 160 -1.2"
  }
];
