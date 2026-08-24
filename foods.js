// Starter food database for the Daily Intake Tracker.
// Nutrient values are stored per 100 g and are intended as practical starter data.
// For production use, replace/extend this with a verified nutrition source such as USDA FoodData Central.

window.FOOD_DATABASE = [
  { id:'oats-dry', name:'Oats, dry', category:'Breakfast', servingName:'1/2 cup dry', servingGrams:40, calories:379, protein:13.2, iron:4.3, vitaminC:0, vitaminD:0, b12:0, calcium:52, folate:32, fiber:10.1 },
  { id:'granola', name:'Granola', category:'Breakfast', servingName:'1/2 cup', servingGrams:55, calories:471, protein:10, iron:2.7, vitaminC:1, vitaminD:0, b12:0.2, calcium:61, folate:35, fiber:5.3 },
  { id:'upma', name:'Upma, cooked', category:'Breakfast', servingName:'1 cup', servingGrams:180, calories:132, protein:3.5, iron:1.2, vitaminC:2.5, vitaminD:0, b12:0, calcium:18, folate:28, fiber:2.2 },
  { id:'idli', name:'Idli', category:'Breakfast', servingName:'1 medium idli', servingGrams:40, calories:146, protein:4.5, iron:1.2, vitaminC:0.2, vitaminD:0, b12:0, calcium:18, folate:15, fiber:1.5 },
  { id:'dosa', name:'Dosa, plain', category:'Breakfast', servingName:'1 medium dosa', servingGrams:90, calories:168, protein:4.5, iron:1.1, vitaminC:0.3, vitaminD:0, b12:0, calcium:16, folate:18, fiber:1.8 },
  { id:'poha', name:'Poha, cooked', category:'Breakfast', servingName:'1 cup', servingGrams:180, calories:130, protein:2.6, iron:1.4, vitaminC:3, vitaminD:0, b12:0, calcium:18, folate:24, fiber:2.0 },

  { id:'milk-2pct', name:'Milk, 2%', category:'Dairy', servingName:'1 cup', servingGrams:244, calories:50, protein:3.3, iron:0.03, vitaminC:0.2, vitaminD:1.2, b12:0.45, calcium:120, folate:5, fiber:0 },
  { id:'greek-yogurt', name:'Greek yogurt, plain', category:'Dairy', servingName:'3/4 cup', servingGrams:170, calories:73, protein:9.9, iron:0.04, vitaminC:0, vitaminD:0.1, b12:0.75, calcium:115, folate:7, fiber:0 },
  { id:'egg-boiled', name:'Egg, boiled', category:'Protein', servingName:'1 large egg', servingGrams:50, calories:155, protein:12.6, iron:1.2, vitaminC:0, vitaminD:2.2, b12:1.1, calcium:50, folate:44, fiber:0 },
  { id:'chicken-breast', name:'Chicken breast, cooked', category:'Protein', servingName:'3 oz', servingGrams:85, calories:165, protein:31, iron:1.0, vitaminC:0, vitaminD:0.1, b12:0.3, calcium:15, folate:4, fiber:0 },
  { id:'salmon-cooked', name:'Salmon, cooked', category:'Protein', servingName:'3 oz', servingGrams:85, calories:206, protein:22, iron:0.5, vitaminC:0, vitaminD:13, b12:3.2, calcium:12, folate:25, fiber:0 },
  { id:'tofu-firm', name:'Tofu, firm', category:'Protein', servingName:'1/2 cup', servingGrams:126, calories:144, protein:17.3, iron:2.7, vitaminC:0.2, vitaminD:0, b12:0, calcium:683, folate:29, fiber:2.3 },
  { id:'lentils-cooked', name:'Lentils, cooked', category:'Protein', servingName:'1 cup', servingGrams:198, calories:116, protein:9.0, iron:3.3, vitaminC:1.5, vitaminD:0, b12:0, calcium:19, folate:181, fiber:7.9 },
  { id:'chickpeas-cooked', name:'Chickpeas, cooked', category:'Protein', servingName:'1 cup', servingGrams:164, calories:164, protein:8.9, iron:2.9, vitaminC:1.3, vitaminD:0, b12:0, calcium:49, folate:172, fiber:7.6 },

  { id:'rice-white-cooked', name:'White rice, cooked', category:'Grains', servingName:'1 cup', servingGrams:158, calories:130, protein:2.7, iron:0.2, vitaminC:0, vitaminD:0, b12:0, calcium:10, folate:3, fiber:0.4 },
  { id:'rice-brown-cooked', name:'Brown rice, cooked', category:'Grains', servingName:'1 cup', servingGrams:195, calories:123, protein:2.7, iron:0.6, vitaminC:0, vitaminD:0, b12:0, calcium:3, folate:9, fiber:1.6 },
  { id:'whole-wheat-bread', name:'Whole wheat bread', category:'Grains', servingName:'1 slice', servingGrams:28, calories:247, protein:13, iron:2.5, vitaminC:0, vitaminD:0, b12:0, calcium:107, folate:44, fiber:6.8 },

  { id:'banana', name:'Banana', category:'Fruit', servingName:'1 medium', servingGrams:118, calories:89, protein:1.1, iron:0.3, vitaminC:8.7, vitaminD:0, b12:0, calcium:5, folate:20, fiber:2.6 },
  { id:'apple', name:'Apple, with skin', category:'Fruit', servingName:'1 medium', servingGrams:182, calories:52, protein:0.3, iron:0.1, vitaminC:4.6, vitaminD:0, b12:0, calcium:6, folate:3, fiber:2.4 },
  { id:'orange', name:'Orange', category:'Fruit', servingName:'1 medium', servingGrams:131, calories:47, protein:0.9, iron:0.1, vitaminC:53.2, vitaminD:0, b12:0, calcium:40, folate:30, fiber:2.4 },
  { id:'strawberries', name:'Strawberries', category:'Fruit', servingName:'1 cup', servingGrams:152, calories:32, protein:0.7, iron:0.4, vitaminC:58.8, vitaminD:0, b12:0, calcium:16, folate:24, fiber:2.0 },
  { id:'blueberries', name:'Blueberries', category:'Fruit', servingName:'1 cup', servingGrams:148, calories:57, protein:0.7, iron:0.3, vitaminC:9.7, vitaminD:0, b12:0, calcium:6, folate:6, fiber:2.4 },

  { id:'spinach-raw', name:'Spinach, raw', category:'Vegetable', servingName:'2 cups', servingGrams:60, calories:23, protein:2.9, iron:2.7, vitaminC:28.1, vitaminD:0, b12:0, calcium:99, folate:194, fiber:2.2 },
  { id:'broccoli-cooked', name:'Broccoli, cooked', category:'Vegetable', servingName:'1 cup', servingGrams:156, calories:35, protein:2.4, iron:0.7, vitaminC:64.9, vitaminD:0, b12:0, calcium:40, folate:63, fiber:3.3 },
  { id:'carrot-raw', name:'Carrot, raw', category:'Vegetable', servingName:'1 medium', servingGrams:61, calories:41, protein:0.9, iron:0.3, vitaminC:5.9, vitaminD:0, b12:0, calcium:33, folate:19, fiber:2.8 },
  { id:'sweet-potato', name:'Sweet potato, cooked', category:'Vegetable', servingName:'1 medium', servingGrams:130, calories:90, protein:2.0, iron:0.7, vitaminC:19.6, vitaminD:0, b12:0, calcium:38, folate:6, fiber:3.3 },

  { id:'almonds', name:'Almonds', category:'Nuts & Seeds', servingName:'1 oz', servingGrams:28, calories:579, protein:21.2, iron:3.7, vitaminC:0, vitaminD:0, b12:0, calcium:269, folate:44, fiber:12.5 },
  { id:'chia-seeds', name:'Chia seeds', category:'Nuts & Seeds', servingName:'2 tbsp', servingGrams:28, calories:486, protein:16.5, iron:7.7, vitaminC:1.6, vitaminD:0, b12:0, calcium:631, folate:49, fiber:34.4 },
  { id:'flax-seeds', name:'Flax seeds', category:'Nuts & Seeds', servingName:'1 tbsp', servingGrams:10, calories:534, protein:18.3, iron:5.7, vitaminC:0.6, vitaminD:0, b12:0, calcium:255, folate:87, fiber:27.3 },
  { id:'pumpkin-seeds', name:'Pumpkin seeds', category:'Nuts & Seeds', servingName:'1 oz', servingGrams:28, calories:559, protein:30.2, iron:8.8, vitaminC:1.9, vitaminD:0, b12:0, calcium:46, folate:58, fiber:6.0 }
];
