export function getTrips() {
  return TRIPSDATA;
}

export function getTripById(id) {
  return TRIPSDATA.find((item) => item.id === id);
}

export const TRIPSDATA = [
  {
    id: "001",
    name: "Ski Trip",
    dates: "Jan 6th – Jan 12th",
    location: "Whistler, CA",
    image: require("../assets/whistler.png"),
    isActive: true,
  },
  {
    id: "002",
    name: "Family Cruise",
    dates: "Mar 7th – Mar 15th",
    location: "Anchorage, AK",
    image: require("../assets/anchorage.png"),
    isActive: false,
  },
  {
    id: "003",
    name: "Yoga Retreat",
    dates: "Jun 24th – Jul 19th",
    location: "Chiang Main, TH",
    image: require("../assets/chiang-mai.png"),
    isActive: false,
  },
];

export const SCHEDULE = [
  {
    id: "001",
    day: "Saturday, January 7th",
    activities: [
      {
        title: "YYZ – YVR",
        description: "Air Canada AC103",
        time: "10 am – 12 pm",
        duration: "5 hrs",
        address: "",
        icon: require("../assets/icons/transportation-icon-dark.png"),
      },
      {
        title: "Hotel Shuttle",
        description: "Fairmont Chateau Whistler ",
        time: "1 pm – 3:30 pm",
        duration: "2.5 hrs",
        address: "",
        icon: require("../assets/icons/accommodation-icon-dark.png"),
      },
      {
        title: "Fairmont Chateau Whistler",
        description: "Check-in 4 pm",
        time: "",
        duration: "",
        address: "4599 Chateau Blvd.",
        icon: require("../assets/icons/accommodation-icon-dark.png"),
      },
      {
        title: "Dinner",
        description: "The Grill Room – 6 pm",
        time: "",
        duration: "",
        address: "4599 Chateau Blvd.",
        icon: require("../assets/icons/food-icon-dark.png"),
      },
    ],
  },
  {
    id: "002",
    day: "Sunday, January 8th",
    activities: [
      {
        title: "Breakfast",
        description: "Portobello – 8 am",
        time: "",
        duration: "",
        address: "4599 Chateau Blvd.",
        icon: require("../assets/icons/food-icon-dark.png"),
      },
      {
        title: "Ski Lesson",
        description: "Whistler Blackcomb Snow School",
        time: "9:45 am – 3 pm",
        duration: "5.5 hrs",
        address: "",
        icon: require("../assets/icons/activities-icon-dark.png"),
      },
      {
        title: "Dinner",
        description: "Il Caminetto – 5 pm",
        time: "",
        duration: "",
        address: "4242 Village Stroll",
        icon: require("../assets/icons/food-icon-dark.png"),
      },
    ],
  },
  {
    id: "003",
    day: "Monday, January 9th",
    activities: [
      {
        title: "Breakfast",
        description: "Gone Village Eatery – 8 am",
        time: "",
        duration: "",
        address: "4205 Village Square",
        icon: require("../assets/icons/food-icon-dark.png"),
      },
      {
        title: "Peak 2 Peak Gondola",
        description: "Whistler Village",
        time: "10 am – 12 pm",
        duration: "2 hrs",
        address: "",
        icon: require("../assets/icons/activities-icon-dark.png"),
      },
      {
        title: "Lunch",
        description: "Roundhouse Lodge",
        time: "12:30 pm",
        duration: "",
        address: "4545 Blackcomb Way",
        icon: require("../assets/icons/food-icon-dark.png"),
      },
      {
        title: "Whistler Olympic Plaza",
        description: "Whistler Village",
        time: "3 pm – 5:30 pm",
        duration: "2.5 hrs",
        address: "",
        icon: require("../assets/icons/activities-icon-dark.png"),
      },
      {
        title: "Dinner",
        description: "Red Door Bistro – 6:30 pm",
        time: "",
        duration: "",
        address: "2129 Lake Placid Rd C",
        icon: require("../assets/icons/food-icon-dark.png"),
      },
    ],
  },
];
