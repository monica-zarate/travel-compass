export function getTrips() {
  return TRIPSDATA;
}

export function getTripById(id) {
  return TRIPSDATA.find((item) => item.id === id);
}

export function getTripSchedule() {
  return SCHEDULEDATA;
}

export function getActivities() {
  return ACTIVITIESDATA;
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

export const SCHEDULEDATA = [
  {
    id: "001",
    day: 1,
    title: "YYZ – YVR",
    description: "Air Canada AC103",
    time: "10 am – 12 pm",
    duration: "5 hrs",
    address: "",
    icon: require("../assets/icons/transportation-icon-dark.png"),
  },
  {
    id: "002",
    day: 1,
    title: "Hotel Shuttle",
    description: "Fairmont Chateau Whistler ",
    time: "1 pm – 3:30 pm",
    duration: "2.5 hrs",
    address: "",
    icon: require("../assets/icons/accommodation-icon-dark.png"),
  },
  {
    id: "003",
    day: 1,
    title: "Fairmont Chateau Whistler",
    description: "Check-in 4 pm",
    time: "",
    duration: "",
    address: "4599 Chateau Blvd.",
    icon: require("../assets/icons/accommodation-icon-dark.png"),
  },
  {
    id: "004",
    day: 1,
    title: "Dinner",
    description: "The Grill Room – 6 pm",
    time: "",
    duration: "",
    address: "4599 Chateau Blvd.",
    icon: require("../assets/icons/food-icon-dark.png"),
  },
  {
    id: "005",
    day: 2,
    title: "Breakfast",
    description: "Portobello – 8 am",
    time: "",
    duration: "",
    address: "4599 Chateau Blvd.",
    icon: require("../assets/icons/food-icon-dark.png"),
  },
  {
    id: "006",
    day: 2,
    title: "Ski Lesson",
    description: "Whistler Blackcomb Snow School",
    time: "9:45 am – 3 pm",
    duration: "5.5 hrs",
    address: "",
    icon: require("../assets/icons/activities-icon-dark.png"),
  },
  {
    id: "007",
    day: 2,
    title: "Dinner",
    description: "Il Caminetto – 5 pm",
    time: "",
    duration: "",
    address: "4242 Village Stroll",
    icon: require("../assets/icons/food-icon-dark.png"),
  },
  {
    id: "008",
    day: 3,
    title: "Breakfast",
    description: "Gone Village Eatery – 8 am",
    time: "",
    duration: "",
    address: "4205 Village Square",
    icon: require("../assets/icons/food-icon-dark.png"),
  },
  {
    id: "009",
    day: 3,
    title: "Peak 2 Peak Gondola",
    description: "Whistler Village",
    time: "10 am – 12 pm",
    duration: "2 hrs",
    address: "",
    icon: require("../assets/icons/activities-icon-dark.png"),
  },
  {
    id: "010",
    day: 3,
    title: "Lunch",
    description: "Roundhouse Lodge",
    time: "12:30 pm",
    duration: "",
    address: "4545 Blackcomb Way",
    icon: require("../assets/icons/food-icon-dark.png"),
  },
  {
    id: "011",
    day: 3,
    title: "Whistler Olympic Plaza",
    description: "Whistler Village",
    time: "3 pm – 5:30 pm",
    duration: "2.5 hrs",
    address: "",
    icon: require("../assets/icons/activities-icon-dark.png"),
  },
  {
    id: "012",
    day: 4,
    title: "Dinner",
    description: "Red Door Bistro – 6:30 pm",
    time: "",
    duration: "",
    address: "2129 Lake Placid Rd C",
    icon: require("../assets/icons/food-icon-dark.png"),
  },
];

export const ACTIVITIESDATA = [
  {
    id: "001",
    name: "Flights",
    icon: require("../assets/icons/transportation-icon.png"),
  },
  {
    id: "002",
    name: "Hotel",
    icon: require("../assets/icons/accommodation-icon.png"),
  },
  {
    id: "003",
    name: "Activities",
    icon: require("../assets/icons/activities-icon.png"),
  },
  {
    id: "004",
    name: "Food",
    icon: require("../assets/icons/food-icon.png"),
  },
];
