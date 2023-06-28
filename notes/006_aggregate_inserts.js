db.selling.drop()
db.selling.insertMany([

   {
      _id: 1,
      saleDate: ISODate("2021-09-14T10:50:00Z"),
      items: [
         {
            name: "Electric Drill PR750NM",
            category: "machines",
            purchasePrice: 27.45,
            sellingPrice: 34.95,
            quantity: 7
         },
         {
            name: "Drill bits x8",
            category: "accessories",
            purchasePrice: 5.20,
            sellingPrice: 9.99,
            quantity: 5
         }
      ],
      seller: "Paula Guillén Vázquez",
      customer: {
         name: "Talleres Iván S.L.",
         location: "Sevilla"
      },
      discount: 0.10,
      satisfaction: 8,
      purchaseMethod: "in store",
   },

   { _id: 2, saleDate: ISODate("2021-09-23T15:23:00Z"), items: [{ name: "Parrot Nose Locking Pliers 6000 Series", category: "tools", purchasePrice: 9.45, sellingPrice: 13.50, quantity: 10 }], seller: "Fernando Carrasco del Pozo", customer: { name: "Maderas y Tableros Pérez S.L.", location: "Sevilla" }, discount: 0, satisfaction: 9, purchaseMethod: "in store" },
   { _id: 3, saleDate: ISODate("2021-09-28T12:52:00Z"), items: [{ name: "Adjustable Wrench 6000 Series", category: "tools", purchasePrice: 10.15, sellingPrice: 14.95, quantity: 4 }], seller: "Iván Muñoz Ramos", customer: { name: "Maderas y Tableros Pérez S.L.", location: "Pedrera" }, discount: 0.05, satisfaction: 7, purchaseMethod: "online" },
   { _id: 4, saleDate: ISODate("2021-10-10T14:45:00Z"), items: [{ name: "Circular Saw", category: "machines", purchasePrice: 55.45, sellingPrice: 79.95, quantity: 8 }, { name: "Cutting Disc 125mm", category: "accessories", purchasePrice: 0.80, sellingPrice: 1.35, quantity: 17 }], seller: "Iván Muñoz Ramos", customer: { name: "Agrícola Roda S.C.A.", location: "La Roda de Andalucía" }, discount: 0, satisfaction: 5, purchaseMethod: "online" },
   { _id: 5, saleDate: ISODate("2021-10-14T17:34:00Z"), items: [{ name: "Flashlight AL10M", category: "tools", purchasePrice: 1.15, sellingPrice: 3.95, quantity: 18 }], seller: "María Palomas Ángel", customer: { name: "Carpintería Modepu S.L.U.", location: "Dos Hermanas" }, discount: 0.1, satisfaction: 5, purchaseMethod: "online" },
   { _id: 6, saleDate: ISODate("2021-11-02T12:26:00Z"), items: [{ name: "Lithium Screwdriver AR36-2", category: "machines", purchasePrice: 25.45, sellingPrice: 34.95, quantity: 20 }, { name: "Adjustable Wrench 6000 Series", category: "tools", purchasePrice: 10.15, sellingPrice: 14.95, quantity: 14 }], seller: "Paula Guillén Vázquez", customer: { name: "Muebles Norato S.L.", location: "Pedrera" }, discount: 0.25, satisfaction: 6, purchaseMethod: "online" },
   { _id: 7, saleDate: ISODate("2021-11-05T13:12:00Z"), items: [{ name: "Circular Saw", category: "machines", purchasePrice: 55.45, sellingPrice: 79.95, quantity: 9 }], seller: "Iván Muñoz Ramos", customer: { name: "Maderas y Tableros Pérez S.L.", location: "Sevilla" }, discount: 0, satisfaction: 2, purchaseMethod: "in store" },
   { _id: 8, saleDate: ISODate("2021-11-17T12:25:00Z"), items: [{ name: "Lithium Screwdriver AR36-2", category: "machines", purchasePrice: 25.45, sellingPrice: 34.95, quantity: 13 }], seller: "María Palomas Ángel", customer: { name: "MIGASA S.L.U.", location: "Dos Hermanas" }, discount: 0.1, satisfaction: 5, purchaseMethod: "online" },
   { _id: 9, saleDate: ISODate("2021-11-19T15:53:00Z"), items: [{ name: "Parrot Nose Locking Pliers 6000 Series", category: "tools", purchasePrice: 9.45, sellingPrice: 13.50, quantity: 13 }, { name: "Cutting Disc 125mm", category: "accessories", purchasePrice: 0.80, sellingPrice: 1.35, quantity: 6 }], seller: "Fernando Carrasco del Pozo", customer: { name: "Talleres Martínez S.L.", location: "Sevilla" }, discount: 0, satisfaction: 10, purchaseMethod: "in store" },
   { _id: 10, saleDate: ISODate("2021-12-03T19:22:00Z"), items: [{ name: "Drill bits x8", category: "accessories", purchasePrice: 5.20, sellingPrice: 9.99, quantity: 7 }], seller: "Fernando Carrasco del Pozo", customer: { name: "Agrícola Roda S.C.A.", location: "La Roda de Andalucía" }, discount: 0.20, satisfaction: 8, purchaseMethod: "online", },
   { _id: 11, saleDate: ISODate("2021-12-07T09:32:00Z"), items: [{ name: "Flashlight AL10M", category: "tools", purchasePrice: 1.15, sellingPrice: 3.95, quantity: 4 }], seller: "Iván Muñoz Ramos", customer: { name: "Muebles Norato S.L.", location: "Pedrera" }, discount: 0.05, satisfaction: 6, purchaseMethod: "online" },
   { _id: 12, saleDate: ISODate("2021-12-16T10:55:00Z"), items: [{ name: "Electric Drill PR750NM", category: "machines", purchasePrice: 27.45, sellingPrice: 34.95, quantity: 3 }, { name: "Drill bits x8", category: "accessories", purchasePrice: 5.20, sellingPrice: 9.99, quantity: 20 }], seller: "Iván Muñoz Ramos", customer: { name: "Carpintería Modepu S.L.U.", location: "Dos Hermanas" }, discount: 0.10, satisfaction: 7, purchaseMethod: "online" },
   { _id: 13, saleDate: ISODate("2021-12-25T10:54:00Z"), items: [{ name: "Cutting Disc 125mm", category: "accessories", purchasePrice: 0.80, sellingPrice: 1.35, quantity: 8 }], seller: "Paula Guillén Vázquez", customer: { name: "Agrícola Roda S.C.A.", location: "La Roda de Andalucía" }, discount: 0, satisfaction: 9, purchaseMethod: "online" },
   { _id: 14, saleDate: ISODate("2021-12-29T13:32:00Z"), items: [{ name: "Circular Saw", category: "machines", purchasePrice: 55.45, sellingPrice: 79.95, quantity: 12 }], seller: "Fernando Carrasco del Pozo", customer: { name: "Muebles Norato S.L.", location: "Pedrera" }, discount: 0.05, satisfaction: 6, purchaseMethod: "online" },
   { _id: 15, saleDate: ISODate("2021-12-30T13:13:00Z"), items: [{ name: "Lithium Screwdriver AR36-2", category: "machines", purchasePrice: 25.45, sellingPrice: 34.95, quantity: 12 }, { name: "Adjustable Wrench 6000 Series", category: "tools", purchasePrice: 10.15, sellingPrice: 14.95, quantity: 10 }], seller: "María Palomas Ángel", customer: { name: "Maderas y Tableros Pérez S.L.", location: "La Roda de Andalucía" }, discount: 0, satisfaction: 2, purchaseMethod: "in store" },
   { _id: 16, saleDate: ISODate("2021-12-30T18:31:00Z"), items: [{ name: "Drill bits x8", category: "accessories", purchasePrice: 5.20, sellingPrice: 9.99, quantity: 7 }], seller: "María Palomas Ángel", customer: { name: "MIGASA S.L.U.", location: "Dos Hermanas" }, discount: 0.1, satisfaction: 8, purchaseMethod: "online" }
])