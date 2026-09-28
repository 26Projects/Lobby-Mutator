# BAR Lobby Configs

A small, static GitHub Pages site for sharing current Beyond All Reason command presets. The same command block is used in hosted lobbies and offline Skirmish.

The **Tweaks** category is reserved for unit tweaks and tweak-def configurations. Tweak entries appear under both **Tweaks** and **All** and are included in the displayed totals.

## Submit a config

No local development setup is required. You can submit a config entirely through GitHub:

1. Fork this repository.
2. Add one entry to `configs.js`.
3. Upload its screenshot to `images/maps` using the config ID as the filename.
4. Open a pull request and complete the provided checklist.

See **[CONTRIBUTING.md](CONTRIBUTING.md)** for the copy-and-paste template and short walkthrough. You can also compare your submission with the **[completed example pull request](.github/EXAMPLE_CONFIG_PULL_REQUEST.md)**.

## Library structure

- `C####` identifies map configs.
- `T####` identifies tweaks.
- `M####` identifies mods.
- An entry can belong to multiple categories without changing its ID.
- Every entry includes a visible creator credit.
- Configs can optionally include a separate Base64 `startBoxes` command; its box and copy button appear only when provided.
- Map screenshots use `images/maps/<ID>.png`.
- Tweak animations can use GIF files under `images/tweaks`.

The site retrieves current versioned map names from BAR's live map metadata and uses the bundled fallback list in `configs.js` if that service is temporarily unavailable.

## Publish with GitHub Pages

The production site deploys from the `main` branch through GitHub Pages. Once a pull request is reviewed and merged, the published library updates automatically.
