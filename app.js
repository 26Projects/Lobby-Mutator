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
let activeCategory = "All";
let toastTimer;

function openImageLightbox(image) {
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt;
  imageLightbox.showModal();
  document.body.classList.add("lightbox-open");
}

function closeImageLightbox() {
  imageLightbox.close();
}

lightboxClose.addEventListener("click", closeImageLightbox);
imageLightbox.addEventListener("click", (event) => {
  if (event.target === imageLightbox) closeImageLightbox();
});
imageLightbox.addEventListener("close", () => {
  document.body.classList.remove("lightbox-open");
  lightboxImage.removeAttribute("src");
  lightboxImage.alt = "";
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

async function copyCommand(button, command, defaultLabel) {
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
  showToast("Config copied to clipboard");
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
    const haystack = [config.id, config.title, config.variant, config.description, config.category, config.commands].join(" ").toLowerCase();
    return matchesCategory && haystack.includes(query);
  });

  grid.replaceChildren();
  visible.forEach((config) => {
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
    fragment.querySelector(".config-command").textContent = config.commands;
    const configButton = fragment.querySelector(".config-button");
    configButton.setAttribute("aria-label", `Copy ${config.title}${config.variant ? ` ${config.variant}` : ""} config`);
    configButton.addEventListener("click", () => copyCommand(configButton, config.commands, "Copy Config"));
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
