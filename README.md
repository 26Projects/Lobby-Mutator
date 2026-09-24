# BAR Lobby Configs

A small, static GitHub Pages site for sharing current Beyond All Reason command presets. The same command block is used in hosted lobbies and offline Skirmish.

The **Tweaks** category is reserved for unit tweaks and tweak-def configurations. Tweak entries appear under both **Tweaks** and **All** and are included in the displayed totals.

## Add or edit configs

Open `configs.js` and edit the entries in `window.LOBBY_CONFIGS`. Each entry has:

- `title` — the name shown on the card
- `id` — a unique identifier for this specific mod variant
- `variant` — distinguishes multiple mods that use the same map name
- `description` — a short explanation
- `category` — used to build the filter buttons
- `image` — a unique screenshot or animation path; JPG, PNG, WebP, and GIF are supported
- `commands` — the complete command block to paste into BAR chat in a hosted lobby or offline Skirmish

## Add a map screenshot

1. Click **Upload screenshots** on the site. It opens the repository's `images/maps` upload page.
2. Name the screenshot to match the path already assigned in `configs.js`, such as `ancient-vault.webp`.
3. Upload and commit the image on GitHub. The matching card will display it automatically.

To use a different filename or format, open `configs.js` and change the config's `image` value:

   ```js
   image: "images/maps/glacial-gap.webp",
   ```

If an assigned image has not been uploaded yet, the card shows the map screenshot placeholder.

## Multiple mods for one map

Give every mod a unique `id`, `variant`, and `image` path even when its `title` is shared. For example, the two Glacial Gap entries use separate IDs and separate screenshot files.

## Tweak animations

Animated GIFs work directly in tweak cards. Upload them with **Upload tweak GIFs** and use a path such as:

```js
image: "images/tweaks/commander-speed.gif",
```

Commit and push the change. GitHub Pages will serve the updated site.

## Publish with GitHub Pages

1. Create a new GitHub repository and upload the files in this folder.
2. Open **Settings → Pages** in the repository.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`, then save.

Your site will be available at `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

If the repository is named `YOUR-USERNAME.github.io`, it will instead be available at `https://YOUR-USERNAME.github.io/`.
