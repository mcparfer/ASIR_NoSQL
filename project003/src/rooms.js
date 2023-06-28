db.rooms.drop()
db.rooms.insertMany([
    {
        _id: "ST1A",
        description: "Standart",
        roomsQty: 20,
        maxCapacity: 1,
        dailyPrice: 30,
        tv: false
    },
    {
        _id: "ST1B",
        description: "Standart",
        roomsQty: 50,
        maxCapacity: 1,
        dailyPrice: 35,
        tv: true
    },
    {
        _id: "ST2A",
        description: "Standart",
        roomsQty: 50,
        maxCapacity: 2,
        dailyPrice: 45,
        tv: false
    },
    {
        _id: "ST2B",
        description: "Standart",
        roomsQty: 100,
        maxCapacity: 2,
        dailyPrice: 55,
        tv: true
    },
    {
        _id: "SS4A",
        description: "Standart",
        roomsQty: 50,
        maxCapacity: 4,
        dailyPrice: 70,
        tv: false
    },
    {
        _id: "ST4B",
        description: "Standart",
        roomsQty: 100,
        maxCapacity: 4,
        dailyPrice: 90,
        tv: true
    },
    {
        _id: "LX1",
        description: "Luxury",
        roomsQty: 100,
        maxCapacity: 1,
        dailyPrice: 120,
        tv: true
    },
    {
        _id: "LX2",
        description: "Luxury",
        roomsQty: 150,
        maxCapacity: 2,
        dailyPrice: 160,
        tv: true
    },
    {
        _id: "LX4",
        description: "Luxury",
        roomsQty: 100,
        maxCapacity: 2,
        dailyPrice: 220,
        tv: true
    },
    {
        _id: "PRESUITE",
        description: "Presidential Suite",
        roomsQty: 5,
        maxCapacity: 4,
        dailyPrice: 450,
        tv: true
    }
])