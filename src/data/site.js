// Single source of truth for business details. Edit here and the whole site updates.
export const SITE = {
  name: 'SUPREME SOLAR',
  tagline: 'Solar Hot Water System Supplier',
  location: 'Gokul Road, Hubballi',
  phone: '+91 91132 21435',
  phoneHref: 'tel:+919113221435',
  email: 'harishaj68@gmail.com',
  whatsappNumber: '919113221435',
  addressLines: 'Shop No-102, Kottilingnagar, Near Heregoudr Hospital, Gokul Road, Hubballi, Karnataka – 580030',
  addressShort: 'Shop No-102, Kottilingnagar, Near Heregoudr Hospital, Gokul Road, Hubballi – 580030',
  hours: 'Monday – Sunday, 9:00 AM – 8:30 PM',
  description:
    'SUPREME SOLAR provides solar water heaters, heat pump water heaters, solar panels, solar accessories, solar lighting, installation and maintenance services in Hubballi.',
  categories: ['Solar Water Heaters', 'Heat Pump Water Heaters', 'Solar Panels', 'Solar Accessories', 'Solar Lighting', 'Installation & Maintenance'],
  // Rating was supplied earlier but must be verified on Google before showing.
  // Set verified: true once you have confirmed the current figures on Google Maps.
  rating: { value: '4.8', count: '147+', verified: false },
  // Shared Google Maps link for the shop (used for directions and reviews).
  mapsUrl: 'https://maps.app.goo.gl/tFCy2k1hxc5zKzdPA?g_st=awb',
  googleReviewsUrl: 'https://maps.app.goo.gl/tFCy2k1hxc5zKzdPA?g_st=awb',
  // Built from the address so it always opens Google Maps directions (no short link needed).
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=' +
    encodeURIComponent('Supreme Solar, Shop No-102, Kottilingnagar, Near Heregoudr Hospital, Gokul Road, Hubballi, Karnataka 580030'),
  // Embedded map is found by address (no API key needed).
  mapEmbedUrl:
    'https://www.google.com/maps?q=' +
    encodeURIComponent('Supreme Solar, Shop No-102, Kottilingnagar, Near Heregoudr Hospital, Gokul Road, Hubballi, Karnataka 580030') +
    '&output=embed',
}

export const waLink = (message) =>
  `https://wa.me/${SITE.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`

export const productMessage = (name) =>
  `Hello SUPREME SOLAR, I am interested in ${name}. Please share the details and pricing.`
