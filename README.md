# BAR Lobby Configs

A small, static GitHub Pages site for sharing current Beyond All Reason command presets. The same command block is used in hosted lobbies and offline Skirmish.

The **Tweaks** category is reserved for unit tweaks and tweak-def configurations. Tweak entries appear under both **Tweaks** and **All** and are included in the displayed totals.

## Submit a config

No local development setup is required. You can submit a config entirely through GitHub:

1. Fork this repository.
2. Choose Map, Unit/Tweak, or Mod and add one entry to `configs.js`.
3. Upload its matching image to the folder for that config type, using the config ID as the filename.
4. Open a pull request and complete the provided checklist.

See **[CONTRIBUTING.md](CONTRIBUTING.md)** for the copy-and-paste template and short walkthrough. You can also compare your submission with the **[completed example pull request](.github/EXAMPLE_CONFIG_PULL_REQUEST.md)**.

## Library structure

- `C####` identifies map configs.
- `T####` identifies unit and tweak configs.
- `M####` identifies mods.
- An entry can belong to multiple categories without changing its ID.
- Every entry includes a visible creator credit.
- Configs can optionally include a separate Base64 `startBoxes` command; its box and copy button appear only when provided.
- Map screenshots use `images/maps/C####.png`.
- Unit/tweak screenshots or animations use `images/tweaks/T####.png` or `.gif`.
- Mod screenshots or animations use `images/mods/M####.png` or `.gif`.

The site retrieves current versioned map names from BAR's live map metadata and uses the bundled fallback list in `configs.js` if that service is temporarily unavailable.

## Publish with GitHub Pages

The production site deploys from the `main` branch through GitHub Pages. Once a pull request is reviewed and merged, the published library updates automatically.
