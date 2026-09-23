const configs = Array.isArray(window.LOBBY_CONFIGS) ? window.LOBBY_CONFIGS : [];
const grid = document.querySelector("#config-grid");
const template = document.querySelector("#config-template");
const filters = document.querySelector("#filters");
const search = document.querySelector("#search");
const emptyState = document.querySelector("#empty-state");
const count = document.querySelector("#config-count");
const toast = document.querySelector("#toast");
let activeCategory = "All";
let toastTimer;

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
    const button = document.createElement("button");
    button.type = "button";
    button.className = `filter-button${category === activeCategory ? " active" : ""}`;
    button.textContent = category;
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
    const matchesCategory = activeCategory === "All"
      ? config.category !== "Tweaks"
      : config.category === activeCategory;
    const haystack = [config.title, config.description, config.category, config.skirmish, config.lobby].join(" ").toLowerCase();
    return matchesCategory && haystack.includes(query);
  });

  grid.replaceChildren();
  visible.forEach((config) => {
    const fragment = template.content.cloneNode(true);
    fragment.querySelector(".category-pill").textContent = config.category;
    const previewImage = fragment.querySelector(".map-preview img");
    const previewPlaceholder = fragment.querySelector(".map-placeholder");
    if (config.image) {
      previewImage.addEventListener("load", () => {
        previewImage.hidden = false;
        previewPlaceholder.hidden = true;
      });
      previewImage.addEventListener("error", () => {
        previewImage.hidden = true;
        previewPlaceholder.hidden = false;
      });
      previewImage.src = config.image;
      previewImage.alt = `${config.title} map screenshot`;
    }
    fragment.querySelector("h3").textContent = config.title;
    fragment.querySelector(".description").textContent = config.description;
    fragment.querySelector("code").textContent = config.skirmish;
    const skirmishButton = fragment.querySelector(".skirmish-button");
    skirmishButton.setAttribute("aria-label", `Copy ${config.title} Skirmish command`);
    skirmishButton.addEventListener("click", () => copyCommand(skirmishButton, config.skirmish, "Copy Skirmish"));
    const lobbyButton = fragment.querySelector(".lobby-button");
    lobbyButton.setAttribute("aria-label", `Copy ${config.title} Lobby command`);
    lobbyButton.addEventListener("click", () => copyCommand(lobbyButton, config.lobby, "Copy Lobby"));
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
