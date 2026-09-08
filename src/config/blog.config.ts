export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  relatedToolSlug: string;
  relatedToolName: string;
  contentHtml: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'true-sourdough-hydration-guide',
    title: 'How to Calculate True Sourdough Hydration (Including Starter)',
    description: 'Why standard hydration formulas fail when sourdough starter is added, how to calculate true flour and water splits, and ideal hydration ranges by flour type.',
    category: 'Bread & Sourdough',
    readTime: '6 min read',
    date: '2026-09-08',
    image: '/images/card-sourdough.webp',
    relatedToolSlug: 'sourdough-hydration-calculator',
    relatedToolName: 'Sourdough Hydration Calculator',
    contentHtml: [
      'In artisan bread baking, hydration is defined as the total weight of water relative to the total weight of flour, expressed as a baker\'s percentage. While the concept is simple for straight yeasted doughs, sourdough baking introduces a critical variable: the sourdough starter (levain).',
      'A standard sourdough starter maintained at 100% hydration consists of exactly equal parts flour and water by weight. If your recipe calls for 500g of flour, 350g of water, and 100g of starter, the unadjusted baker\'s hydration appears to be 70% (350 / 500). However, the starter itself contributes an additional 50g of flour and 50g of water to the dough mass.',
      'To calculate True Hydration, both the flour and water contained within the starter must be split and added to their respective totals:',
      'Total Flour = Recipe Flour (500g) + Starter Flour (50g) = 550g.\nTotal Water = Recipe Water (350g) + Starter Water (50g) = 400g.\nTrue Hydration = (400g / 550g) * 100 = 72.7%.',
      'Failing to account for the starter\'s water content means your actual dough will be nearly 3% wetter than expected. In high-hydration recipes (78% to 85%), an unanticipated 3% increase can be the difference between a dough with sufficient surface tension for oven spring and a loose, unmanageable puddle on your bench.',
      'Flour absorption varies significantly by protein content and milling method. High-protein bread flour (12.7%–14% protein) can easily absorb 75% to 80% true hydration. All-purpose flour (10%–11.5% protein) typically peaks around 68% to 72% hydration, while whole wheat and rye flours require substantially higher hydration (80%–90%) due to their high bran and fiber content.'
    ]
  },
  {
    slug: 'bakers-percentage-universal-scaling-guide',
    title: 'Mastering Baker\'s Percentages: The Universal Formula Scaling Method',
    description: 'Learn how professional bakers express recipes as mathematical ratios where total flour equals 100%, allowing instant scaling for any batch size.',
    category: 'Baking Fundamentals',
    readTime: '5 min read',
    date: '2026-09-08',
    image: '/images/card-bakers-scale.webp',
    relatedToolSlug: 'bakers-percentage-calculator',
    relatedToolName: 'Baker\'s Percentage Scaler',
    contentHtml: [
      'Standard home baking recipes express ingredients in fixed volumetric units (cups, tablespoons) or static gram weights. While this works for a single batch, it makes scaling recipes, diagnosing crumb structure, or comparing different formulas difficult.',
      'Professional bakers use Baker\'s Percentages (also known as Baker\'s Math). In this system, the total weight of all flour in the recipe is established as the absolute reference point: 100%. Every other ingredient—water, salt, yeast, starter, fat, sugar—is expressed as a mathematical percentage relative to that total flour weight.',
      'For example, a classic French baguette formula might look like:\n- Bread Flour: 100% (500g)\n- Water: 68% (340g)\n- Fine Sea Salt: 2.0% (10g)\n- Instant Dry Yeast: 0.4% (2g)\nTotal Baker\'s Percentage = 170.4%.',
      'The primary advantage of baker\'s percentages is universal scalability. Whether you are baking 1 loaf (300g flour) or 200 baguettes (60kg flour), the proportions remain identical. To scale by desired total dough weight, simply divide the target batch weight by the total percentage sum to find the base flour weight, then multiply through for each ingredient.',
      'Furthermore, baker\'s percentages allow immediate recipe analysis at a glance. A baker can look at a formula and instantly know whether the dough will be tight (60% hydration), standard (68%–72%), or wet and open-crumbed (78%+), regardless of the actual quantities written down.'
    ]
  },
  {
    slug: 'baking-pan-size-conversion-guide',
    title: 'How to Convert Baking Pan Sizes: Geometric Volume, Surface Area & Thermal Adjustments',
    description: 'A step-by-step guide to calculating pan volume, adjusting batter scaling factors, and managing oven temperatures when changing cake pans.',
    category: 'Cakes & Pastry',
    readTime: '5 min read',
    date: '2026-09-08',
    image: '/images/card-pan-converter.webp',
    relatedToolSlug: 'baking-pan-converter',
    relatedToolName: 'Baking Pan Size Converter',
    contentHtml: [
      'One of the most frequent kitchen dilemmas is having a cake or brownie recipe written for a specific pan size (such as a 9x13-inch rectangular pan) when you only have an 8-inch round or square cake pan on hand.',
      'Simply pouring the entire batter into a smaller pan will cause it to overflow in the oven or leave the center raw while the outer edges overbake. Conversely, baking in a pan that is too large results in thin, dry, and overcooked baked goods.',
      'To substitute pans accurately, you must calculate the geometric volume of both the original pan and the target pan:\n- Rectangular/Square Pan Volume = Length * Width * Depth\n- Round Pan Volume = π * (Diameter / 2)² * Depth',
      'For example, comparing a 9x13x2-inch pan (234 cubic inches) to an 8x2-inch round pan (100.5 cubic inches) yields a Volume Scaling Factor of 100.5 / 234 = 0.43x. You need exactly 43% of the original recipe ingredients to fill the 8-inch round pan to the identical depth.',
      'Whenever your scaling factor changes the thickness (depth) of the batter, you must also adjust your baking time and oven temperature. As a general rule: if batter depth increases, decrease oven temperature by 25°F (15°C) and extend baking time by 15%–25% to allow the heat to penetrate the deeper center without burning the exterior crust.'
    ]
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
