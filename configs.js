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
  "All That Smolders": "All That Smolders v1.2",
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
    id: "C1001",
    title: "Tempest",
    variant: "Central Lava Crater",
    description: "Tempest with a central lava crater for separation.",
    categories: ["Lava Maps"],
    image: "images/maps/C1001.png",
    map: "Tempest",
    commands: "!bset map_waterlevel -183\n!bset map_waterislava 1\n!bset map_lavatiderhythm disabled\n!bset map_tweaklava 0"
  },
  {
    id: "C1002",
    title: "Ancient Vault",
    variant: "Central Lava Pool",
    description: "Island hopping across a central lava pool with north and south connected over a narrow path.",
    categories: ["Lava Maps"],
    image: "images/maps/C1002.png",
    map: "Ancient Vault",
    commands: "!bset map_waterlevel 528\n!bset map_waterislava 1\n!bset map_lavatiderhythm disabled\n!bset map_tweaklava 0"
  },
  {
    id: "C1003",
    title: "Ancient Vault",
    variant: "Water Level 650",
    description: "Water map",
    categories: ["Water Maps"],
    image: "images/maps/C1003.png",
    map: "Ancient Vault",
    commands: "!bset map_waterlevel 650"
  },
  {
    id: "C1004",
    title: "Ascendancy",
    variant: "Naval Lanes",
    description: "Two naval lanes through the middle of the map.",
    categories: ["Water Maps"],
    image: "images/maps/C1004.png",
    map: "Ascendancy",
    commands: "!bset debugcommands extremebelow 600 1.5, minheight 640, extremebelow 800 3.0, floor 700, extremeabove 2400 0.5\n!bset map_waterlevel 400"
  },
  {
    id: "C1005",
    title: "Carrot Mountains",
    variant: "Naval Conversion",
    description: "Naval battle.",
    categories: ["Water Maps"],
    image: "images/maps/C1005.png",
    map: "Carrot Mountains",
    commands: "!bset debugcommands extreme 2.5, floor 1280, extremeabove 2000 0.3\n!bset map_waterlevel 1337"
  },
  {
    id: "C1006",
    title: "Flats and Forests",
    variant: "Mountainous",
    description: "Becomes more mountains and trees.",
    categories: ["Large Format"],
    image: "images/maps/C1006.png",
    map: "Flats and Forests",
    commands: "!bset debugcommands extremeabove 200 4, extremeabove 250 1.5, extremeabove 300 1.8"
  },
  {
    id: "C1007",
    title: "Supreme Isthmus",
    variant: "Falling Lava Tides",
    description: "Open lava map with tides falling away to expose mountains after 10 minutes. Lava does not rise.",
    categories: ["Lava Maps", "Large Format"],
    image: "images/maps/C1007.png",
    map: "Supreme Isthmus",
    commands: "!bset map_waterlevel -104\n!bset map_waterislava 1\n!bset map_lavatiderhythm enabled\n!bset map_lavatidemode lavastarthigh\n!bset map_lavahighlevel 20\n!bset map_lavahighdwell 600\n!bset map_lavalowlevel 0\n!bset map_lavalowdwell 30000\n!bset map_tweaklava 0"
  },
  {
    id: "C1008",
    title: "Glacial Gap",
    variant: "Inverted",
    description: "Inverted: a land map with pits instead of mountains.",
    categories: ["Inverted/Smoothed Maps"],
    image: "images/maps/C1008.png",
    map: "Glacial Gap",
    commands: "!bset debugcommands invertmap"
  },
  {
    id: "C1009",
    title: "Glacial Gap",
    variant: "Amphibious Lanes",
    description: "Land in the middle with flattened top and bottom naval lanes that amphibious units can traverse.",
    categories: ["Water Maps"],
    image: "images/maps/C1009.png",
    map: "Glacial Gap",
    commands: "!bset debugcommands extremebelow 1000 3, minheight 340, extremebelow 3000 2.2, floor 900, extremeabove -800 0.17\n!bset map_waterlevel -440"
  },
  {
    id: "C1010",
    title: "Koom Valley",
    variant: "Central Sea",
    description: "Central sea with players on either side.",
    categories: ["Water Maps"],
    image: "images/maps/C1010.png",
    map: "Koom Valley 3",
    commands: "!bset debugcommands extremebelow 680 0.5\n!bset map_waterlevel 660"
  },
  {
    id: "C1011",
    title: "Metal Plate",
    variant: "Water Level 600",
    description: "Water map.",
    categories: ["Water Maps"],
    image: "images/maps/C1011.png",
    map: "Full Metal Plate",
    commands: "!bset map_waterlevel 600"
  },
  {
    id: "C1012",
    title: "Rustcrown Canyon",
    variant: "Three Naval Lanes",
    description: "Becomes three naval lanes.",
    categories: ["Water Maps"],
    image: "images/maps/C1012.png",
    map: "Rustcrown Canyon",
    commands: "!bset debugcommands extremeabove 390 0.2, extremeabove 160 -1.2"
  },
  {
    id: "C1013",
    title: "All That Smolders",
    variant: "Inverted Waterways",
    description: "Central plain bound by two waterways with a protected plateau in the rear.",
    categories: ["Water Maps", "Inverted/Smoothed Maps"],
    image: "images/maps/C1013.png",
    map: "All That Smolders",
    commands: "!bset debugcommands invertmap\n!bset map_waterlevel 283"
  }
];
