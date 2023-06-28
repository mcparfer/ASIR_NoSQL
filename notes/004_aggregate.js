db.orders.insertMany( [
   { _id: 0, productName: "Steel beam", status: "new", quantity: 10 },
   { _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
   { _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
   { _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
   { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
   { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
])

 db.orders.aggregate( [
    { $match: { status: "urgent" } }, 
    //Filtro: {primer parámetro de un find)
    { $group: { _id: "$productName", sumQuantity: { $sum: "$quantity" } } } 
    //_id es el criterio de agrupación, el valor debe ser un campo existente en los documentos que le entran
    // por la etapa anterior, en este caso el $match (el identificador inicial de cada prodcuto se ha perdido)
    //sumQuantity es un nuevo campo definido por el usuario y cuyo valor vendrá definido según los diferentes
    //operadores de agregación que aparezcan.
 ] )

 
db.orders.aggregate( [
    { $match: { status: "urgent" } }, 
    { $group: { 
       _id: "$productName", 
       sumQuantity: { $sum: "$quantity" } 
      } },
    { $group: { 
       _id: null, 
       total: { $sum: "$sumQuantity" } } } 
] )

db.orders.aggregate( [
   { $match: { status: "urgent" } }, 
   { $group: { 
      _id: "$productName", 
      sumQuantity: { $sum: "$quantity" },
      numeroGrupo: { $sum: 1 } 
     } },
] )

// Operadores vistos: $avg, $min, $max, $sum

db.artículos.insertMany( [
   { _id: 0, nombre: "galletas oreo", categoría: "bollería", cantidad: 12, precio: 2.15 },
   { _id: 1, nombre: "galletas príncipe", categoría: "bollería", cantidad: 24, precio: 1.50 },
   { _id: 2, nombre: "brick leche", categoría: "bebida", cantidad: 13, precio: 0.60 },
   { _id: 3, nombre: "brick zumo", categoría: "bebida", cantidad: 15, precio: 0.90 },
   { _id: 4, nombre: "cepillo de dientes", categoría: "higiene", cantidad: 34, precio: 1.15 },
   { _id: 5, nombre: "desodorante", categoría: "higiene", cantidad: 24,precio: 4.35 }
] )

//Número documentos por categoría
db.artículos.aggregate( [
   { $group: { 
      _id: "$categoría", 
      sumaqty: { $sum: 1 } 
   } } 
] )

//Artículos totales por categoría
db.artículos.aggregate( [
   { $group: { 
      _id: "$categoría", 
      sumaqty: { $sum: "$cantidad" } 
   } } 
] )

//Número elementos y artículos totales por categoría
db.artículos.aggregate( [
   { $group: { 
      _id: "$categoría", 
      numerodocumentos: { $sum: 1 },
      cantidadartículos: { $sum: "$cantidad" } 
   } } 
] )

//Precio en existencias
db.artículos.aggregate( [
   { $group: { 
      _id: null, 
      preciototal: { $sum: { $multiply: [ "$cantidad","$precio" ] } } 
   } } 
] )

//Euros totales por categoría
db.artículos.aggregate( [
   { $group: { 
      _id: "$categoría", 
      preciocat: { $sum: { $multiply: [ "$cantidad","$precio" ] } }
   } } 
] )

//Número medio de artículos por categoría
db.artículos.aggregate( [
   { $group: { 
      _id: "$categoría", 
      mediaart: { $avg: { $sum: "$cantidad" } }
   } } 
] )