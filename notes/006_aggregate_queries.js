//
// The "Drill bits x8" pack contains a total of 8 bits. The
// company would like to know the SELLING PRICE OF A SINGLE BIT.

db.selling.aggregate([
   {
      $unwind: "$items"
   },
   {
      $match: {
         "items.name": "Drill bits x8"
      }
   },
   {
      $sample: { size: 1 }
   },
   {
      $project: {
         _id: 0,
         priceSingleBit: {
            $divide: ["$items.sellingPrice", 8]
         }
      }
   }
])


//
// The company would like to know the number of TOTAL UNITS SOLD
// of EACH PRODUCT from the "TOOLS" CATEGORY.

db.selling.aggregate([
   {
      $unwind: "$items"
   },
   {
      $match: {
         "items.category": "tools"
      }
   },
   {
      $group: {
         _id: "$items.name",
         totalQty: { $sum: "$items.quantity" }
      }
   }
])


// 
// The company is running a popularity study. They would like to
// know WHAT PRODUCTS HAVE BEEN ASKED THE MOST FROM HIGHEST TO LOWEST. 

db.selling.aggregate([
   {
      $unwind: "$items"
   },
   {
      $group: {
         _id: "$items.name",
         timesAsked: { $sum: 1 }
      }
   },
   {
      $sort: { salesQty: -1 }
   }
])


//
// The company would like to know the SALE AMOUNT OF EACH SALE in SEPTEMBER 2021. 
// Next to each value should appear both the DATE and the SELLER who made it.

db.selling.aggregate([
   {
      $match: {
         $expr: { $eq: [{ $month: "$saleDate" }, 9] }
      }
   },
   {
      $unwind: "$items"
   },
   {
      $project: {
         _id: 1,
         saleDate: 1,
         seller: 1,
         singleSaleAmount: {
            $multiply: [
               "$items.sellingPrice",
               "$items.quantity",
               { $subtract: [1, "$discount"] }
            ]
         }
      }
   },
   {
      $group: {
         _id: {                                                 // Once we have calculated the sale amount per product,
            _id: "$_id",                                        // I grouped all resulting documents by $_id, $saleDate and $seller.
            date: "$saleDate",                                  // This way I can obtain the total sale amount BY SALE
            seller: "$seller",                                  // in purchases where there are two or more products.
         },
         saleAmount: { $sum: "$singleSaleAmount" }
      }
   },
   {
      $project: {
         _id: 0,
         date: "$_id.date",
         seller: "$_id.seller",
         saleAmount: "$saleAmount"
      }
   },
   {
      $sort: {
         "date": 1,
      }
   }
])


//
// The company would like to know the TOTAL SALE AMOUNT before November 2021.
// It is necessary to indicate the AMOUNT OF MONEY CORRESPONDING TO VAT (21%). 
// Additionally, both digits must be ROUNDED TO UNITS.

db.selling.aggregate([
   {
      $match: {
         $and: [
            { $expr: { $lt: [{ $month: "$saleDate" }, 11] } },
            { $expr: { $eq: [{ $year: "$saleDate" }, 2021] } }
         ]
      }
   },
   {
      $unwind: "$items"
   },
   {
      $group: {
         _id: { $month: "$saleDate" },
         saleAmount: {
            $sum: {
               $multiply: [
                  "$items.sellingPrice",
                  "$items.quantity",
                  { $subtract: [1, "$discount"] }
               ]
            }
         }
      }
   },
   {
      $project: {
         _id: 0,
         month: "$_id",
         roundedtotalSales: { $round: ["$saleAmount", 0] },
         roundedtotalVAT: { $round: [{ $multiply: ["$saleAmount", 0.21] }, 0] }
      }
   }
])


//
// The company would like to know the TOTAL BENEFITS to date 
// PER MONTH, ordered from LOWEST TO HIGHEST.

db.selling.aggregate([
   {
      $unwind: "$items"
   },
   {
      $group: {
         _id: {
            month: { $month: "$saleDate" },
            year: { $year: "$saleDate" }
         },
         totalBenefits: {
            $sum: {
               $multiply: [
                  {
                     $subtract: [
                        {
                           $multiply: [
                              "$items.sellingPrice",
                              { $subtract: [1, "$discount"] }
                           ]
                        },
                        "$items.purchasePrice"
                     ]
                  },
                  "$items.quantity"
               ]
            }
         }
      }
   },
   {
      $project: {
         _id: 0,
         month: "$_id.month",
         year: "$_id.year",
         totalBenefits: "$totalBenefits"
      }
   },
   {
      $sort: {
         "totalBenefits": 1,
      }
   }
])


//
// The company would like to know what CLIENTS have generated THE
// MOST SALES AMOUNT LAST DECEMBER 2021. 

db.selling.aggregate([
   {
      $match: {
         $and: [
            { $expr: { $eq: [{ $month: "$saleDate" }, 12] } },
            { $expr: { $eq: [{ $year: "$saleDate" }, 2021] } }
         ]
      }
   },
   {
      $unwind: "$items"
   },
   {
      $group: {
         _id: {
            name: "$customer.name",
            location: "$customer.location"
         },
         totalSalesAmount: {
            $sum: {
               $multiply: [
                  "$items.sellingPrice",
                  "$items.quantity",
                  { $subtract: [1, "$discount"] }
               ]
            }
         }
      }
   },
   {
      $project: {
         _id: 0,
         customer: "$_id.name",
         location: "$_id.location",
         totalSalesAmount: "$totalSalesAmount"
      }
   },
   {
      $sort: { "totalSalesAmount": -1 }
   }
])


//
// The company is considering opening stores OUTSIDE OF SEVILLA,
// only where BENEFITS SURPASS 300€. Which are these towns?

db.selling.aggregate([
   {
      $match: {
         "customer.location": { $ne: "Sevilla" }
      }
   },
   {
      $unwind: "$items"
   },
   {
      $group: {
         _id: "$customer.location",
         benefits: {
            $sum: {
               $multiply: [
                  {
                     $subtract: [
                        {
                           $multiply: [
                              "$items.sellingPrice",
                              { $subtract: [1, "$discount"] }
                           ]
                        },
                        "$items.purchasePrice"
                     ]
                  },
                  "$items.quantity"
               ]
            }
         }
      }
   },
   {
      $match: {
         benefits: { $gt: 300 }
      }
   }
])


//
// The company would like to know the AVERAGE SATISFACTION
// in ONLINE SALES for EACH OF ITS SELLERS.

db.selling.aggregate([
   {
      $match: {
         "purchaseMethod": "online"
      }
   },
   {
      $group: {
         _id: "$seller",
         avgSatisfaction: { $avg: "$satisfaction" }
      }
   }
])


//
// The company would like to know the BIGGEST and SMALLEST SALES 
// for EACH OF ITS SELLERS. 

db.selling.aggregate([
   {
      $unwind: "$items"
   },
   {
      $project: {
         _id: 1,
         seller: 1,
         singleSalesAmount: {
            $multiply: [
               "$items.sellingPrice",
               "$items.quantity",
               { $subtract: [1, "$discount"] }
            ]
         }
      }
   },
   {
      $group: {
         _id: {                                                 // Once we have calculated the total sale amount per product,
            _id: "$_id",                                        // it's necessary to group documents by $_id and $seller. 
            seller: "$seller",                                  // This way we will obtain the total sale amount BY SALE
         },                                                     // in purchases where there are two or more products.
         purchaseSalesAmount: { $sum: "$singleSalesAmount" }
      }
   },
   {
      $group:
      {
         _id: "$_id.seller",
         listOfSalesAmount: { $addToSet: "$purchaseSalesAmount" }
      }
   },
   {
      $project: {
         _id: 0,
         seller: "$_id",
         maxSalesAmount: { $max: ["$listOfSalesAmount"] },
         mimSalesAmount: { $min: ["$listOfSalesAmount"] }
      }
   }
])


//
// December is over, so it's time for the company to choose 
// one of its sellers as "Employee of the Month". All candidates for 
// this award must have achieved a TOTAL SALES AMOUNT HIGHER THAN 6OO€
// and an AVERAGE SATISFACTION LEVEL EQUAL OR GREATER THAN 7.

db.selling.aggregate([
   {
      $match: {
         $expr: { $eq: [{ $month: "$saleDate" }, 12] }
      }
   },
   {
      $unwind: "$items"
   },
   {
      $project: {
         _id: 1,
         seller: 1,
         satisfaction: 1,
         salesAmountByProduct: {
            $multiply: [
               "$items.sellingPrice",
               "$items.quantity",
               { $subtract: [1, "$discount"] }
            ]
         }
      }
   },
   {
      $group: {
         _id: {                                                   // Once we have calculated the total sale amount per product, 
            _id: "$_id",                                          // it's necessary to group documents by $_id and $seller.
            seller: "$seller",                                    // This way we won't have to worry about the satisfaction of 
         },                                                       // the purchase repeating in purchases with more than one product.
         purchaseSatisfaction: { $avg: "$satisfaction" },         // The operator $avg will leave the value unaltered.
         purchaseSalesAmount: { $sum: "$salesAmountByProduct" }
      }
   },
   {
      $group: {
         _id: "$_id.seller",
         avgSatisfaction: { $avg: "$purchaseSatisfaction" },
         totalSalesAmount: { $sum: "$purchaseSalesAmount" }
      }
   },
   {
      $match: {
         $and: [
            { avgSatisfaction: { $gte: 7 } },
            { totalSalesAmount: { $gt: 600 } }
         ]
      }
   }
])