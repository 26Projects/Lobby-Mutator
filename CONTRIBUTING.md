# Submit a lobby config

You can do everything on the GitHub website. No coding tools are required.

## 1. Fork the repository

Click **Fork** at the top of the repository and create the fork under your account.

## 2. Add the config

In your fork, open `configs.js`, click the pencil icon, and add a new entry immediately before the final `];`.

Copy this template and replace every value:

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

Keep these details in mind:

- Replace `C####` with the next unused `C` number in `configs.js`.
- Keep the comma after the entry unless it is the final entry.
- Put each command on its own line by using `\n` inside `commands`.
- `startBoxes` is optional. Remove that line when the config does not use custom start boxes.
- Keep the entire `!bset mapmetadata_startbox_override` command and its Base64 value together inside `startBoxes`.
- You may assign more than one category, such as `["Lava Maps", "Large Format"]`.
- Available categories are `Lava Maps`, `Water Maps`, `Drained Maps`, `Inverted/Smoothed Maps`, `Large Format`, `Tweaks`, and `Mods`.
- Use a unique `variant` when the map already has another config.
- Use `creator` to credit the person who designed or submitted the config.

Commit the edit to your fork.

## 3. Upload the screenshot

1. Open `images/maps` in your fork.
2. Choose **Add file → Upload files**.
3. Upload a PNG named exactly after the ID, such as `C1014.png`.
4. Commit the image to the same branch as the config edit.

The filename is case-sensitive. `C1014.png` works; `c1014.PNG` does not.

If the config includes custom starting areas, clearly label every starting location in the screenshot so players can understand the layout before copying it.

## 4. Open the pull request

Open a pull request from your fork to this repository's `main` branch. GitHub will automatically provide a short submission form. Fill it out and submit the PR.

See the **[completed example](.github/EXAMPLE_CONFIG_PULL_REQUEST.md)** if you want to check your work first.

## What happens next

The config will be reviewed for formatting and tested commands. Its ID may be adjusted if another submission used the same number first. Once merged, GitHub Pages publishes it automatically.
