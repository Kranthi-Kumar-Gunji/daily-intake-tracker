const STORAGE_KEY = "dailyIntakeTrackerV1";
const foods = Array.isArray(window.FOOD_DATABASE) ? window.FOOD_DATABASE : [];

const nutrientMeta = {
  calories: { label: "Calories", unit: "kcal" },
  protein: { label: "Protein", unit: "g" },
  iron: { label: "Iron", unit: "mg" },
  vitaminC: { label: "Vitamin C", unit: "mg" },
  vitaminD: { label: "Vitamin D", unit: "mcg" },
  b12: { label: "Vitamin B12", unit: "mcg" },
  calcium: { label: "Calcium", unit: "mg" },
  folate: { label: "Folate", unit: "mcg" },
  fiber: { label: "Fiber", unit: "g" }
};

const defaultState = {
  profiles: [
    { id: crypto.randomUUID(), name: "Sowmya", sex: "female", age: 28, weight: 45, height: 152.4, activity: 1.2 },
    { id: crypto.randomUUID(), name: "Kranthi", sex: "male", age: 30, weight: 90, height: 170.2, activity: 1.2 }
  ],
  activeProfileId: null,
  logs: {}
};
defaultState.activeProfileId = defaultState.profiles[0].id;

let state = loadState();

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return structuredClone(defaultState);
  try {
    const parsed = JSON.parse(raw);
    if (!parsed.profiles?.length) return structuredClone(defaultState);
    parsed.logs ||= {};
    parsed.activeProfileId ||= parsed.profiles[0].id;
    return parsed;
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function dateKey() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function activeProfile() {
  return state.profiles.find(p => p.id === state.activeProfileId) || state.profiles[0];
}

function calcBMR(p) {
  const base = 10 * p.weight + 6.25 * p.height - 5 * p.age;
  return p.sex === "male" ? base + 5 : base - 161;
}

function nutrientTargets(p) {
  const calories = Math.round(calcBMR(p) * Number(p.activity));
  let iron, vitaminC, calcium, fiber;

  if (p.sex === "female") {
    iron = p.age >= 51 ? 8 : 18;
    vitaminC = 75;
    calcium = p.age >= 51 ? 1200 : 1000;
    fiber = p.age >= 51 ? 21 : 25;
  } else {
    iron = 8;
    vitaminC = 90;
    calcium = p.age >= 71 ? 1200 : 1000;
    fiber = p.age >= 51 ? 30 : 38;
  }

  return {
    calories,
    protein: Math.round(p.weight * 0.8 * 10) / 10,
    iron,
    vitaminC,
    vitaminD: p.age >= 71 ? 20 : 15,
    b12: 2.4,
    calcium,
    folate: 400,
    fiber
  };
}

function getLog() {
  const p = activeProfile();
  state.logs[p.id] ||= {};
  state.logs[p.id][dateKey()] ||= [];
  return state.logs[p.id][dateKey()];
}

function totals() {
  const total = {};
  Object.keys(nutrientMeta).forEach(k => total[k] = 0);
  getLog().forEach(entry => {
    Object.keys(nutrientMeta).forEach(k => total[k] += Number(entry[k] || 0));
  });
  return total;
}

function renderProfiles() {
  const select = document.getElementById("profileSelect");
  select.innerHTML = state.profiles.map(p =>
    `<option value="${p.id}" ${p.id === state.activeProfileId ? "selected" : ""}>${escapeHtml(p.name || "Unnamed")}</option>`
  ).join("");

  const p = activeProfile();
  if (!p) return;

  document.getElementById("name").value = p.name;
  document.getElementById("sex").value = p.sex;
  document.getElementById("age").value = p.age;
  document.getElementById("weight").value = p.weight;
  document.getElementById("height").value = p.height;
  document.getElementById("activity").value = String(p.activity);

  document.getElementById("bmrValue").textContent = `${Math.round(calcBMR(p))} kcal/day`;
  document.getElementById("calorieTargetValue").textContent = `${nutrientTargets(p).calories} kcal/day`;
}

function renderRings() {
  const target = nutrientTargets(activeProfile());
  const total = totals();
  const rings = document.getElementById("rings");

  rings.innerHTML = Object.keys(nutrientMeta).map(key => {
    const t = target[key];
    const v = total[key];
    const pctRaw = t ? (v / t) * 100 : 0;
    const pct = Math.max(0, Math.min(100, pctRaw));
    const meta = nutrientMeta[key];
    return `
      <div class="ring-card">
        <div class="ring" style="--p:${pct}"><span>${Math.round(pctRaw)}%</span></div>
        <div class="name">${meta.label}</div>
        <div class="value">${formatNum(v)} / ${formatNum(t)} ${meta.unit}</div>
      </div>`;
  }).join("");
}

function foodCategories() {
  return [...new Set(foods.map(f => f.category))].sort();
}

function renderFoodCategories() {
  const categoryEl = document.getElementById("foodCategory");
  if (!categoryEl.options.length) {
    categoryEl.innerHTML = `<option value="All">All foods</option>` +
      foodCategories().map(c => `<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");
  }
  renderFoodOptions();
}

function renderFoodOptions() {
  const category = document.getElementById("foodCategory").value || "All";
  const foodEl = document.getElementById("foodSelect");
  const currentId = foodEl.value;
  const filtered = category === "All" ? foods : foods.filter(f => f.category === category);

  foodEl.innerHTML = filtered.map(f =>
    `<option value="${f.id}">${escapeHtml(f.name)}</option>`
  ).join("");

  if (filtered.some(f => f.id === currentId)) foodEl.value = currentId;
  updateFoodPreview();
}

function selectedFood() {
  return foods.find(f => f.id === document.getElementById("foodSelect").value);
}

function selectedAmountInGrams() {
  const food = selectedFood();
  if (!food) return 0;
  const qty = Math.max(0, Number(document.getElementById("foodQuantity").value || 0));
  const unit = document.getElementById("quantityUnit").value;
  return unit === "serving" ? qty * food.servingGrams : qty;
}

function calculateNutrition(food, grams) {
  const factor = grams / 100;
  const result = {};
  Object.keys(nutrientMeta).forEach(key => {
    result[key] = Number(food?.[key] || 0) * factor;
  });
  return result;
}

function updateFoodPreview() {
  const food = selectedFood();
  if (!food) {
    document.getElementById("nutritionPreview").innerHTML = "No foods available.";
    return;
  }

  const grams = selectedAmountInGrams();
  const nutrition = calculateNutrition(food, grams);
  const unit = document.getElementById("quantityUnit").value;
  const qty = Number(document.getElementById("foodQuantity").value || 0);

  document.getElementById("servingHint").textContent =
    `Standard serving: ${food.servingName} = ${food.servingGrams} g. Current amount: ${formatNum(grams)} g.`;

  document.getElementById("nutritionPreview").innerHTML = Object.keys(nutrientMeta).map(key => {
    const meta = nutrientMeta[key];
    return `<div class="preview-item"><span>${meta.label}</span><strong>${formatNum(nutrition[key])} ${meta.unit}</strong></div>`;
  }).join("");
}

function renderTable() {
  const body = document.getElementById("foodTableBody");
  const log = getLog();

  if (!log.length) {
    body.innerHTML = `<tr><td colspan="12">No food entered yet today.</td></tr>`;
    return;
  }

  body.innerHTML = log.map((e, i) => `
    <tr>
      <td>${escapeHtml(e.foodName || "Food")}</td>
      <td>${formatNum(e.grams || 0)} g</td>
      <td>${formatNum(e.calories)}</td>
      <td>${formatNum(e.protein)}</td>
      <td>${formatNum(e.iron)}</td>
      <td>${formatNum(e.vitaminC)}</td>
      <td>${formatNum(e.vitaminD)}</td>
      <td>${formatNum(e.b12)}</td>
      <td>${formatNum(e.calcium)}</td>
      <td>${formatNum(e.folate)}</td>
      <td>${formatNum(e.fiber)}</td>
      <td><button class="danger" onclick="removeEntry(${i})">Delete</button></td>
    </tr>`).join("");
}

function formatNum(n) {
  const x = Number(n || 0);
  if (Math.abs(x) >= 100) return Math.round(x);
  return Math.round(x * 10) / 10;
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, s => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  })[s]);
}

function render() {
  document.getElementById("todayLabel").textContent =
    new Date().toLocaleDateString(undefined, { weekday:"long", year:"numeric", month:"long", day:"numeric" });
  renderProfiles();
  renderRings();
  renderTable();
  saveState();
}

document.getElementById("profileSelect").addEventListener("change", e => {
  state.activeProfileId = e.target.value;
  render();
});

document.getElementById("saveProfileBtn").addEventListener("click", () => {
  const p = activeProfile();
  p.name = document.getElementById("name").value.trim() || "Unnamed";
  p.sex = document.getElementById("sex").value;
  p.age = Number(document.getElementById("age").value);
  p.weight = Number(document.getElementById("weight").value);
  p.height = Number(document.getElementById("height").value);
  p.activity = Number(document.getElementById("activity").value);
  render();
});

document.getElementById("newProfileBtn").addEventListener("click", () => {
  const p = { id: crypto.randomUUID(), name: "New Person", sex: "female", age: 30, weight: 60, height: 165, activity: 1.2 };
  state.profiles.push(p);
  state.activeProfileId = p.id;
  render();
});

document.getElementById("foodCategory").addEventListener("change", renderFoodOptions);
document.getElementById("foodSelect").addEventListener("change", updateFoodPreview);
document.getElementById("foodQuantity").addEventListener("input", updateFoodPreview);
document.getElementById("quantityUnit").addEventListener("change", updateFoodPreview);

document.getElementById("addFoodBtn").addEventListener("click", () => {
  const food = selectedFood();
  if (!food) return;
  const grams = selectedAmountInGrams();
  if (grams <= 0) return;

  const nutrition = calculateNutrition(food, grams);
  getLog().push({
    foodId: food.id,
    foodName: food.name,
    grams,
    ...nutrition
  });
  render();
});

document.getElementById("resetDayBtn").addEventListener("click", () => {
  if (!confirm("Delete all entries for today for the selected person?")) return;
  const p = activeProfile();
  state.logs[p.id] ||= {};
  state.logs[p.id][dateKey()] = [];
  render();
});

window.removeEntry = function(index) {
  getLog().splice(index, 1);
  render();
};

renderFoodCategories();
render();
