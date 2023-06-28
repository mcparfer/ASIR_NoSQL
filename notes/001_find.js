db.inventory.drop() /*borra una colección*/
db.inventory.insertMany([
    { 
        item: "journal", 
        qty: 25, 
        tags: ["blank", "red"], 
        dim_cm: [ 14, 21 ] 
    },
    { item: "notebook", qty: 50, tags: ["red", "blank"], dim_cm: [ 14, 21 ] },
    { item: "paper", qty: 100, tags: ["red", "blank", "plain"], dim_cm: [ 14, 21 ] },
    { item: "planner", qty: 75, tags: ["blank", "red"], dim_cm: [ 22.85, 30 ] },
    { item: "postcard", qty: 45, tags: ["blue"], dim_cm: [ 10, 15.25 ] }
 ]);

db.inventory.find( { tags: ["red", "blank"] } ) /*Muestra los documentos en los que el campo tags contenga un valor igual al array ["red", "blank"]*/
db.inventory.find( { tags: { $all: ["red", "blank"] } } ) /*Muestra los documentos en los que el campo tags contenga los valores "red y "blank"*/
db.inventory.find( { item: "journal" } ) /*Muestra los documentos en los que el campo item contenga un valor igual a "journal"*/
db.inventory.find( { tags: "red" } ) /*Muestra los documentos en los que el campo tags contenga el valor "red"*/

db.inventory.find( { dim_cm: { $gt: 21 } } ) /*Muestra los documentos en el que alguno de los valores del array dim_cm cumpla $gt:21*/
db.inventory.find( { qty: { $gt: 45, $lt: 100 } } ) /*Muestra los documentos en los que el valor del campo qty sea mayor que 45 y menor que 100*/
db.inventory.find( { dim_cm: { $gt: 15, $lt: 20 } } ) /*Muestra los documentos en el array dim_cm contenga algún valor mayor que 15 y algún valor menor que 20*/




db.inventory.drop() /*borra una colección*/
db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], dim_cm: [ 14, 21 ], 
        dateA: new Date()
    },
    { item: "notebook", qty: 50, tags: ["red", "blank"], dim_cm: [ 14, 21 ],
        dateA: new Date("2020-02-15")
    },
    { item: "paper", qty: 100, tags: ["red", "blank", "plain"], dim_cm: [ 14, 21 ],
        dateA: new Date()
    },
    { item: "planner", qty: 75, tags: ["blank", "red"], dim_cm: [ 22.85, 30 ],
        dateA: new Date("2020-03-20")
    },
    { item: "postcard", qty: 45, tags: ["blue"], dim_cm: [ 10, 15.25 ],
        dateA: new Date("2020-05-25")
    },
    { item: "postcard", qty: 45, tags: "red", dim_cm: [ 10, 15.25 ],
        dateA: new Date("2020-07-30")
    }
 ]);

 /*La fecha es de tipo string*/

db.inventory.find( {dateA: { $gt: new Date ("2020-05-31") } } )




db.inventory.drop() /*borra una colección*/
db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], dim_cm: [ 14, 21 ], 
        dateA: new Date(),
        año: 2019,
        mes: 7
    },
    { item: "notebook", qty: 50, tags: ["red", "blank"], dim_cm: [ 14, 21 ],
        dateA: new Date("2020-02-15"),
        año: 2017,
        mes: 4
    },
    { item: "paper", qty: 100, tags: ["red", "blank", "plain"], dim_cm: [ 14, 21 ],
        dateA: new Date(),
        año: 2018,
        mes: 5
    },
    { item: "planner", qty: 75, tags: ["blank", "red"], dim_cm: [ 22.85, 30 ],
        dateA: new Date("2020-03-20"),
        año: 2016,
        mes: 4
    },
    { item: "postcard", qty: 45, tags: ["blue"], dim_cm: [ 10, 15.25 ],
        dateA: new Date("2020-05-25"),
        año: 2020,
        mes: 5
    },
    { item: "postcard", qty: 45, tags: "red", dim_cm: [ 10, 15.25 ],
        dateA: new Date("2020-07-30"),
        año: 2017
    }
 ]);

db.inventory.find( {año: { $eq: new Date ("2017-07-31").getFullYear() } } ).pretty()

db.inventory.find( {dateA: {$gt: new Date("2020-07-31") } } ).pretty().count()

db.peliculas.find({ 
    $and: [ 
        {precioentrada: {$lte: 3.33} }, 
        {date: {$gt: new Date("1921-12-31"), $lt: new Date("1923-01-01") } } 
    ]  
})

db.peliculas.find({
    $and: [ 
        {precioentrada: {$lte: 3.33} }, 
        {date: {$gte: new Date("1922-01-01") } }, 
        {date: {$lt: new Date("1923-01-01") } } 
    ] 
})

db.peliculas.find({
    $and: [
        {date: {$gte: new Date("2000-01-01") } },
        {$or: [ 
            {precioentrada: 5}, 
            {precioentrada: 8} 
        ] }
    ]
})

db.peliculas.find( { pais: { $ne: ["España"] } }, { _id: 0, pais: 1 } ).count()

db.peliculas.find( { pais: { $not: {$eq: ["España"] } } } )

db.peliculas.find(
    { pais: 
        {$exists: true, $ne: "España"}
    }
).count()

db.peliculas.find(
    { pais: 
        {$exists: false}
    },
    {
        _id: 0,
        pais: 1
    }
).count()

db.peliculas.find(
    {
        $and: [
            {duracion: {$lte: 115} },
            {genero: "Animación"}
        ]
    }
).pretty()

db.peliculas.find(
    {
        "personal.direccion": { $regex: /Spiel/ }
    }
)

/*Enunciado
Relación con la realidad
Estructura de la colección
Usar todo lo visto en clase en tipos de datos, tipo arrays y documentos, fechas, string, numéricos
Nivel por encima
Datos
Operadores query
Proyeccion
Exists*/