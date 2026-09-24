const configs = Array.isArray(window.LOBBY_CONFIGS) ? window.LOBBY_CONFIGS : [];
const grid = document.querySelector("#config-grid");
const template = document.querySelector("#config-template");
const filters = document.querySelector("#filters");
const search = document.querySelector("#search");
const emptyState = document.querySelector("#empty-state");
const count = document.querySelector("#config-count");
const toast = document.querySelector("#toast");
const imageLightbox = document.querySelector("#image-lightbox");
const lightboxImage = imageLightbox.querySelector("img");
const lightboxClose = imageLightbox.querySelector(".image-lightbox-close");
const lightboxContent = imageLightbox.querySelector(".image-lightbox-content");
let activeCategory = "All";
let toastTimer;
let lightboxTrigger;
const liveMapsUrl = "https://maps-metadata.beyondallreason.dev/latest/live_maps.validated.json";
const liveMapsCacheKey = "bar-live-map-names-v1";
const resolvedMapNames = new Map(Object.entries(window.BAR_MAP_NAME_FALLBACK || {}));
const clearLobbyCommands = `!bset debugcommands 0
!bset map_waterislava 0
!bset map_lavatiderhythm default
!bset map_lavatidemode lavastartlow
!bset map_lavahighlevel 0
!bset map_lavahighdwell 60
!bset map_lavalowlevel 0
!bset map_lavalowdwell 300
!bset map_tweaklava 0
!bset map_waterlevel 0`;

function normalizeMapName(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function resolveMapName(baseName, mapNames) {
  const normalizedBase = normalizeMapName(baseName);
  const candidates = mapNames.filter((name) => {
    const normalizedName = normalizeMapName(name);
    return normalizedName === normalizedBase || normalizedName.startsWith(`${normalizedBase} `);
  });

  candidates.sort((a, b) => b.localeCompare(a, undefined, { numeric: true, sensitivity: "base" }));
  return candidates[0] || null;
}

function applyMapList(mapNames) {
  if (!Array.isArray(mapNames) || mapNames.length === 0) return false;

  const requiredMaps = new Set(configs.map((config) => config.map).filter(Boolean));
  requiredMaps.forEach((baseName) => {
    const currentName = resolveMapName(baseName, mapNames);
    if (currentName) resolvedMapNames.set(baseName, currentName);
  });
  return true;
}

function getConfigCommands(config) {
  if (!config.map) return config.commands;
  const currentMapName = resolvedMapNames.get(config.map);
  if (!currentMapName) return null;
  return `!map ${currentMapName}\n${config.commands}`;
}

function readCachedMapList() {
  try {
    const cached = JSON.parse(localStorage.getItem(liveMapsCacheKey));
    return Array.isArray(cached) ? cached : [];
  } catch {
    return [];
  }
}

async function refreshLiveMapNames() {
  applyMapList(readCachedMapList());
  renderConfigs();

  try {
    const response = await fetch(liveMapsUrl, { cache: "no-store" });
    if (!response.ok) throw new Error(`BAR map metadata returned ${response.status}`);
    const records = await response.json();
    const mapNames = records.map((record) => record?.springName).filter(Boolean);
    if (!applyMapList(mapNames)) throw new Error("BAR map metadata was empty");
    localStorage.setItem(liveMapsCacheKey, JSON.stringify(mapNames));
    renderConfigs();
  } catch (error) {
    console.warn("Using cached BAR map versions:", error);
  }
}

function openImageLightbox(image) {
  lightboxTrigger = image.closest(".map-preview");
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt;
  imageLightbox.hidden = false;
  document.body.classList.add("lightbox-open");
  lightboxClose.focus();
}

function closeImageLightbox() {
  imageLightbox.hidden = true;
  document.body.classList.remove("lightbox-open");
  lightboxImage.removeAttribute("src");
  lightboxImage.alt = "";
  lightboxTrigger?.focus();
  lightboxTrigger = null;
}

lightboxClose.addEventListener("click", closeImageLightbox);
imageLightbox.addEventListener("click", (event) => {
  if (!lightboxContent.contains(event.target)) closeImageLightbox();
});

const categories = Array.isArray(window.LOBBY_CATEGORIES)
  ? window.LOBBY_CATEGORIES
  : ["All", ...new Set(configs.map((config) => config.category))];

function showToast(message) {
  toast.querySelector("span").textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

async function copyCommand(button, command, defaultLabel, toastMessage = "Config copied to clipboard") {
  const text = command;
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }

  const label = button.querySelector("span");
  label.textContent = "Copied";
  button.classList.add("copied");
  showToast(toastMessage);
  setTimeout(() => {
    label.textContent = defaultLabel;
    button.classList.remove("copied");
  }, 1700);
}

function renderFilters() {
  filters.replaceChildren();
  categories.forEach((category) => {
    const categoryCount = category === "All"
      ? configs.length
      : configs.filter((config) => config.category === category).length;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-button${category === activeCategory ? " active" : ""}`;
    const label = document.createElement("span");
    label.textContent = category;
    const total = document.createElement("span");
    total.className = "filter-count";
    total.textContent = categoryCount;
    button.append(label, total);
    button.setAttribute("aria-pressed", String(category === activeCategory));
    button.addEventListener("click", () => {
      activeCategory = category;
      renderFilters();
      renderConfigs();
    });
    filters.appendChild(button);
  });
}

function renderConfigs() {
  const query = search.value.trim().toLowerCase();
  const visible = configs.filter((config) => {
    const matchesCategory = activeCategory === "All" || config.category === activeCategory;
    const haystack = [config.id, config.title, config.variant, config.description, config.category, config.map, getConfigCommands(config), config.commands].join(" ").toLowerCase();
    return matchesCategory && haystack.includes(query);
  });

  grid.replaceChildren();
  visible.forEach((config) => {
    const fullCommands = getConfigCommands(config);
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".config-card");
    card.dataset.configId = config.id;
    fragment.querySelector(".category-pill").textContent = config.category;
    const preview = fragment.querySelector(".map-preview");
    const previewImage = fragment.querySelector(".map-preview img");
    const previewPlaceholder = fragment.querySelector(".map-placeholder");
    if (config.image) {
      previewImage.addEventListener("load", () => {
        previewImage.hidden = false;
        previewPlaceholder.hidden = true;
        preview.classList.add("has-image");
        preview.tabIndex = 0;
        preview.setAttribute("role", "button");
        preview.setAttribute("aria-label", `View full-size ${previewImage.alt}`);
      });
      previewImage.addEventListener("error", () => {
        previewImage.hidden = true;
        previewPlaceholder.hidden = false;
      });
      previewImage.src = config.image;
      previewImage.alt = `${config.title}${config.variant ? ` — ${config.variant}` : ""} screenshot`;
      preview.addEventListener("click", () => {
        if (previewImage.complete && previewImage.naturalWidth > 0) openImageLightbox(previewImage);
      });
      preview.addEventListener("keydown", (event) => {
        if ((event.key === "Enter" || event.key === " ") && previewImage.complete && previewImage.naturalWidth > 0) {
          event.preventDefault();
          openImageLightbox(previewImage);
        }
      });
    }
    fragment.querySelector("h3").textContent = config.title;
    const variantName = fragment.querySelector(".variant-name");
    if (config.variant) {
      variantName.textContent = config.variant;
      variantName.hidden = false;
    }
    fragment.querySelector(".mod-id").textContent = `ID / ${config.id}`;
    fragment.querySelector(".description").textContent = config.description;
    fragment.querySelector(".config-command").textContent = fullCommands || "Current map version unavailable. Connect once to refresh the BAR map list.";
    const resetButton = fragment.querySelector(".reset-button");
    resetButton.setAttribute("aria-label", "Copy commands to clear lobby map configuration");
    resetButton.addEventListener("click", () => copyCommand(resetButton, clearLobbyCommands, "Clear Lobby", "Lobby reset commands copied"));
    const configButton = fragment.querySelector(".config-button");
    configButton.setAttribute("aria-label", `Copy ${config.title}${config.variant ? ` ${config.variant}` : ""} config`);
    configButton.disabled = !fullCommands;
    configButton.addEventListener("click", () => {
      if (fullCommands) copyCommand(configButton, fullCommands, "Copy Config");
    });
    grid.appendChild(fragment);
  });

  count.textContent = visible.length;
  emptyState.hidden = visible.length !== 0;
}

search.addEventListener("input", renderConfigs);
document.querySelector("#clear-search").addEventListener("click", () => {
  search.value = "";
  activeCategory = "All";
  renderFilters();
  renderConfigs();
  search.focus();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !imageLightbox.hidden) {
    closeImageLightbox();
    return;
  }
  if (event.key === "/" && document.activeElement !== search) {
    event.preventDefault();
    search.focus();
  }
  if (event.key === "Escape" && document.activeElement === search) {
    search.value = "";
    renderConfigs();
    search.blur();
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();
renderFilters();
renderConfigs();
refreshLiveMapNames();
