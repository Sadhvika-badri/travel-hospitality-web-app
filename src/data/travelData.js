// TravelEase Mock Database

export const destinations = [
  {
    id: 'goa',
    name: 'Goa',
    location: 'India',
    rating: 4.7,
    estimatedBudget: 800, // in USD for a standard 5-day trip
    travelTypes: ['family', 'solo', 'adventure'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    description: 'Renowned for its pristine beaches, vibrant nightlife, Portuguese heritage architecture, and delicious seafood.',
    longDescription: 'Goa is India\'s pocket-sized paradise on the southwest coast. It blends Indian culture with Portuguese colonial influences. From active water sports at Baga and Calangute beaches to the quiet, serene beaches of South Goa, there is something for every traveler.'
  },
  {
    id: 'jaipur',
    name: 'Jaipur',
    location: 'India',
    rating: 4.8,
    estimatedBudget: 700,
    travelTypes: ['family', 'solo'],
    image: '/jaipur_palace.png',
    description: 'The Pink City of India, famous for its magnificent palaces, historic forts, rich culture, and royal heritage.',
    longDescription: 'Jaipur is the capital of India\'s Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City, or "Pink City" for its trademark building color. At the heart of its stately street grid stands the opulent, colonnaded City Palace complex.'
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    location: 'India',
    rating: 4.5,
    estimatedBudget: 900,
    travelTypes: ['business', 'solo', 'family'],
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=800&q=80',
    description: 'The Silicon Valley of India, known for its beautiful parks, modern cafes, dynamic IT hubs, and pleasant weather.',
    longDescription: 'Bangalore (officially Bengaluru) is the capital of India\'s southern Karnataka state. The center of India\'s high-tech industry, the city is also known for its parks and nightlife. Lalbagh Botanical Garden has an iconic glasshouse, and Bangalore Palace resembles a Windsor Castle duplicate.'
  },
  {
    id: 'dubai',
    name: 'Dubai',
    location: 'UAE',
    rating: 4.9,
    estimatedBudget: 2800,
    travelTypes: ['family', 'adventure', 'business'],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80',
    description: 'A global luxury destination famous for futuristic architecture, high-end shopping malls, and desert safaris.',
    longDescription: 'Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music.'
  },
  {
    id: 'singapore',
    name: 'Singapore',
    location: 'Singapore',
    rating: 4.8,
    estimatedBudget: 3200,
    travelTypes: ['family', 'business', 'solo'],
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80',
    description: 'A pristine global hub featuring breathtaking botanical gardens, iconic resort skylines, and diverse gastronomy.',
    longDescription: 'Singapore, an island city-state off southern Malaysia, is a global financial center with a tropical climate and multicultural population. Its colonial core centers on the Padang, a cricket field since the 1830s and now flanked by grand buildings such as City Hall.'
  }
];

export const hotels = [
  {
    id: 'taj-goa',
    destinationId: 'goa',
    name: 'Taj Exotica Resort & Spa, Goa',
    location: 'Benaulim, Goa, India',
    stars: 5,
    pricePerNight: 280,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    amenities: ['Beachfront', 'Outdoor Pool', 'Luxury Spa', 'Free WiFi', 'Fitness Center', 'Kids Club'],
    featured: true
  },
  {
    id: 'leela-bangalore',
    destinationId: 'bangalore',
    name: 'The Leela Palace Bangalore',
    location: 'HAL Old Airport Road, Bangalore, India',
    stars: 5,
    pricePerNight: 240,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    amenities: ['Award-winning Dining', 'Outdoor Pool', 'Business Center', 'Free WiFi', 'Spa & Wellness'],
    featured: true
  },
  {
    id: 'atlantis-dubai',
    destinationId: 'dubai',
    name: 'Atlantis The Palm, Dubai',
    location: 'Palm Jumeirah, Dubai, UAE',
    stars: 5,
    pricePerNight: 450,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
    amenities: ['Private Beach', 'Aquaventure Waterpark', 'Underwater Suites', '16+ Restaurants', 'Luxury Shopping'],
    featured: true
  },
  {
    id: 'marina-bay-sands',
    destinationId: 'singapore',
    name: 'Marina Bay Sands, Singapore',
    location: '10 Bayfront Ave, Singapore',
    stars: 5,
    pricePerNight: 580,
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80',
    amenities: ['Infinity SkyPark Pool', 'World-Class Casino', 'Award-winning Dining', 'Direct Mall Access', 'Free WiFi'],
    featured: true
  },
  // Extra hotels for variety and search filtering
  {
    id: 'rambagh-palace',
    destinationId: 'jaipur',
    name: 'Rambagh Palace Jaipur',
    location: 'Bhawani Singh Road, Jaipur, India',
    stars: 5,
    pricePerNight: 350,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    amenities: ['Heritage Palace Tour', 'Royal Gardens', 'Indoor & Outdoor Pools', 'Free WiFi', 'Royal Butler Service'],
    featured: true
  },
  {
    id: 'goa-marriott',
    destinationId: 'goa',
    name: 'Goa Marriott Resort & Spa',
    location: 'Panaji, Goa, India',
    stars: 5,
    pricePerNight: 190,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    amenities: ['Bay Views', 'Casino', 'Outdoor Pool', 'Spa', 'Free Parking', 'Free WiFi'],
    featured: false
  },
  {
    id: 'radisson-jaipur',
    destinationId: 'jaipur',
    name: 'Radisson Blu Jaipur',
    location: 'Tonk Road, Jaipur, India',
    stars: 4,
    pricePerNight: 110,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    amenities: ['Rooftop Pool', 'Free WiFi', 'Fitness Center', 'Restaurant & Bar', 'Spa'],
    featured: false
  },
  {
    id: 'jw-marriott-blr',
    destinationId: 'bangalore',
    name: 'JW Marriott Hotel Bengaluru',
    location: 'Vittal Mallya Road, Bangalore, India',
    stars: 5,
    pricePerNight: 210,
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80',
    amenities: ['City Center', 'Outdoor Pool', 'Bespoke Spa', 'Free WiFi', 'Multiple Restaurants'],
    featured: false
  },
  {
    id: 'address-dubai',
    destinationId: 'dubai',
    name: 'Address Downtown Dubai',
    location: 'Downtown Dubai, Dubai, UAE',
    stars: 5,
    pricePerNight: 390,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
    amenities: ['Burj Khalifa Views', 'Infinity Pool', 'Direct Mall Access', 'Luxury Spa', 'Free WiFi'],
    featured: false
  },
  {
    id: 'pan-pacific-singapore',
    destinationId: 'singapore',
    name: 'Pan Pacific Singapore',
    location: 'Marina Square, Singapore',
    stars: 5,
    pricePerNight: 290,
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80',
    amenities: ['Harbour Views', 'Circular Swimming Pool', 'Free WiFi', 'Award-winning Dim Sum', 'Spa'],
    featured: false
  }
];

export const knowledgeCenter = {
  goa: {
    bestSeason: 'November to February (Pleasant winter, ideal for beaches and water sports)',
    avgBudget: '$50 - $120 per day (Depends on South vs North Goa, and luxury level)',
    attractions: [
      'Baga, Calangute, and Anjuna Beaches (North Goa for energy and nightlife)',
      'Palolem and Agonda Beaches (South Goa for peace and relaxation)',
      'Basilica of Bom Jesus (UNESCO World Heritage Site holding St. Francis Xavier\'s remains)',
      'Dudhsagar Falls (Stunning four-tiered waterfall on the Mandovi River)',
      'Spice Plantation Tour (Taste authentic Goan buffet and see local spices grown)'
    ],
    tips: [
      'Rent a two-wheeler (scooter/motorcycle) for cheap and easy commuting across narrow roads.',
      'Always negotiate cab fares in advance, or use government-backed taxi apps (Goamiles).',
      'Try the local cashew drink "Feni", but drink responsibly.',
      'South Goa is generally much cleaner, quieter, and has fewer crowds than North Goa.'
    ]
  },
  jaipur: {
    bestSeason: 'October to March (Cool, pleasant weather; ideal for sightseeing monuments)',
    avgBudget: '$40 - $100 per day (Very affordable street food and heritage stays)',
    attractions: [
      'Hawa Mahal (The Palace of Winds, featuring 953 small windows)',
      'Amber Fort (Majestic hilltop fort with stunning mirror-work in Sheesh Mahal)',
      'City Palace (The royal residence showcasing rich textiles and historic weapons)',
      'Jantar Mantar (The 18th-century astronomical observatory, a UNESCO site)',
      'Chokhi Dhani (Ethnic Rajasthani village experience with food and cultural dances)'
    ],
    tips: [
      'Buy a composite entry ticket to visit multiple monuments over two days at a discounted rate.',
      'Jaipur is a hub for gems, block print textiles, and blue pottery. Hire government-approved guides to avoid shopping scams.',
      'Visit Hawa Mahal early in the morning to capture the beautiful sunlight hitting the pink facade.',
      'Try the local delicacies: Dal Baati Churma, Pyaaz Kachori, and Lassi at Lassiwala.'
    ]
  },
  bangalore: {
    bestSeason: 'September to February (Mild weather, perfect for outdoors and exploration)',
    avgBudget: '$60 - $150 per day (Vibrant restaurant/pub prices are similar to western hubs)',
    attractions: [
      'Lalbagh Botanical Garden (Stunning green retreat featuring 1,000+ species of flora)',
      'Bangalore Palace (Windsor Castle-inspired royal palace with gorgeous interiors)',
      'Cubbon Park (Huge park ideal for walks and relaxation in the city center)',
      'Nandi Hills (Popular sunrise point located 60km outside the city)',
      'Indiranagar & Koramangala Pub Crawls (Explore microbreweries and dynamic cafes)'
    ],
    tips: [
      'Traffic in Bangalore is heavily congested. Utilize the Namma Metro transit system to save time.',
      'Bangalore is very safe for solo travelers, and English is widely spoken and understood.',
      'Check out local filter coffee at traditional spots like MTR (Mavalli Tiffin Room) or Vidyarthi Bhavan.',
      'Carry a light jacket or sweater, as evenings can get surprisingly cool.'
    ]
  },
  dubai: {
    bestSeason: 'November to March (Winter months with highly comfortable outdoor climates)',
    avgBudget: '$150 - $400 per day (Higher hotel prices, luxury lifestyle standards)',
    attractions: [
      'Burj Khalifa (The world\'s tallest skyscraper with observation decks)',
      'The Dubai Mall (One of the largest shopping malls globally, featuring an indoor aquarium)',
      'Desert Safari (Dune bashing, camel riding, and traditional dinner under the stars)',
      'Palm Jumeirah (Artificial archipelago containing luxury hotels and beach clubs)',
      'Dubai Marina Walk (Beautiful waterfront promenade lined with restaurants and yachts)'
    ],
    tips: [
      'Use the Dubai Metro; it is cheap, clean, air-conditioned, and connects to major sights.',
      'Respect local customs: dress modestly in malls and public zones, and avoid public displays of affection.',
      'Book attraction tickets online in advance to save up to 30% and skip massive ticketing queues.',
      'During Ramadan, eating/drinking in public during daylight hours is restricted, though hotels provide screened areas.'
    ]
  },
  singapore: {
    bestSeason: 'February to April (Slightly drier months, though tropical rain occurs year-round)',
    avgBudget: '$180 - $450 per day (High accommodations costs; food can be cheap at hawker centers)',
    attractions: [
      'Gardens by the Bay (Futuristic botanical gardens featuring Supertree structures and glass domes)',
      'Sentosa Island (Universal Studios, pristine beaches, and adventure parks)',
      'Marina Bay Sands SkyPark (Observation deck and high-end resort area)',
      'Changi Jewel (Iconic airport lifestyle destination featuring the world\'s tallest indoor waterfall)',
      'Singapore Botanic Gardens (UNESCO Heritage Site with a stunning national orchid garden)'
    ],
    tips: [
      'Save money on food by dining at Hawker Centers (Lau Pa Sat, Maxwell Road) for world-class, affordable Michelin-rated food.',
      'Do not litter, chew gum, or smoke in unauthorized areas; the country has extremely strict laws and steep fines.',
      'Get an EZ-Link card or use your contactless credit/debit card for easy transit on buses and MRT lines.',
      'Tap water is completely safe to drink, saving you from buying bottled water.'
    ]
  }
};

export const travelDeals = [
  {
    id: 'deal-singapore',
    title: 'Singapore Getaway Special',
    tagline: '15% Off Marina Bay Sands Bookings',
    validity: 'Valid till Aug 2026',
    code: 'EASESINGAPORE15'
  },
  {
    id: 'deal-rajasthan',
    title: 'Jaipur Cultural Tour Package',
    tagline: 'Stay 3 Nights, Pay for 2 + Free Heritage Tour',
    validity: 'Valid till Sep 2026',
    code: 'JAIPURROYAL'
  },
  {
    id: 'deal-dubai',
    title: 'Dubai Luxury Desert Escape',
    tagline: 'Complimentary Desert Safari & Burj Khalifa Tickets',
    validity: 'Valid till July 2026',
    code: 'DXBESCAPE'
  }
];

export const customerReviews = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    location: 'United Kingdom',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    comment: 'TravelEase made planning my solo trip to Singapore a breeze. The Knowledge Center tips were spot on and saved me a lot of money on transport and food!'
  },
  {
    id: 2,
    name: 'Rohan Sharma',
    location: 'Mumbai, India',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    comment: 'The dashboard helped us figure out the best season for Jaipur, and the hotel recommendation matching engine pointed us to Rambagh Palace. Best family vacation ever!'
  },
  {
    id: 3,
    name: 'Elena Rostova',
    location: 'Germany',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    comment: 'Very professional, straightforward booking UI. I booked Atlantis Dubai and got the complimentary desert safari. The interface is clean and super easy to navigate.'
  }
];
