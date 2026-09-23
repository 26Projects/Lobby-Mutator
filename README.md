# BAR Lobby Configs

A small, static GitHub Pages site for sharing Beyond All Reason lobby command presets.

The **Tweaks** category is reserved for unit tweaks and tweak-def configurations. Tweak entries appear only under **Tweaks** and are intentionally excluded from **All**, which contains map configurations only.

## Add or edit configs

Open `configs.js` and edit the entries in `window.LOBBY_CONFIGS`. Each entry has:

- `title` — the name shown on the card
- `description` — a short explanation
- `category` — used to build the filter buttons
- `image` — a map screenshot path, such as `images/maps/glacial-gap.jpg`
- `skirmish` — the raw debug command used in Skirmish
- `lobby` — the full `!bset debugcommands` command used in multiplayer lobbies

## Add a map screenshot

1. Click **Upload screenshots** on the site. It opens the repository's `images/maps` upload page.
2. Name the screenshot to match the path already assigned in `configs.js`, such as `ancient-vault.webp`.
3. Upload and commit the image on GitHub. The matching card will display it automatically.

To use a different filename or format, open `configs.js` and change the config's `image` value:

   ```js
   image: "images/maps/glacial-gap.webp",
   ```

If an assigned image has not been uploaded yet, the card shows the map screenshot placeholder.

Commit and push the change. GitHub Pages will serve the updated site.

## Publish with GitHub Pages

1. Create a new GitHub repository and upload the files in this folder.
2. Open **Settings → Pages** in the repository.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`, then save.

Your site will be available at `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

If the repository is named `YOUR-USERNAME.github.io`, it will instead be available at `https://YOUR-USERNAME.github.io/`.
