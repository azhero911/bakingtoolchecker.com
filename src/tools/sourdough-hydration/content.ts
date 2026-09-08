export const SOURDOUGH_CONTENT = {
  h1: 'Sourdough Hydration & Starter Split Calculator',
  explanation:
    'Calculate the true total hydration of your sourdough bread formula by accurately accounting for both the flour and water already present inside your starter (levain).',
  
  howItWorks:
    'Standard sourdough recipes often instruct you to combine flour, water, and active starter. However, ripe starter is typically 50% water and 50% flour by weight. This calculator extracts those internal proportions and combines them with your main recipe ingredients to reveal your true total hydration and exact preferment percentages.',

  formula: {
    title: 'The Sourdough Baker\'s Hydration Formula',
    latex: `1. Starter Flour = Starter Weight ÷ (1 + Starter Hydration %)
2. Starter Water = Starter Weight - Starter Flour
3. Total Flour = Recipe Flour + Starter Flour
4. Total Water = Added Water + Starter Water
5. True Hydration % = (Total Water ÷ Total Flour) × 100`,
  },

  workedExample: {
    title: 'Worked Example: 500g Flour Loaf at 100% Starter Hydration',
    body: `Suppose your recipe calls for:
• 500g Bread Flour
• 350g Added Water
• 100g Sourdough Starter (100% hydration)
• 10g Salt

Step 1: The 100g starter consists of 50g flour and 50g water.
Step 2: Total Flour = 500g + 50g = 550g.
Step 3: Total Water = 350g + 50g = 400g.
Step 4: True Hydration = (400g ÷ 550g) × 100 = 72.7%.
Step 5: Starter Inoculation = (100g ÷ 550g) × 100 = 18.2%.
Step 6: Prefermented Flour = (50g ÷ 550g) × 100 = 9.1%.`,
  },

  assumptions: [
    'A 100% hydration starter consists of equal weights of water and flour (1:1 ratio).',
    'Starter hydration can be adjusted between 50% and 150% if using stiff or liquid levains.',
    'Salt percentage is calculated relative to the total flour weight (recipe flour + starter flour).',
    'Calculations assume unbleached flour without liquid additives like milk or oil.',
  ],

  commonMistakes: [
    {
      mistake: 'Assuming 350g water + 500g flour is 70% hydration',
      correction:
        'When you add 100g of starter, you are adding an extra 50g of water. Your true hydration is actually 72.7%, which can make the dough feel stickier than anticipated.',
    },
    {
      mistake: 'Using volumetric cups instead of weight in grams',
      correction:
        'A cup of flour can weigh anywhere from 120g to 160g depending on humidity and how tightly it is packed. Always use a digital kitchen gram scale for consistent artisan bread.',
    },
    {
      mistake: 'Confusing Starter Inoculation with Prefermented Flour',
      correction:
        'Starter Inoculation is the total starter weight divided by total flour (18.2% in our example). Prefermented Flour is only the flour portion inside the starter divided by total flour (9.1%).',
    },
  ],

  sources: [
    {
      name: 'The Bread Baker\'s Apprentice',
      author: 'Peter Reinhart',
      note: 'Foundational text defining baker\'s percentage notation and preferment calculations in artisan breads.',
    },
    {
      name: 'King Arthur Baking Baker\'s Percentage Reference',
      author: 'King Arthur Test Kitchen',
      note: 'Standard industry guide on water-to-flour ratios and fermentation temperature factors.',
    },
    {
      name: 'Bread: A Baker\'s Book of Techniques and Recipes',
      author: 'Jeffrey Hamelman',
      note: 'Definitive reference on prefermented flour calculations and sourdough levain hydration formulas.',
    },
  ],
};
