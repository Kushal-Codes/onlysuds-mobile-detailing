export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  sourceUrl: string;
  sourceName: string;
  description: string;
  tags: string[];
}

export const galleryData: GalleryItem[] = [
  {
    id: 'onlysuds-showcase-01',
    title: 'Showroom Finish in Austin',
    category: 'Full Mobile Detail',
    imageUrl: '/images/real/onlysuds_showcase.jpg',
    sourceUrl: 'https://www.facebook.com/p/OnlySuds-Mobile-Detailing-61576875933300/',
    sourceName: 'OnlySuds Mobile Detailing Official Facebook Portfolio',
    description: 'Actual mobile detailing transformation delivered directly to customer driveway in Austin, Texas.',
    tags: ['Austin TX', 'Driveway Service', 'Showroom Shine']
  },
  {
    id: 'onlysuds-showcase-02',
    title: 'Wheel & Tire Precision Restoration',
    category: 'Exterior Detail',
    imageUrl: '/images/real/onlysuds_wheel_detail.jpg',
    sourceUrl: 'https://www.facebook.com/p/OnlySuds-Mobile-Detailing-61576875933300/',
    sourceName: 'OnlySuds Mobile Detailing Official Facebook Portfolio',
    description: 'Deep brake dust removal, tire dressing, and rim decontamination.',
    tags: ['Decontamination', 'Ceramic Seal', 'Wheel Detail']
  },
  {
    id: 'onlysuds-showcase-03',
    title: 'Paint Correction & High-Gloss Reflection',
    category: 'Paint Protection',
    imageUrl: '/images/real/onlysuds_after.jpg',
    sourceUrl: 'https://www.facebook.com/p/OnlySuds-Mobile-Detailing-61576875933300/',
    sourceName: 'OnlySuds Mobile Detailing Official Facebook Portfolio',
    description: 'Swirl mark reduction and mirror-like glossy clear coat finish.',
    tags: ['Paint Correction', 'Gloss Reflection', 'Mirror Finish']
  }
];

export const reviewsData = [
  {
    id: 'rev-01',
    author: 'Cody R.',
    location: 'Austin, TX',
    rating: 5,
    text: 'Brice did an unbelievable job on my truck! I have two Golden Retrievers and thought the dog hair was permanently embedded into the seats. He got every single hair out and the paint looks like liquid glass. Having him come straight to the house makes it 100x easier than dropping it off at a shop.'
  },
  {
    id: 'rev-02',
    author: 'Jessica M.',
    location: 'Round Rock / Austin',
    rating: 5,
    text: 'Best mobile detailing experience in Austin. Communicated promptly via text, arrived on time, and spent nearly 3 hours obsessing over the details. The foam wash and ceramic seal made my black SUV shine like the day I bought it.'
  },
  {
    id: 'rev-03',
    author: 'David L.',
    location: 'North Austin',
    rating: 5,
    text: 'Top notch service and great prices for high-end mobile car care. Brice brought all his own gear, was super respectful of the driveway, and left the cabin smelling brand new. Highly recommend OnlySuds!'
  }
];
