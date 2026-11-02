export interface DetailingPackage {
  id: string;
  name: string;
  badge?: string;
  duration: string;
  priceDisplay: string;
  priceNote: string;
  description: string;
  features: string[];
  vehicleTypes: string[];
}

export const servicesData: DetailingPackage[] = [
  {
    id: 'full-detail',
    name: 'Showroom Full Detail',
    badge: 'Most Popular',
    duration: '2.5 – 3.5 Hours',
    priceDisplay: 'Custom Quote Available',
    priceNote: 'Quoted by vehicle size & condition (Sedan / Truck / SUV)',
    description: 'The complete bumper-to-bumper reset. High-pressure foam cannon hand wash, paint-safe clay decontamination, wheel/undercarriage scrub, plus full interior hot steam extraction, leather conditioning, and deep pet-hair removal.',
    features: [
      'Two-Bucket Grit Guard Hand Wash & Foam Cannon',
      'Wheel Barrels, Tires & Fender Wells Deep Cleaned',
      'Ceramic Sealant Paint Protection Finish',
      'Deep Carpet & Upholstery Shampoo Extraction',
      'Steam Sanitization on High-Touch Surfaces',
      'UV Protection on Dash, Console & Door Panels',
      'Crystal Streak-Free Glass Cleaning (Inside & Out)'
    ],
    vehicleTypes: ['Coupe', 'Sedan', 'SUV', 'Truck', 'Exotic']
  },
  {
    id: 'interior-deep',
    name: 'Interior Cabin Restoration',
    badge: 'Pet Hair Specialist',
    duration: '1.5 – 2.5 Hours',
    priceDisplay: 'Custom Quote Available',
    priceNote: 'Tailored for heavy use, kids, or pet hair buildup',
    description: 'Brings worn interiors back to fresh factory standard. Comprehensive hot water carpet extraction, heavy pet hair removal, leather conditioning, and stain lifting throughout cabin & trunk.',
    features: [
      'Thorough Compressed Air Blowout of All Crevices',
      'Deep Vacuuming of Seats, Floorboards & Trunk',
      'Specialized Pet Hair Removal Treatment',
      'Hot Water Soil & Spot Carpet Extraction',
      'Leather Cleaning & Hydrating Conditioner',
      'Matte Finish UV Interior Dressing (Non-Greasy)'
    ],
    vehicleTypes: ['Sedan', 'SUV', 'Truck', 'Minivan']
  },
  {
    id: 'exterior-foam',
    name: 'Exterior Foam & Gloss Protection',
    badge: 'Supercar Safe',
    duration: '1.0 – 1.5 Hours',
    priceDisplay: 'Custom Quote Available',
    priceNote: 'Quick maintenance wash with hydrophobic paint protection',
    description: 'Gentle pH-balanced thick foam bath that emulsifies road grime and dust without micro-scratching your clearcoat. Finished with tire dressing and a high-gloss spray sealant.',
    features: [
      'Pre-Wash Snow Foam Bath & Bug Decontamination',
      'Ultra-Plush Microfiber Scratch-Free Hand Wash',
      'Tire Scrub, Wheel Face & Barrel Iron Fallout Clean',
      'Satin Non-Sling Hydrophobic Tire Dressing',
      'Spray Ceramic Gloss Booster & Hydrophobic Shield'
    ],
    vehicleTypes: ['All Vehicles & Fleet Work']
  }
];

export const addOnServices = [
  { name: 'Intense Pet Hair Extraction', note: 'Heavy embedded fur elimination' },
  { name: 'Odor Elimination & Ozone Treatment', note: 'Neutralizes smoke & lingering smells' },
  { name: 'Engine Bay Detailing', note: 'Degreased, detailed & dressed safely' },
  { name: 'Headlight Oxidation Restoration', note: 'Wet sand, compound & UV clear seal' },
  { name: 'Ceramic Glass Rain Repellent', note: 'Superior wet weather visibility' },
];
