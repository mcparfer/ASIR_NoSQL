//Uso del $unwind para desglosar.

db.inventory.drop()
db.inventory.insertOne({
   "_id": 1,
   "item": "ABC1",
   sizes: ["S", "M", "L"]
})


db.inventory.aggregate([
   {
      $unwind: "$sizes"
   }
])



// Colección de estudiantes. Formada por: nº expediente (único), nombre del alumno y notas trimestrales.
// Queremos nombre del alumno y nota media.

db.school.drop()
db.school.insertMany([
   {
      _id: 123442,
      name: "Juan",
      marks: [10, 6.5, 7.9]
   },
   { schoolID: 243424, name: "María", marks: [7.9, 8.4, 9.5] },
   { schoolID: 334234, name: "Fernando", marks: [4, 5.5, 8] },
   { schoolID: 453452, name: "Carlos", marks: [2, 3, 5.5] }
])

db.school.aggregate([
   {
      $unwind: "$marks"
   },
   {
      $group: {
         _id: "$name",
         avgMarks: { $avg: "$marks" }
      }
   }
])

db.school.aggregate([
   {
      $unwind: "$marks"
   },
   {
      $group: {
         _id: {
            name: "$name",
            schoolID: "$schoolID"
         },
         avgMarks: { $avg: "$marks" }
      }
   }
])

// Crear index nuevo en mongoshell, e intentar hacer un insertOne. Al considerar schoolID como índice ÚNICO
// no dejará incluir docuemntos donde el campo schoolID sea igual a algún valor de los documentos existentes.

db.school.insertOne(
   { schoolID: 453452, name: "Sandra", marks: [2, 3, 5.5] }
)

db.school.insertMany([
   {
      _id: 234233,
      name: "Juan",
      marks: [10, 6.5, 7.9]
   },
   { schoolID: 423423, name: "Pepe", marks: [] }, // No lo muestra
   { schoolID: 876867, name: "Raquel", marks: 4 }, // No lo muestra, pero si el 4 fuera entre [] como array, sí lo mostraría. 
   { schoolID: 876788, name: "Rosa" }, // No lo muestra
   { schoolID: 856455, name: "Ángel", marks: null } // No lo muestra
])