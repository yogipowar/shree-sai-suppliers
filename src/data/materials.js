import { images } from '../constants/images';

export const materials = [
  {
    id: 'crusher-material',
    name: 'Crusher Material',
    category: 'Crusher Materials',
    shortDescription:
      'Reliable crusher materials for construction and infrastructure projects.',
    description:
      'High-quality crusher material sourced for consistent grading and strength. Ideal for foundations, roads, and general construction fill requirements.',
    applications: [
      'Road construction',
      'Foundation work',
      'Infrastructure projects',
      'Filling & leveling',
    ],
    image: images.crusherMaterial,
  },
  {
    id: 'stone-dust',
    name: 'Stone Dust',
    category: 'Crusher Materials',
    shortDescription:
      'Suitable for construction, filling, and infrastructure requirements.',
    description:
      'Fine stone dust used for compacting, paving base layers, and various construction filling applications with dependable quality.',
    applications: [
      'Paving base',
      'Compaction layers',
      'Filling',
      'Landscaping',
    ],
    image: images.stoneDust,
  },
  {
    id: 'aggregate-10mm',
    name: '10mm Aggregate',
    category: 'Aggregates',
    shortDescription:
      'Quality aggregate for concrete and construction applications.',
    description:
      'Precision-graded 10mm aggregate suitable for concrete mixes, plastering-related works, and finer construction applications.',
    applications: [
      'Concrete mixes',
      'Residential construction',
      'Flooring',
      'General building',
    ],
    image: images.aggregate10,
  },
  {
    id: 'aggregate-20mm',
    name: '20mm Aggregate',
    category: 'Aggregates',
    shortDescription:
      'Durable aggregate for residential, commercial, and infrastructure projects.',
    description:
      'Widely used 20mm aggregate for RCC work, slabs, beams, and commercial construction requiring consistent strength.',
    applications: [
      'RCC work',
      'Slabs & beams',
      'Commercial buildings',
      'Infrastructure',
    ],
    image: images.aggregate20,
  },
  {
    id: 'aggregate-40mm',
    name: '40mm Aggregate',
    category: 'Aggregates',
    shortDescription:
      'Suitable for heavy construction and infrastructure applications.',
    description:
      'Coarse 40mm aggregate designed for heavy-duty construction, road work, and large-scale infrastructure requirements.',
    applications: [
      'Heavy construction',
      'Road base',
      'Large foundations',
      'Infrastructure',
    ],
    image: images.aggregate40,
  },
  {
    id: 'gsb',
    name: 'GSB',
    category: 'Other Materials',
    shortDescription:
      'Quality granular sub-base material for roads and infrastructure.',
    description:
      'Granular Sub-Base (GSB) material for road construction and pavement layers, supporting durable and stable surfaces.',
    applications: [
      'Road construction',
      'Pavement layers',
      'Highway projects',
      'Infrastructure',
    ],
    image: images.gsb,
  },
  {
    id: 'm-sand',
    name: 'M-Sand',
    category: 'Sand',
    shortDescription:
      'Reliable manufactured sand for construction requirements.',
    description:
      'Manufactured sand with controlled particle size for concrete, plastering, and masonry — a dependable alternative to river sand.',
    applications: [
      'Concrete',
      'Plastering',
      'Masonry',
      'Building construction',
    ],
    image: images.mSand,
  },
  {
    id: 'river-sand',
    name: 'River Sand',
    category: 'Sand',
    shortDescription:
      'Suitable sand supply for construction and building projects.',
    description:
      'Quality river sand for plastering, concrete, and general building applications with consistent supply support.',
    applications: [
      'Plastering',
      'Concrete',
      'Brickwork',
      'General construction',
    ],
    image: images.riverSand,
  },
  {
    id: 'cement',
    name: 'Cement',
    category: 'Cement',
    shortDescription:
      'Quality cement products for strong and durable construction.',
    description:
      'Reliable cement supply for residential, commercial, and infrastructure projects requiring strength and durability.',
    applications: [
      'RCC & PCC',
      'Masonry',
      'Plastering',
      'Commercial projects',
    ],
    image: images.cement,
  },
  {
    id: 'bricks',
    name: 'Bricks',
    category: 'Bricks',
    shortDescription:
      'Reliable construction bricks for building requirements.',
    description:
      'Durable construction bricks suited for walls, partitions, and general building applications with dependable availability.',
    applications: [
      'Wall construction',
      'Residential buildings',
      'Commercial structures',
      'Partition walls',
    ],
    image: images.bricks,
  },
];

export const materialCategories = [
  'All',
  'Aggregates',
  'Crusher Materials',
  'Sand',
  'Cement',
  'Bricks',
  'Other Materials',
];
