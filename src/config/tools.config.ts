export interface ToolFAQ {
  question: string;
  answer: string;
}

export interface ToolDefinition {
  id: string;
  slug: string;
  name: string;
  category: 'bread' | 'pastry';
  categoryLabel: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonicalPath: string;
  componentKey: 'SourdoughUI' | 'BakersPercentageUI' | 'PanConverterUI';
  assumptions: string[];
  faqs: ToolFAQ[];
  relatedToolSlugs: string[];
}

export const TOOLS_REGISTRY: ToolDefinition[] = [
  {
    id: 'sourdough_hydration_v1',
    slug: 'sourdough-hydration-calculator',
    name: 'Sourdough Hydration Calculator',
    category: 'bread',
    categoryLabel: 'Bread & Sourdough',
    shortDescription: 'Calculate true sourdough hydration, starter split contribution, and prefermented flour ratios accurately.',
    metaTitle: 'Sourdough Hydration Calculator | True Baker\'s Math Tool',
    metaDescription: 'Calculate precise total dough hydration by accounting for the water and flour inside your starter. Includes starter inoculation and prefermented flour percentages.',
    keywords: [
      'sourdough hydration calculator',
      'sourdough calculator with starter',
      'bakers percentage sourdough',
      'bread hydration calculator',
      'true hydration calculator',
    ],
    canonicalPath: '/tools/sourdough-hydration-calculator',
    componentKey: 'SourdoughUI',
    assumptions: [
      'A 100% hydration starter consists of equal weights of flour and water (e.g. 50g flour + 50g water per 100g starter).',
      'Starter hydration can be adjusted between 50% and 150% for liquid or stiff levains.',
      'Salt percentage is calculated relative to total flour (recipe flour + flour in starter).',
    ],
    faqs: [
      {
        question: 'Why does sourdough starter affect total hydration?',
        answer: 'Sourdough starter is not an inert additive; it is made of water and flour. In a standard 100% hydration starter, half the weight is water and half is flour. If you add 100g of starter to 500g of flour and 350g of water, your true dough contains 550g of flour and 400g of water, giving 72.7% true hydration instead of 70%.',
      },
      {
        question: 'What is the difference between Starter Weight % and Prefermented Flour %?',
        answer: 'Starter Weight % (inoculation) measures total starter weight relative to total flour. Prefermented Flour % measures only the flour component inside the starter relative to total flour. Both are essential metrics in artisan bread formulations.',
      },
      {
        question: 'What is a manageable hydration level for beginners?',
        answer: 'For beginners, 65% to 68% hydration provides an open, flavorful crumb while keeping dough easy to handle and shape without sticking excessively.',
      },
    ],
    relatedToolSlugs: ['bakers-percentage-calculator', 'baking-pan-converter'],
  },
  {
    id: 'bakers_percentage_v1',
    slug: 'bakers-percentage-calculator',
    name: 'Baker\'s Percentage Calculator & Scaler',
    category: 'bread',
    categoryLabel: 'Bread & Sourdough',
    shortDescription: 'Universal recipe scaling tool with flour as the 100% baseline. Scale by flour weight or desired total batch weight.',
    metaTitle: 'Baker\'s Percentage Calculator | Scale Any Baking Recipe',
    metaDescription: 'Scale bread, pizza, and pastry recipes instantly using baker\'s percentages. Convert weights to percentages or scale by target batch weight.',
    keywords: [
      'bakers percentage calculator',
      'bakers math calculator',
      'flour percentage calculator',
      'scale bread recipe by bakers percentage',
      'bread formula scaler',
    ],
    canonicalPath: '/tools/bakers-percentage-calculator',
    componentKey: 'BakersPercentageUI',
    assumptions: [
      'Total flour weight is always defined as 100%. All other ingredients are expressed as a ratio of the flour weight.',
      'Scaling by Flour multiplies every ingredient by the ratio of New Flour / Current Flour.',
      'Scaling by Batch Weight scales all ingredients proportionally so their sum matches the desired total batch weight.',
    ],
    faqs: [
      {
        question: 'What is a Baker\'s Percentage?',
        answer: 'Baker\'s Percentage is a notation method where the total weight of flour is always set to 100%. Every other ingredient (water, salt, yeast) is calculated as a percentage of that flour weight, allowing recipes to be scaled to any batch size effortlessly.',
      },
      {
        question: 'Why do my percentages add up to more than 100%?',
        answer: 'Because flour itself is 100%. If water is 70%, salt is 2%, and yeast is 1%, the total recipe percentage is 173%. This is completely normal and standard in baker\'s math.',
      },
    ],
    relatedToolSlugs: ['sourdough-hydration-calculator', 'baking-pan-converter'],
  },
  {
    id: 'baking_pan_converter_v1',
    slug: 'baking-pan-converter',
    name: 'Baking Pan Size & Volume Converter',
    category: 'pastry',
    categoryLabel: 'Cakes & Pastry',
    shortDescription: 'Convert recipe quantities between round, square, rectangular, and Bundt pans based on geometric capacity.',
    metaTitle: 'Baking Pan Size & Volume Converter | Cake Pan Scaler',
    metaDescription: 'Scale cake, brownie, and pastry recipes between different pan dimensions, shapes, and depths. Includes geometric volume and thermal baking guidance.',
    keywords: [
      'baking pan converter',
      'cake pan converter',
      'pan size converter baking',
      'round to square pan converter',
      'bundt pan conversion',
    ],
    canonicalPath: '/tools/baking-pan-converter',
    componentKey: 'PanConverterUI',
    assumptions: [
      'Scaling is based on the geometric volume / estimated capacity of the two pans.',
      'Actual recipe scaling may require fine-tuning depending on how high the batter rises and the desired finished cake height.',
      'Bundt pan capacity is derived from standard manufacturer cup volumes (6-cup, 10-cup, 12-cup).',
    ],
    faqs: [
      {
        question: 'Does the volume scaling factor guarantee identical bake times?',
        answer: 'No. The scaling factor matches total batter volume, but pan depth and surface area affect thermal heat transfer. A deeper cake layer requires extra time for heat to penetrate the center. Always test doneness with a skewer or tactile spring-back cues.',
      },
      {
        question: 'How do I convert a 9x13-inch pan to round cake pans?',
        answer: 'A 9x13x2-inch pan holds approximately 234 cubic inches. An 8x2-inch round pan holds approximately 100.5 cubic inches. Moving from a 9x13 to one 8-inch round requires scaling your recipe by approximately 0.43× (or splitting the 9x13 recipe across two 8-inch round pans at ~0.86×).',
      },
    ],
    relatedToolSlugs: ['sourdough-hydration-calculator', 'bakers-percentage-calculator'],
  },
];

export function getToolBySlug(slug: string): ToolDefinition | undefined {
  return TOOLS_REGISTRY.find((tool) => tool.slug === slug);
}

export function getAllToolSlugs(): string[] {
  return TOOLS_REGISTRY.map((tool) => tool.slug);
}
