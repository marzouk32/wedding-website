const base = import.meta.env.BASE_URL;

export const siteConfig = {
  couple: {
    partner1: "Seif",
    partner2: "Salma",
    hashtag: "#SeifAndSalma2026",
  },

  weddingDate: "2026-04-17T18:00:00",

  hero: {
    backgroundImage: `${base}images/hero-bg.jpeg`,
    backgroundImageFallback: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
    subtitle: "Together with their families",
    dateDisplay: "Friday, April 17, 2026",
  },

  events: [
    {
      name: "Wedding Ceremony",
      date: "Friday, April 17, 2026",
      time: "6:00 PM",
      venue: "Casa Maria, Orabi",
      address: "Orabi, Egypt",
      description:
        "Join us as we exchange our vows and begin our journey together as one.",
    },
    {
      name: "Reception & Dinner",
      date: "Friday, April 17, 2026",
      time: "8:00 PM",
      venue: "Casa Maria, Orabi",
      address: "Orabi, Egypt",
      description:
        "An evening of dinner, dancing, and celebration with our loved ones.",
    },
  ],

  dressCode: "Formal Attire / Soirée",

  adultsOnly:
    "We love your little ones, but let them have a good night",

  venue: {
    name: "Casa Maria",
    address: "Orabi, Egypt",
    caption: "",
    backgroundImage: `${base}images/venue-bg.jpg`,
    mapLink: "https://maps.app.goo.gl/BPbsjp5DbWFUJCjbA?g_st=iw",
    directions:
      "Located in the heart of Cairo, easily accessible from all major highways. Valet parking is available at the main entrance.",
  },

  nav: [
    { label: "Home", href: "#hero" },
    { label: "Details", href: "#details" },
    { label: "RSVP", href: "#rsvp" },
    { label: "Venue", href: "#venue" },
  ],
};
