# Daily Intake Tracker

A simple GitHub Pages-ready nutrition dashboard that tracks daily calories and selected nutrients for multiple people.

## Features

- Multiple person profiles
- Personalized calorie estimate from:
  - age
  - sex
  - weight
  - height
  - activity level
- BMR using the Mifflin–St Jeor equation
- Daily nutrient target tracking for:
  - Calories
  - Protein
  - Iron
  - Vitamin C
  - Vitamin D
  - Vitamin B12
  - Calcium
  - Folate
  - Fiber
- Progress rings
- Daily food log
- Browser localStorage
- No server/database required
- Ready for GitHub Pages

## Default Profiles

The starter app contains:

- Sowmya: female, age 28, 45 kg, 152.4 cm
- Kranthi: male, age 30, 90 kg, 170.2 cm

You can edit or add profiles in the app.

## Run locally

Just open `index.html` in a browser.

For a local web server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Put it on GitHub

1. Create a new GitHub repository, for example `daily-intake-tracker`.
2. Upload:
   - `index.html`
   - `style.css`
   - `app.js`
   - `README.md`
3. Commit the files.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)`.
7. Save.

GitHub will provide the public URL for your app.

## Nutrition calculations

Calories are estimated with the Mifflin–St Jeor BMR equation and an activity multiplier.

The micronutrient values are general adult reference targets and are not intended to replace personalized medical or dietary advice. Pregnancy, breastfeeding, medical conditions, medications, athletic training, and other circumstances may require different targets.

## Possible next upgrades

- Search foods automatically using USDA FoodData Central
- Breakfast/snack/lunch/dinner dropdown options
- Meal templates
- Weekly/monthly charts
- Goal selection: lose / maintain / gain weight
- Export to CSV or Excel
- Cloud login and syncing
- Add sodium, potassium, magnesium, zinc, vitamin A, vitamin E and vitamin K
