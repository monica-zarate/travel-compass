export function getTrips() {
    return TRIPSDATA;
}

export function getTripById(id) {
    return TRIPSDATA.find(item => item.id === id);
}

export const TRIPSDATA = [
    {
        id: '001',
        name: 'Ski Trip',
        dates: 'Jan 6th – Jan 12th',
        location: 'Whistler, CA',
        image: require('../assets/bg-placeholder.jpeg'),
        isActive: true,
    },
    {
        id: '002',
        name: 'Family Cruise',
        dates: 'Mar 7th – Mar 15th',
        location: 'Anchorage, AK',
        image: require('../assets/bg-placeholder.jpeg'),
        isActive: false,
    },
    {
        id: '003',
        name: 'Yoga Retreat',
        dates: 'Jun 24th – Jul 19th',
        location: 'Chiang Main, TH',
        image: require('../assets/bg-placeholder.jpeg'),
        isActive: false,
    },
];