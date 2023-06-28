// Crear colección autoventas a partir de la colección ventas
// Sólo con lo propio de la cada venta
db.ventas4.aggregate([
    {
        $project: {
            _id: 0,
            item: 0,
        }
    },

    { 
      $out: { 
        db: "test", 
        coll: "autoventas" 
      } 
  }
  ])

// Crear colección autoitems a partir de la colecciión ventas
// Sólo con los artículos, a los que hay que añadir el identificador de 
// la venta a la que pertenece cada artículo
  db.ventas4.aggregate([
    {
        $unwind: {
          path: "$item",
        },
      },

    {
        $project: {
            _id: 0,
            id: 1,
            name:"$item.name",
            soldPrice:"$item.soldPrice",
            companyPrice:"$item.companyPrice",
            soldUnits:"$item.soldUnits",
            features:"$item.features"
    },
},
    { 
      $out: { 
        db: "test", 
        coll: "autoitems" 
      } 
  }
  ])