// Imported from https://stanisk223.github.io/
// Put map screenshots in images/maps and set image to the file path.
window.LOBBY_CATEGORIES = [
  "All",
  "Lava Maps",
  "Water Maps",
  "Inverted/Smoothed Maps",
  "Large Format",
  "Tweaks"
];

window.LOBBY_CONFIGS = [
  {
    id: "ancient-vault-water-650",
    title: "Ancient Vault",
    variant: "Water Level 650",
    description: "Water map",
    category: "Water Maps",
    image: "images/maps/ancient-vault.webp",
    skirmish: "map_waterlevel 650",
    lobby: "!bset map_waterlevel 650"
  },
  {
    id: "ascendancy-naval-lanes",
    title: "Ascendancy",
    variant: "Naval Lanes",
    description: "Two naval lanes through the middle of the map.",
    category: "Water Maps",
    image: "images/maps/ascendancy.png",
    skirmish: "debugcommands extremebelow 600 1.5, minheight 640, extremebelow 800 3.0, floor 700, extremeabove 2400 0.5\nmap_waterlevel 400",
    lobby: "!bset debugcommands extremebelow 600 1.5, minheight 640, extremebelow 800 3.0, floor 700, extremeabove 2400 0.5\n!bset map_waterlevel 400"
  },
  {
    id: "carrot-mountains-naval",
    title: "Carrot Mountains",
    variant: "Naval Conversion",
    description: "Naval battle.",
    category: "Water Maps",
    image: "images/maps/carrot-mountains.webp",
    skirmish: "debugcommands extreme 2.5, floor 1280, extremeabove 2000 0.3\nmap_waterlevel 1337",
    lobby: "!bset debugcommands extreme 2.5, floor 1280, extremeabove 2000 0.3\n!bset map_waterlevel 1337"
  },
  {
    id: "flats-and-forests-mountainous",
    title: "Flats and Forests",
    variant: "Mountainous",
    description: "Becomes more mountains and trees.",
    category: "Large Format",
    image: "images/maps/flats-and-forests.webp",
    skirmish: "extremeabove 200 4, extremeabove 250 1.5, extremeabove 300 1.8",
    lobby: "!bset debugcommands extremeabove 200 4, extremeabove 250 1.5, extremeabove 300 1.8"
  },
  {
    id: "glacial-gap-inverted",
    title: "Glacial Gap",
    variant: "Inverted",
    description: "Inverted: a land map with pits instead of mountains.",
    category: "Inverted/Smoothed Maps",
    image: "images/maps/glacial-gap-inverted.webp",
    skirmish: "invertmap",
    lobby: "!bset debugcommands invertmap"
  },
  {
    id: "glacial-gap-amphibious-lanes",
    title: "Glacial Gap",
    variant: "Amphibious Lanes",
    description: "Land in the middle with flattened top and bottom naval lanes that amphibious units can traverse.",
    category: "Water Maps",
    image: "images/maps/glacial-gap-submerged.webp",
    skirmish: "debugcommands extremebelow 1000 3, minheight 340, extremebelow 3000 2.2, floor 900, extremeabove -800 0.17\nmap_waterlevel -440",
    lobby: "!bset debugcommands extremebelow 1000 3, minheight 340, extremebelow 3000 2.2, floor 900, extremeabove -800 0.17\n!bset map_waterlevel -440"
  },
  {
    id: "koom-valley-central-sea",
    title: "Koom Valley",
    variant: "Central Sea",
    description: "Central sea with players on either side.",
    category: "Water Maps",
    image: "images/maps/koom-valley.webp",
    skirmish: "debugcommands extremebelow 680 0.5\nmap_waterlevel 660",
    lobby: "!bset debugcommands extremebelow 680 0.5\n!bset map_waterlevel 660"
  },
  {
    id: "metal-plate-water-600",
    title: "Metal Plate",
    variant: "Water Level 600",
    description: "Water map.",
    category: "Water Maps",
    image: "images/maps/metal-plate.webp",
    skirmish: "map_waterlevel 600",
    lobby: "!bset map_waterlevel 600"
  },
  {
    id: "rustcrown-canyon-naval-lanes",
    title: "Rustcrown Canyon",
    variant: "Three Naval Lanes",
    description: "Becomes three naval lanes.",
    category: "Water Maps",
    image: "images/maps/rustcrown-canyon.webp",
    skirmish: "extremeabove 390 0.2, extremeabove 160 -1.2",
    lobby: "!bset debugcommands extremeabove 390 0.2, extremeabove 160 -1.2"
  }
];
