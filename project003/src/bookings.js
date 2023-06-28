db.bookings.drop()
db.bookings.insertMany([
    {
        _id: 1,
        customerID: "00001",
        checkinDate: ISODate("2022-01-14T12:00:00Z"),
        checkoutDate: ISODate("2022-01-19T12:00:00Z"),
        bookingDate: ISODate("2022-01-09T10:50:00Z"),
        rooms: [
            {
                class: "LX2",
                boardType: "Full Board",
                dailyBoardTax: 200
            },
            {
                class: "LX2",
                boardType: "Half Board",
                dailyBoardTax: 100
            }
        ],
        coupon: 0.05,
        atCharge: "Michaela Cross"
    },
    {
        _id: 2,
        customerID: "00002",
        checkinDate: ISODate("2022-01-18T12:00:00Z"),
        checkoutDate: ISODate("2022-01-20T12:00:00Z"),
        bookingDate: ISODate("2021-12-30T14:23:00Z"),
        rooms: [
            {
                class: "ST1A",
                boardType: "Only Room",
                dailyBoardTax: 0
            }
        ],
        coupon: 0,
        atCharge: "Taylor Frowst"
    },
    {
        _id: 3,
        customerID: "00003",
        checkinDate: ISODate("2022-01-18T12:00:00Z"),
        checkoutDate: ISODate("2022-01-25T12:00:00Z"),
        bookingDate: ISODate("2022-01-06T09:20:00Z"),
        rooms: [
            {
                class: "ST4B",
                boardType: "Full Board",
                dailyBoardTax: 400
            }
        ],
        coupon: 0.1,
        atCharge: "Waldo Owens"
    },
    {
        _id: 4,
        customerID: "00004",
        checkinDate: ISODate("2022-01-23T12:00:00Z"),
        checkoutDate: ISODate("2022-01-27T12:00:00Z"),
        bookingDate: ISODate("2022-01-22T19:26:00Z"),
        rooms: [
            {
                class: "ST1B",
                boardType: "Half Board",
                dailyBoardTax: 50
            },
            {
                class: "ST1A",
                boardType: "Bed & Breakfast",
                dailyBoardTax: 15
            }
        ],
        coupon: 0,
        atCharge: "Sonia Nevermind"
    },
    {
        _id: 5,
        customerID: "00005",
        checkinDate: ISODate("2022-01-28T12:00:00Z"),
        checkoutDate: ISODate("2022-02-03T12:00:00Z"),
        bookingDate: ISODate("2022-01-13T12:37:00Z"),
        rooms: [
            {
                class: "LX4",
                boardType: "Half Board",
                dailyBoardTax: 200
            }
        ],
        coupon: 0.05,
        atCharge: "Taylor Frowst"
    },
    {
        _id: 6,
        customerID: "00006",
        checkinDate: ISODate("2022-01-31T12:00:00Z"),
        checkoutDate: ISODate("2022-02-04T12:00:00Z"),
        bookingDate: ISODate("2022-01-30T16:34:00Z"),
        rooms: [
            {
                class: "PRESUITE",
                boardType: "Full Board",
                dailyBoardTax: 500
            }
        ],
        coupon: 0,
        atCharge: "Michaela Cross"
    },
    {
        _id: 7,
        customerID: "00007",
        checkinDate: ISODate("2022-02-02T12:00:00Z"),
        checkoutDate: ISODate("2022-02-06T12:00:00Z"),
        bookingDate: ISODate("2022-01-17T20:20:00Z"),
        rooms: [
            {
                class: "LX2",
                boardType: "Half Board",
                dailyBoardTax: 100
            },
            {
                class: "LX1",
                boardType: "Half Board",
                dailyBoardTax: 50
            }
        ],
        coupon: 0.05,
        atCharge: "Jane Godwin"
    },
    {
        _id: 8,
        customerID: "00008",
        checkinDate: ISODate("2022-02-03T12:00:00Z"),
        checkoutDate: ISODate("2022-02-15T12:00:00Z"),
        bookingDate: ISODate("2022-02-01T12:00:00Z"),
        rooms: [
            {
                class: "ST1B",
                boardType: "Bed & Breakfast",
                dailyBoardTax: 15
            }
        ],
        coupon: 0,
        atCharge: "Waldo Owens"
    },
    {
        _id: 9,
        customerID: "00009",
        checkinDate: ISODate("2022-02-04T12:00:00Z"),
        checkoutDate: ISODate("2022-02-06T12:00:00Z"),
        bookingDate: ISODate("2022-01-28T15:23:00Z"),
        rooms: [
            {
                class: "LX2",
                boardType: "Full Board",
                dailyBoardTax: 200
            }
        ],
        coupon: 0,
        atCharge: "Jane Godwin"
    },
    {
        _id: 10,
        customerID: "00010",
        checkinDate: ISODate("2022-02-04T12:00:00Z"),
        checkoutDate: ISODate("2022-02-09T12:00:00Z"),
        bookingDate: ISODate("2022-02-01T07:50:00Z"),
        rooms: [
            {
                class: "PRESUITE",
                boardType: "Full Board",
                dailyBoardTax: 500
            }
        ],
        coupon: 0.05,
        atCharge: "Sonia Nevermind"
    },
    {
        _id: 11,
        customerID: "00011",
        checkinDate: ISODate("2022-02-05T12:00:00Z"),
        checkoutDate: ISODate("2022-02-08T12:00:00Z"),
        bookingDate: ISODate("2022-01-19T08:00:00Z"),
        rooms: [
            {
                class: "ST2A",
                boardType: "Bed & Breakfast",
                dailyBoardTax: 30
            }
        ],
        coupon: 0,
        atCharge: "Taylor Frowst"
    },
    {
        _id: 12,
        customerID: "00012",
        checkinDate: ISODate("2022-02-11T12:00:00Z"),
        checkoutDate: ISODate("2022-02-18T12:00:00Z"),
        bookingDate: ISODate("2022-02-09T18:30:00Z"),
        rooms: [
            {
                class: "LX1",
                boardType: "Full Board",
                dailyBoardTax: 100
            },
            {
                class: "ST4B",
                boardType: "Half Board",
                dailyBoardTax: 200
            }
        ],
        coupon: 0.2,
        atCharge: "Jane Godwin"
    },
    {
        _id: 13,
        customerID: "00013",
        checkinDate: ISODate("2022-02-11T12:00:00Z"),
        checkoutDate: ISODate("2022-02-16T12:00:00Z"),
        bookingDate: ISODate("2022-02-03T13:23:00Z"),
        rooms: [
            {
                class: "ST4B",
                boardType: "Only Room",
                dailyBoardTax: 0
            }
        ],
        coupon: 0,
        atCharge: "Waldo Owens"
    },
    {
        _id: 14,
        customerID: "00014",
        checkinDate: ISODate("2022-02-14T12:00:00Z"),
        checkoutDate: ISODate("2022-02-21T12:00:00Z"),
        bookingDate: ISODate("2022-02-02T23:12:00Z"),
        rooms: [
            {
                class: "LX1",
                boardType: "Bed & Breakfast",
                dailyBoardTax: 15
            }
        ],
        coupon: 0.05,
        atCharge: "Michaela Cross"
    },
    {
        _id: 15,
        customerID: "00015",
        checkinDate: ISODate("2022-02-19T12:00:00Z"),
        checkoutDate: ISODate("2022-02-20T12:00:00Z"),
        bookingDate: ISODate("2022-02-12T21:30:00Z"),
        rooms: [
            {
                class: "ST2A",
                boardType: "Only Room",
                dailyBoardTax: 0
            }
        ],
        coupon: 0.2,
        atCharge: "Sonia Nevermind"
    },
    {
        _id: 16,
        customerID: "00016",
        checkinDate: ISODate("2022-02-21T12:00:00Z"),
        checkoutDate: ISODate("2022-03-03T12:00:00Z"),
        bookingDate: ISODate("2022-02-13T13:13:00Z"),
        rooms: [
            {
                class: "ST2B",
                boardType: "Half Board",
                dailyBoardTax: 100
            }
        ],
        coupon: 0,
        atCharge: "Waldo Owens"
    },
    {
        _id: 17,
        customerID: "00017",
        checkinDate: ISODate("2022-02-23T12:00:00Z"),
        checkoutDate: ISODate("2022-02-26T12:00:00Z"),
        bookingDate: ISODate("2022-02-16T14:50:00Z"),
        rooms: [
            {
                class: "ST2A",
                boardType: "Bed & Breakfast",
                dailyBoardTax: 30
            },
            {
                class: "ST1A",
                boardType: "Bed & Breakfast",
                dailyBoardTax: 15
            }
        ],
        coupon: 0,
        atCharge: "Waldo Owens"
    },
    {
        _id: 18,
        customerID: "00018",
        checkinDate: ISODate("2022-03-02T12:00:00Z"),
        checkoutDate: ISODate("2022-03-11T12:00:00Z"),
        bookingDate: ISODate("2022-02-21T01:33:00Z"),
        rooms: [
            {
                class: "PRESUITE",
                boardType: "Half Board",
                dailyBoardTax: 250
            }
        ],
        coupon: 0,
        atCharge: "Michaela Cross"
    },
    {
        _id: 19,
        customerID: "00019",
        checkinDate: ISODate("2022-03-10T12:00:00Z"),
        checkoutDate: ISODate("2022-03-13T12:00:00Z"),
        bookingDate: ISODate("2022-02-21T13:40:00Z"),
        rooms: [
            {
                class: "LX1",
                boardType: "Only Room",
                dailyBoardTax: 0
            }
        ],
        coupon: 0.1,
        atCharge: "Taylor Frowst"
    },
    {
        _id: 20,
        customerID: "00020",
        checkinDate: ISODate("2022-03-14T12:00:00Z"),
        checkoutDate: ISODate("2022-03-20T12:00:00Z"),
        bookingDate: ISODate("2022-03-03T23:10:00Z"),
        rooms: [
            {
                class: "LX2",
                boardType: "Full Board",
                dailyBoardTax: 200
            }
        ],
        coupon: 0,
        atCharge: "Jane Godwin"
    },
    {
        _id: 21,
        customerID: "00021",
        checkinDate: ISODate("2022-03-18T12:00:00Z"),
        checkoutDate: ISODate("2022-03-25T12:00:00Z"),
        bookingDate: ISODate("2022-03-02T12:00:00Z"),
        rooms: [
            {
                class: "ST1A",
                boardType: "Half Board",
                dailyBoardTax: 50
            },
            {
                class: "ST1B",
                boardType: "Half Board",
                dailyBoardTax: 50
            },
            {
                class: "ST1A",
                boardType: "Half Board",
                dailyBoardTax: 50
            }
        ],
        coupon: 0,
        atCharge: "Waldo Owens"
    },
    {
        _id: 22,
        customerID: "00022",
        checkinDate: ISODate("2022-03-21T12:00:00Z"),
        checkoutDate: ISODate("2022-03-24T12:00:00Z"),
        bookingDate: ISODate("2022-02-29T12:00:00Z"),
        rooms: [
            {
                class: "ST2A",
                boardType: "Bed & Breakfast",
                dailyBoardTax: 30
            }
        ],
        coupon: 0,
        atCharge: "Michaela Cross"
    },
    {
        _id: 23,
        customerID: "00023",
        checkinDate: ISODate("2022-03-23T12:00:00Z"),
        checkoutDate: ISODate("2022-03-26T12:00:00Z"),
        bookingDate: ISODate("2022-02-22T12:00:00Z"),
        rooms: [
            {
                class: "ST1B",
                boardType: "Bed & Breakfast",
                dailyBoardTax: 15
            }
        ],
        coupon: 0.05,
        atCharge: "Sonia Nevermind"
    },
    {
        _id: 24,
        customerID: "00024",
        checkinDate: ISODate("2022-03-25T12:00:00Z"),
        checkoutDate: ISODate("2022-03-27T12:00:00Z"),
        bookingDate: ISODate("2022-03-02T12:00:00Z"),
        rooms: [
            {
                class: "ST1B",
                boardType: "Half Board",
                dailyBoardTax: 50
            }
        ],
        coupon: 0,
        atCharge: "Jane Godwin"
    },
    {
        _id: 25,
        customerID: "00025",
        checkinDate: ISODate("2022-03-28T12:00:00Z"),
        checkoutDate: ISODate("2022-04-01T12:00:00Z"),
        bookingDate: ISODate("2022-03-04T12:00:00Z"),
        rooms: [
            {
                class: "LX4",
                boardType: "Full Board",
                dailyBoardTax: 400
            }
        ],
        coupon: 0,
        atCharge: "Taylor Frowst"
    },
    {
        _id: 26,
        customerID: "00026",
        checkinDate: ISODate("2022-03-28T12:00:00Z"),
        checkoutDate: ISODate("2022-04-03T12:00:00Z"),
        bookingDate: ISODate("2022-03-12T12:00:00Z"),
        rooms: [
            {
                class: "LX4",
                boardType: "Half Board",
                dailyBoardTax: 200
            }
        ],
        coupon: 0,
        atCharge: "Waldo Owens"
    },
    {
        _id: 27,
        customerID: "00027",
        checkinDate: ISODate("2022-03-29T12:00:00Z"),
        checkoutDate: ISODate("2022-03-30T12:00:00Z"),
        bookingDate: ISODate("2022-03-11T12:00:00Z"),
        rooms: [
            {
                class: "ST2B",
                boardType: "Half Board",
                dailyBoardTax: 100
            }
        ],
        coupon: 0.3,
        atCharge: "Sonia Nevermind"
    }
])