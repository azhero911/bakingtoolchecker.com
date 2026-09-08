export const PAN_CONVERTER_CONTENT = {
  h1: 'Baking Pan Size & Volume Converter',
  explanation:
    'Scale your cake, brownie, and bread recipes between round, square, rectangular, and Bundt pans based on geometric capacity.',

  howItWorks:
    'When swapping pan shapes, calculating the difference in surface area and total capacity reveals the exact volume scaling factor. This prevents overflow disasters or underfilled flat cakes while keeping ingredient proportions intact.',

  formula: {
    title: 'Geometric Pan Volume & Scaling Formulas',
    latex: `1. Round Pan Volume = π × (Diameter ÷ 2)² × Depth
2. Square Pan Volume = Side² × Depth
3. Rectangular Pan Volume = Length × Width × Depth
4. Bundt Pan Volume = Predefined Manufacturer Standard Capacity (Cups × 14.4375 in³/cup)
5. Volume-Based Scaling Factor = Target Pan Volume ÷ Original Pan Volume`,
  },

  workedExample: {
    title: 'Worked Example: 9×13-inch Sheet Pan to an 8-inch Round Cake Pan',
    body: `Original Pan: 9×13×2-inch rectangle
• Volume = 13 × 9 × 2 = 234.0 cubic inches

Target Pan: 8-inch round pan with 2-inch depth
• Radius = 4 inches
• Area = π × 4² = 50.27 square inches
• Volume = 50.27 × 2 = 100.53 cubic inches

Scaling Factor = 100.53 ÷ 234.0 = 0.4296 (approximately 0.43×).
Multiply all recipe ingredients by 0.43 to fill one 8-inch round pan, or split the full recipe across two 8-inch round pans (scaling at ~0.86×).`,
  },

  assumptions: [
    'Scaling factor is based on geometric pan capacity and volume.',
    'Assumes standard straight-walled metal or glass bakeware.',
    'Bundt pan capacities are mapped directly to standard US cup volumes (6-cup, 10-cup, 12-cup).',
    'Does not guarantee identical baking time; thermal heat conduction varies with batter depth.',
  ],

  commonMistakes: [
    {
      mistake: 'Assuming a 9-inch square pan is the same as a 9-inch round pan',
      correction:
        'A 9-inch square pan has 81 sq inches of area. A 9-inch round pan has only 63.6 sq inches. The square pan holds ~27% more batter than the round pan.',
    },
    {
      mistake: 'Relying strictly on a fixed temperature reduction rule',
      correction:
        'A deeper batter needs heat to reach the center without scorching the crust, but different batters (chiffon vs pound cake) behave differently. Always test with a skewer or cake tester.',
    },
    {
      mistake: 'Filling pans to the absolute brim',
      correction:
        'Always leave 1/3 to 1/2 of head space in your baking pan to allow for thermal expansion and steam leavening.',
    },
  ],

  sources: [
    {
      name: 'Joy of Cooking: Bakeware Volume Equivalents',
      author: 'Irma S. Rombauer',
      note: 'Reference guide on pan substitution equivalents and standard cup volume capacities.',
    },
    {
      name: 'King Arthur Baking Pan Conversion Guide',
      author: 'King Arthur Test Kitchen',
      note: 'Guidelines on thermal transfer, batter depths, and pan volume conversions.',
    },
  ],
};
