// Muestra los datos del paciente Ganji Gupta.
db.patients.find( { patient: { $eq: "Ganji Gupta" } } ).pretty()


// Muestra el nombre de los pacientes que han salido 100% curados del hospital.
db.patients.find ( { $and: [ { discharge_date: {$exists: true} }, {full_recovery: true } ] } , { _id: 0, patient: 1 } )
// De igual forma también puede mostrar el número de pacientes que cumplen este requisito.
db.patients.find ( { $and: [ { discharge_date: {$exists: true} }, {full_recovery: true } ] } ).count ()


// Muestra todos los pacientes entre cuyos médicos asignados estaban la doctora Browne y la doctora Reznick.
db.patients.find ( { assigned_staff: { $all: [ "Dr. Browne" , "Dr. Reznick" ] } } ).pretty()


// Muestra todos los pacientes no sean menores de 25 años o que no pesen 60kg o menos.
db.patients.find ( { $nor: [ { age: { $lt: 25 } }, { weight_kg: { $lte: 60 } } ] } ).pretty()


// Muestra todos los pacientes que no han recibido el alta antes del 3 de noviembre de 2021 a las 12 del mediodía.
db.patients.find( { discharge_date: { $exists: true, $not: { $lte: new Date("2021-11-03T12:00:00Z") } } } ).pretty()


// El hospital está realizando un estudio sobre médicamentos. Uno de los trabajadores desea recopilar el nombre de todos los pacientes
// que cumplan al menos una de estas características: no tomar pastillas; y/o consumir los medicamentos "112233" o "888888".
db.patients.find( { medication: { $all: [ { "$elemMatch" : { type : { $ne: "tablet" } } }, { "$elemMatch": { code : { $in: [ "112233", "888888" ] } } } ] } } ).pretty()


// ¡Es el cumpleaños de la paciente Martha Behamfil! Como hoy cumplirá 10 años, el hospital quiere organizar una fiesta de cumpleaños
// e invitar a todos los menores de edad para que Martha no se sienta sola. Sin embargo, aquellos que estén recibiendo la medicación
// en pastilla no podrán comer tarta porque requieren de una dieta especial. 
// A continuación se muestra quién está invitado al cumpleaños y podrá comer tarta.
db.patients.find( { $and: [ { discharge_date: { $exists: false } , age: { $lt: 18 } , "medication.type": { $ne: "tablet" } } ] } )


// Todos sabemos que la letra de médico es bastante dificil de leer. El hospital necesita saber a quién corresponde
// o correspondía la prescipción del medicamento 112233. La única informacíon extra que se tiene es que 
// el nombre del paciente contiene una "g" y "a", pero desconocemos si son mayúsculas o minúsculas. 
// A continuación se muestra a quién o quiénes puede pertenecer esta prescripción.
db.patients.find( { $and: [ { patient: { $regex: /g.*a/, $options: 'i' } } , { "medication.code": "112233"} ] } ).pretty()


// El hospital quiere realizar un sondeo entre los pacientes recientes sobre la comida del hospital.
// Se tendrán en cuenta a los pacientes que recibieron el alta desde el 10 de diciembre en adelante o que 
// continuén en el hospital. Además, dado que los medicamentos "033022" y "567890" alteran el metabolismo,
// no se encuestará a aquellos pacientes que los hayan tomado.
db.patients.find( { $and: [ { "medication.code": {$nin: ["567890", "033022"] } }, {$or: [ { discharge_date: {$exists: false} }, { discharge_date: {$gt: new Date("2021-11-10") } } ] } ] } ).pretty()


// El hospital se ha quedado sin reservas y necesita urgentemente sangre para el paciente Mike Morton. Los pacientes del registro
// podrán donar sangre siempre y cuando sean mayores de edad, pesen 50kg o más, estén sano, posean sangre compatible con el tipo 
// "AB-" (cualquiera con un Rh negativo) y no hayan recibido el medicamento "111111" o "888888" durante su estancia en el hospital.
db.patients.find( { $and: [ { patient: { $ne: "Mike Morton" } }, { age: { $gt: 17 } }, { weight_kg: { $gte: 50 } }, { blood_type: { $regex: /-$/ } }, { "medication.code": { $nin: ["111111", "888888"] } }, { full_recovery: true } ] } ).pretty()


// Muestra únicamente los pacientes que han sido atentidos por más de un médico, y donde la doctora Reznick haya participado.
db.patients.find( { "assigned_staff": { $type: "array", $eq: "Dr. Reznick" } } ).pretty()


// Muestra el tiempo de estancia total que han pasado los pacientes en el hospital, desde su ingreso hasta la fecha de alta.
// Aquellos pacientes que aún no hayan obtenido el alta, obtendrán el valor "null".
db.patients.aggregate( [ { $project: { patient: 1, staytime: { $divide: [ { $subtract: ["$discharge_date", "$admision_date"] }, 86400000] } } } ] ).pretty()
// También es posible redondear los datos númericos haciendo uso del operador $round. Lo haremos a 2 decimales.
db.patients.aggregate( [ { $project: { patient: 1, staytime: { $round: [ { $divide: [ { $subtract: [ "$discharge_date" , "$admision_date"] }, 86400000] }, 2 ] } } } ] )


// Muestra el IMC (Índice de Masa Corporal) de todos los pacientes del registro.
db.patients.aggregate( [ { $project: { patient: 1, IMC: { $round: [ { $divide: [ "$weight_kg" , { $multiply: ["$height_m", "$height_m"] } ] }, 2 ] } } } ] ).pretty()
