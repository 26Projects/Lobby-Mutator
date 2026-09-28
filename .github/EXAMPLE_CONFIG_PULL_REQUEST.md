# Example: Add Ancient Vault central lava pool

This is an example of a completed pull request description. Do not copy its ID for a real submission.

## Config submission

**Map:** Ancient Vault

**Config ID:** C9999 (example only)

**Creator / GitHub username:** 26Projects

**Categories:** Lava Maps

**What does this config change?**

Creates a central lava pool for island hopping, with the north and south connected by a narrow path.

## Checklist

- [x] I added the config to `configs.js`.
- [x] I used the next available ID.
- [x] I uploaded `images/maps/C9999.png` using the same capitalization as the ID.
- [x] I tested every `!bset` command in BAR.
- [x] I selected every category where the config belongs.
- [x] I added the creator credit I want displayed on the card.

## Testing notes

Tested in an offline Skirmish on the current Ancient Vault version. Water level `528` and lava rendering both worked.

The matching `configs.js` entry would look like this:

```js
  {
    id: "C9999",
    title: "Ancient Vault",
    variant: "Central Lava Pool",
    description: "Island hopping across a central lava pool with north and south connected over a narrow path.",
    creator: "26Projects",
    categories: ["Lava Maps"],
    image: "images/maps/C9999.png",
    map: "Ancient Vault",
    commands: "!bset map_waterlevel 528\n!bset map_waterislava 1\n!bset map_lavatiderhythm disabled\n!bset map_tweaklava 0"
  },
```
