# Daily Intake Tracker

A GitHub Pages-ready nutrition dashboard for tracking daily calories, protein, vitamins and minerals for multiple people.

## New food database workflow

The app now uses `foods.js` as its starter food database.

Each food stores nutrition per 100 g plus a standard serving size. The user:

1. Selects a category.
2. Selects a food.
3. Enters a quantity.
4. Chooses **Serving** or **Grams**.
5. Sees calories and nutrient values populated automatically.
6. Clicks **Add to Today**.

Calculation used:

```text
nutrient consumed = nutrient per 100 g × grams consumed / 100
```

## Files

```text
daily-intake-tracker/
├── index.html
├── style.css
├── app.js
├── foods.js
└── README.md
```

## Current tracked nutrients

- Calories
- Protein
- Iron
- Vitamin C
- Vitamin D
- Vitamin B12
- Calcium
- Folate
- Fiber

## Default profiles

- Sowmya: female, 28 years, 45 kg, 152.4 cm
- Kranthi: male, 30 years, 90 kg, 170.2 cm

Profiles can be edited or added in the app.

## GitHub Pages

Upload all five files to the repository root. In GitHub open:

**Settings → Pages → Deploy from a branch → main → / (root)**

## Important data note

`foods.js` is a starter local dataset for building and testing the application. Food nutrient values can vary by brand, recipe, cooking method and database entry. For a production nutrition app, replace or extend the starter data with a verified nutrition database such as USDA FoodData Central.

## Recommended next upgrades

- Search bar/autocomplete across foods
- USDA FoodData Central API integration
- Custom recipe builder (oats + milk + seeds + fruit)
- Breakfast/lunch/snack/dinner classification
- Saved favorite meals
- Portion units such as cup, tbsp, piece and oz
- Weekly/monthly intake history
- Export CSV/Excel
