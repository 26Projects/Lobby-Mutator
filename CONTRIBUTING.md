# Submit a lobby config

You can do everything on the GitHub website. No coding tools are required.

## 1. Fork the repository

Click **Fork** at the top of the repository and create the fork under your account.

## 2. Choose the config type and ID

In your fork, open `configs.js`, click the pencil icon, and add a new entry immediately before the final `];`.

The library page displays separate totals for **Map Configs**, **Unit Configs**, and **Mod Configs**. Use the total beside your config type to calculate the next ID:

- Map configs use `C####`.
- Unit and tweak configs use `T####`.
- Mod configs use `M####`.
- Add the displayed total to `1001`. For example, if the page shows **12 Map Configs**, the next map ID is `C1013`.
- Confirm that the calculated ID is not already present in `configs.js` before using it.

## 3. Add the config entry

Choose the matching template below and replace every value.

### Map config (`C####`)

```js
  {
    id: "C####",
    title: "Map name",
    variant: "Short config name",
    description: "One sentence explaining how the map plays.",
    creator: "Your GitHub username or display name",
    categories: ["Water Maps"],
    image: "images/maps/C####.png",
    map: "Map name without its version number",
    commands: "!bset first_option value\n!bset second_option value",
    startBoxes: "!bset mapmetadata_startbox_override <base64 value>"
  },
```

The `startBoxes` line is optional. Remove it when the config uses the map's normal starting areas.

### Unit or tweak config (`T####`)

```js
  {
    id: "T####",
    title: "Unit or tweak name",
    variant: "Short config name",
    description: "One sentence explaining what the tweak changes.",
    creator: "Your GitHub username or display name",
    categories: ["Tweaks"],
    image: "images/tweaks/T####.gif",
    commands: "!bset first_option value\n!bset second_option value"
  },
```

Use `.png` instead of `.gif` when a still image explains the tweak clearly.

### Mod config (`M####`)

```js
  {
    id: "M####",
    title: "Mod name",
    variant: "Short config name",
    description: "One sentence explaining what the mod changes.",
    creator: "Your GitHub username or display name",
    categories: ["Mods"],
    image: "images/mods/M####.png",
    commands: "!bset first_option value\n!bset second_option value"
  },
```

Mod images may also use `.gif` when animation is useful.

Keep these details in mind:

- Keep the comma after the entry unless it is the final entry.
- Put each command on its own line by using `\n` inside `commands`.
- For a map with custom starting areas, keep the entire `!bset mapmetadata_startbox_override` command and its Base64 value together inside `startBoxes`.
- You may assign more than one category, such as `["Lava Maps", "Large Format"]`.
- Available categories are `Lava Maps`, `Water Maps`, `Drained Maps`, `Inverted/Smoothed Maps`, `Large Format`, `Tweaks`, and `Mods`.
- Map configs use the applicable map categories, unit/tweak configs use `Tweaks`, and mod configs use `Mods`.
- Use a unique `variant` when the map already has another config.
- Use `creator` to credit the person who designed or submitted the config.

Commit the edit to your fork.

## 4. Upload the image

1. Open the folder matching the config type: `images/maps`, `images/tweaks`, or `images/mods`.
2. Choose **Add file → Upload files**.
3. Upload a PNG or GIF named exactly after the ID, such as `C1014.png`, `T1001.gif`, or `M1001.png`.
4. Commit the image to the same branch as the config edit.

The filename and extension are case-sensitive and must exactly match the `image` value in `configs.js`.

For map screenshots, run `/cheat` and `/globallos` in BAR, then press `F5` to hide the UI so the full map is visible as clearly as possible.

If the config includes custom starting areas, clearly label every starting location in the screenshot so players can understand the layout before copying it.

## 5. Open the pull request

Open a pull request from your fork to this repository's `main` branch. GitHub will automatically provide a short submission form. Fill it out and submit the PR.

See the **[completed example](.github/EXAMPLE_CONFIG_PULL_REQUEST.md)** if you want to check your work first.

## What happens next

The config will be reviewed for formatting and tested commands. Its ID may be adjusted if another submission used the same number first. Once merged, GitHub Pages publishes it automatically.
