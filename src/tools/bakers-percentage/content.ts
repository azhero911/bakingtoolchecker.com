export const BAKERS_PERCENTAGE_CONTENT = {
  h1: "Baker's Percentage Calculator & Recipe Scaler",
  explanation:
    "Convert any baking recipe into professional baker's percentages, or scale your ingredient quantities to any target flour or batch weight instantly.",

  howItWorks:
    "In professional baking, ingredients are measured relative to the total flour weight rather than as parts of 100% total dough. Total flour is always assigned 100%. Every other ingredient is calculated as: (Ingredient Weight ÷ Total Flour Weight) × 100. This standard allows bakers to scale recipes from a single loaf to commercial production runs without altering dough balance.",

  formula: {
    title: "Baker's Percentage Scaling Formulas",
    latex: `1. Baker's % = (Ingredient Weight ÷ Total Flour Weight) × 100
2. Flour-Based Scaling: New Weight = Ingredient Weight × (Target Flour ÷ Current Flour)
3. Batch-Based Scaling: New Weight = Ingredient Weight × (Target Total Weight ÷ Current Total Weight)`,
  },

  workedExample: {
    title: 'Worked Example: Scaling a 1kg Bread Formula to a 2.5kg Batch',
    body: `Base Formula:
• Bread Flour: 1,000g (100.0%)
• Water: 700g (70.0%)
• Salt: 20g (2.0%)
• Instant Yeast: 5g (0.5%)
Total Dough Weight = 1,725g

To scale to a 2,500g target batch:
1. Scaling Factor = 2,500g ÷ 1,725g = 1.4493×
2. Scaled Flour = 1,000g × 1.4493 = 1,449.3g
3. Scaled Water = 700g × 1.4493 = 1,014.5g
4. Scaled Salt = 20g × 1.4493 = 29.0g
5. Scaled Yeast = 5g × 1.4493 = 7.2g
Sum of scaled ingredients = 2,500.0g (Percentages remain identical).`,
  },

  assumptions: [
    'Total flour weight is always the 100% reference baseline.',
    'If multiple types of flour are present, their sum is treated as the 100% flour baseline.',
    'Ingredient measurements assume net weight in grams or ounces on a calibrated digital scale.',
    'Scaling calculations assume linear ingredient scaling (standard for lean and enriched doughs).',
  ],

  commonMistakes: [
    {
      mistake: 'Assuming all percentages must sum to 100%',
      correction:
        'In true baker\'s math, flour alone is 100%. A typical bread recipe with 70% water, 2% salt, and 1% yeast sums to 173% total formula percentage.',
    },
    {
      mistake: 'Scaling yeast linearly for massive commercial batches (100kg+)',
      correction:
        'For home and small bakery batches (under 20kg), linear scaling works accurately. For very large industrial batches, dough mass generates friction heat requiring slight yeast reductions.',
    },
    {
      mistake: 'Measuring liquids by liquid volume instead of weight',
      correction:
        'Always weigh water and liquids in grams on a scale. 1 gram of water equals 1 milliliter at room temperature.',
    },
  ],

  sources: [
    {
      name: 'Advanced Bread and Pastry',
      author: 'Michel Suas',
      note: 'Comprehensive culinary textbook outlining baker\'s percentage standards and batch yield formulas.',
    },
    {
      name: 'The Professional Pastry Chef: Fundamentals of Baking and Pastry',
      author: 'Bo Friberg',
      note: 'Reference guide on scaling enriched doughs, laminated doughs, and percentage conversions.',
    },
  ],
};
