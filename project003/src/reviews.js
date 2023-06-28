db.reviews.drop()
db.reviews.insertMany([
    {
        _id: "R2022N00001",
        bookingID: 1,
        customerID: "00001",
        satisfaction: 9,
        tags: ["average price", "entertaining", "clean", "excellent restaurant"]
    },
    {
        _id: "R2022N00002",
        bookingID: 2,
        customerID: "00002",
        satisfaction: 6,
        tags: ["cheap", "average service", "dirty"]
    },
    {
        _id: "R2022N00003",
        bookingID: 3,
        customerID: "00003",
        satisfaction: 7,
        tags: ["expensive", "good service", "excellent restaurant", "kinda boring"]
    },
    {
        _id: "R2022N00004",
        bookingID: 4,
        customerID: "00004",
        satisfaction: 10,
        tags: ["cheap", "good service", "clean", "entertaining"]
    },
    {
        _id: "R2022N00005",
        bookingID: 5,
        customerID: "00005",
        satisfaction: 10,
        tags: ["average price", "good service", "clean", "average restaurant", "kinda boring"]
    },
    {
        _id: "R2022N00006",
        bookingID: 6,
        customerID: "00006",
        satisfaction: 6,
        tags: ["cheap", "average restaurant", "boring"]
    },
    {
        _id: "R2022N00007",
        bookingID: 7,
        customerID: "00007",
        satisfaction: 8,
        tags: ["cheap", "excellent restaurant", "clean"]
    },
    {
        _id: "R2022N00008",
        bookingID: 8,
        customerID: "00008",
        satisfaction: 4,
        tags: ["average price", "average restaurant", "average service", "dirty"]
    },
    {
        _id: "R2022N00009",
        bookingID: 9,
        customerID: "00009",
        satisfaction: 7,
        tags: ["expensive", "excellent restaurant", "good service"]
    },
    {
        _id: "R2022N00010",
        bookingID: 10,
        customerID: "00010",
        satisfaction: 7,
        tags: ["average price", "clean", "good service"]
    },
    {
        _id: "R2022N00011",
        bookingID: 11,
        customerID: "00011",
        satisfaction: 10,
        tags: ["cheap", "clean", "entertaining"]
    },
    {
        _id: "R2022N00012",
        bookingID: 12,
        customerID: "00012",
        satisfaction: 8,
        tags: ["average price", "good service", "clean", "kinda boring"]
    },
    {
        _id: "R2022N00013",
        bookingID: 13,
        customerID: "00013",
        satisfaction: 3,
        tags: ["average price", "bad service", "dirty", "kinda boring"]
    }
])