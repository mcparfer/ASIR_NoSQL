/* We would like to know the hotel maximum capacity.  */

db.rooms.aggregate([
    {
        $project: {
            _id: 1,
            maxByClass: {
                $multiply: ["$maxCapacity", "$roomsQty"]
            }
        }
    },
    {
        $group: {
            _id: null,
            maxCustomers: {
                $sum: "$maxByClass"
            }
        }
    }
])


/* With our review system, customers can choose between 
different tags to describe their stay at our hotel. 
We would like to know the five most repeated tags, as well
as the number of times used. */

db.reviews.aggregate([
    {
        $unwind: "$tags"
    },
    {
        $group: {
            _id: "$tags",
            tagRepetitions: { $sum: 1 }
        }
    },
    {
        $sort: { tagRepetitions: -1 }
    },
    {
        $limit: 5
    }
])


/* After several decades open, our hotel has decided
to change all the televisions in the hotel. For
"Standart" rooms, the new tv's budget will be 100 euros;
for "Luxury" rooms, 200 euros; and for the Presidential
Suite, 600 euros. Estimate the total budget. */

db.rooms.aggregate([
    {
        $match: { tv: true }
    },
    {
        $project: {
            _id: 1,
            roomsQty: 1,
            tvCost: {
                $switch: {
                    branches: [
                        {
                            case: { $eq: ["$description", "Standart"] },
                            then: 100
                        },
                        {
                            case: { $eq: ["$description", "Luxury"] },
                            then: 200
                        },
                        {
                            case: { $eq: ["$description", "Presidential Suite"] },
                            then: 400
                        },
                    ]
                }
            }
        }
    },
    {
        $project: {
            _id: 1,
            subTotalBudget: {
                $multiply: ["$roomsQty", "$tvCost"]
            }
        }
    },
    {
        $group: {
            _id: null,
            totalBudget: { $sum: "$subTotalBudget" }
        }
    }
])


/* The hotel is analyzing its employees' performance. 
We would like to know the average customers' satisfaction 
with our employees and rank them according to the results. */

db.reviews.aggregate([
    {
        $lookup: {
            from: "bookings",
            localField: "bookingID",
            foreignField: "_id",
            as: "bookingsArray"
        }
    },
    {
        $addFields: {
            bookingsData: {
                $arrayElemAt: ["$bookingsArray", 0]
            }
        }
    },
    {
        $group: {
            _id: "$bookingsData.atCharge",
            avgSatisf: { $avg: "$satisfaction" }
        }
    },
    {
        $project: {
            _id: 0,
            employee: "$_id",
            avgSatisf: { $round: ["$avgSatisf", 1] },
            summary:
            {
                $switch:
                {
                    branches: [
                        {
                            case: { $gte: ["$avgSatisf", 8] },
                            then: "Great!"
                        },
                        {
                            case: {
                                $and: [
                                    { $gte: ["$avgSatisf", 5] },
                                    { $lt: ["$avgSatisf", 8] }
                                ]
                            },
                            then: "Not bad."
                        },
                        {
                            case: { $lt: ["$avgSatisf", 5] },
                            then: "FIRED"
                        }
                    ]
                }
            }
        }
    }
])


/* This March 2022, our hotel is turning 50 years old. 
For our anniversary, the hotel is raffling 50.000 euros 
among some of our customers. To enter the drawing, 
the customers must at least meet one of these requirements:

    - At least one of the clients registered 
    in the booking must be 50 years old.

    - The contact phone number contains the number 50.

This draw is only valid for those clients who have 
stayed or have made their booking between March 1 and 31. 
We will need the participants' contact names and phones.*/

db.customers.aggregate([
    {
        $unwind: "$data"
    },
    {
        $match: {
            $or: [
                { $expr: { $eq: ["$data.age", 50] } },
                { contactPhone: { $regex: "50" } }
            ]
        }
    },
    {
        $group:
        {
            _id: {
                _id: "$_id",
                contactName: "$contactName",
                contactPhone: "$contactPhone"
            },
            data: { $addToSet: "$data" }
        }
    },
    {
        $lookup: {
            from: "bookings",
            localField: "_id._id",
            foreignField: "customerID",
            as: "bookingsArray"
        }
    },
    {
        $addFields: {
            bookingsData: {
                $arrayElemAt: ["$bookingsArray", 0]
            }
        }
    },
    {
        $match: {
            $or: [
                { "bookingsData.bookingDate": { $gte: ISODate("2022-03-01T00:00:00Z"), $lt: ISODate("2022-04-01T00:00:00Z") } },
                { "bookingsData.checkinDate": { $gte: ISODate("2022-03-01T00:00:00Z"), $lt: ISODate("2022-04-01T00:00:00Z") } },
                { "bookingsData.checkoutDate": { $gte: ISODate("2022-03-01T00:00:00Z"), $lt: ISODate("2022-04-01T00:00:00Z") } }
            ]
        }
    },
    {
        $project: {
            _id: 0,
            contactName: "$_id.contactName",
            contactPhone: "$_id.contactPhone"
        }
    }
])


/* We would like to know the monthly earnings, both 
those already obtained and those expected according 
to future reservations */

db.bookings.aggregate([
    {
        $unwind: "$rooms"
    },
    {
        $lookup: {
            from: "rooms",
            localField: "rooms.class",
            foreignField: "_id",
            as: "roomsArray"
        }
    },
    {
        $addFields: {
            roomsData: {
                $arrayElemAt: ["$roomsArray", 0]
            }
        }
    },
    {
        $project: {
            checkoutDate: 1,
            subTotal: {
                $multiply: [
                    {
                        $sum: ["$roomsData.dailyPrice", "$rooms.dailyBoardTax"]
                    },
                    {
                        $divide: [
                            { $subtract: ["$checkoutDate", "$checkinDate"] },
                            60 * 1000 * 60 * 24
                        ]
                    },
                    {
                        $subtract: [1, "$coupon"]
                    }
                ]
            }
        }
    },
    {
        $group: {
            _id: {
                $dateToString: { format: "%Y-%m", date: "$checkoutDate" }
            },
            total: { $sum: "$subTotal" },
        }
    },
    {
        $project: {
            _id: 1,
            totalEarnings: "$total",
            type: {
                $cond: {
                    if: { $gte: ["$_id", { $dateToString: { format: "%Y-%m", date: new Date() } }] },
                    then: "Expected Earnings",
                    else: "Achieved Earnings"
                }
            }
        }
    },
    {
        $sort: { _id: 1 }
    }
])


/* We would like to know what has been or
will be the five busiest days at our hotel
and how many people will be staying at that time.*/

db.bookings.aggregate([
    {
        $addFields: {
            range: {
                $range: [
                    0,
                    {
                        $add: [
                            {
                                $divide: [
                                    { $subtract: ["$checkoutDate", "$checkinDate"] },
                                    60 * 1000 * 60 * 24
                                ]
                            },
                            1
                        ]
                    },
                    1
                ]
            }
        }
    },
    {
        $project: {
            _id: 1,
            customerID: 1,
            range: {
                $map: {
                    input: "$range",
                    in: {
                        $add: [
                            "$checkinDate",
                            { $multiply: [ "$$this", 24, 60, 60, 1000 ] }
                        ]
                    }
                }
            }
        }
    },
    {
        $lookup: {
            from: "customers",
            localField: "customerID",
            foreignField: "_id",
            as: "customersArray"
        }
    },
    {
        $addFields: {
            customersData: {
                $arrayElemAt: ["$customersArray", 0]
            }
        }
    },
    {
        $project: {
            _id: 0,
            range: 1,
            customersQty: { $size: "$customersData.data"},
        }
    },
    {
        $unwind: "$range"
    },
    {
        $group: {
            _id: "$range",
            customersDailyQty: { $sum: "$customersQty"}
        }
    }, 
    {
        $sort: {customersDailyQty: -1}
    },
    {
        $limit: 5
    }
])


/* The hotel is directing a market study.
We would like to know the average individual
expenditure by nationality of our customers, 
as well as the number of customers by nationality. */

db.bookings.aggregate([
    {
        $unwind: "$rooms"
    },
    {
        $lookup: {
            from: "rooms",
            localField: "rooms.class",
            foreignField: "_id",
            as: "roomsArray"
        }
    },
    {
        $addFields: {
            roomsData: {
                $arrayElemAt: ["$roomsArray", 0]
            }
        }
    },
    {
        $project: {
            customerID: 1,
            subTotal: {
                $multiply: [
                    {
                        $sum: ["$roomsData.dailyPrice", "$rooms.dailyBoardTax"]
                    },
                    {
                        $divide: [
                            { $subtract: ["$checkoutDate", "$checkinDate"] },
                            60 * 1000 * 60 * 24
                        ]
                    },
                    {
                        $subtract: [1, "$coupon"]
                    }
                ]
            }
        }
    },
    {
        $lookup: {
            from: "customers",
            localField: "customerID",
            foreignField: "_id",
            as: "customersArray"
        }
    },
    {
        $addFields: {
            customersData: {
                $arrayElemAt: ["$customersArray", 0]
            }
        }
    },
    {
        $group: {
            _id: {
                idBooking: "$_id",
                nationality: "$customersData.nationality",
                customersData: "$customersData.data"
            },
            customersExpenditure: { $sum: "$subTotal" }
        }
    },
    {
        $project: {
            _id: 0,
            customersExpenditure: 1,
            nationality: "$_id.nationality",
            customersNumber: { $size: "$_id.customersData" }
        }
    },
    {
        $group: {
            _id: "$nationality",
            totalExpenditurebyNac: { $sum: "$customersExpenditure" },
            totalPeopleByNac: { $sum: "$customersNumber" }
        }
    },
    {
        $project: {
            _id: 0,
            nationality: "$_id",
            totalPeopleByNac: 1,
            avgIndividualExpenditure: { $round: [{ $divide: ["$totalExpenditurebyNac", "$totalPeopleByNac"] }, 0] }

        }
    },
    {
        $sort: { avgIndividualExpenditure: -1 }
    }
])


/* Due to the COVID-19 situation, the hotel would like
to create a new collection for possible cancellations.

All reservations whose check-in date take place after
seven days from the query date will be considered "cancelled"
and should be registered in this database. 

If the reservation was made at least 20 days in advance,
the hotel will return 100% of the money, otherwise,
only the 75% will be refunded. */

db.bookings.aggregate([
    {
        $match: {
            $expr: {
                $gte: [
                    "$checkinDate",
                    {
                        $dateAdd: {
                            startDate: new Date(),
                            unit: "week",
                            amount: 1
                        }
                    }
                ]
            }
        }
    },
    {
        $unwind: "$rooms"
    },
    {
        $lookup: {
            from: "rooms",
            localField: "rooms.class",
            foreignField: "_id",
            as: "roomsArray"
        }
    },
    {
        $addFields: {
            roomsData: {
                $arrayElemAt: ["$roomsArray", 0]
            }
        }
    },
    {
        $lookup: {
            from: "customers",
            localField: "customerID",
            foreignField: "_id",
            as: "customersArray"
        }
    },
    {
        $addFields: {
            customersData: {
                $arrayElemAt: ["$customersArray", 0]
            }
        }
    },
    {
        $project: {
            _id: 1,
            customersData: 1,
            total: {
                $multiply: [
                    {
                        $sum: ["$roomsData.dailyPrice", "$rooms.dailyBoardTax"]
                    },
                    {
                        $divide: [
                            { $subtract: ["$checkoutDate", "$checkinDate"] },
                            60 * 1000 * 60 * 24
                        ]
                    },
                    {
                        $subtract: [1, "$coupon"]
                    }
                ]
            },
            refund: {
                $cond: {
                    if: {
                        $gte: [
                            {
                                $divide: [
                                    { $subtract: ["$checkinDate", "$bookingDate"] },
                                    60 * 1000 * 60 * 24
                                ]
                            },
                            20
                        ]
                    },
                    then: 1,
                    else: 0.75
                }
            }
        }
    },
    {
        $group: {
            _id: {
                bookingID: "$_id",
                customersData: "$customersData",
                refund: "$refund"
            },
            total: { $sum: "$total" },
        }
    },
    {
        $project: {
            _id: 0,
            bookingID: "$_id.bookingID",
            customerContactName: "$_id.customersData.contactName",
            customerContactPhone: "$_id.customersData.contactPhone",
            moneyPaid: "$total",
            moneyRefund: { $multiply: ["$total", "$_id.refund"] },
            refundPercentage: { $multiply: ["$_id.refund", 100] }
        }
    },
    {
        $out: {
            db: "proyecto", coll: "refunds"
        }
    }
])