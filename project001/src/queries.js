
/*
Haciendo uso de /* es posible dejar comentarios invisibles
que mejorarán la comprensión del archivo. En este caso los
usaré para explicar la utilidad de cada una de estas consultas
y los resultados que obtendríamos con las mismas.
*/


db.hypmic.find({"edad":{$eq:24}}) /*Encontrar a los miembros de 24 años en la colección hypmic.*/
/*
{ "_id" : ObjectId("616cd2f8dd86733328c0f670"), "nombre" : "Ramuda Amemura", "edad" : 24, "altura" : 155, "banda" : { "nombrebanda" : "Fling Posse", "posicion" : "lider" } }
{ "_id" : ObjectId("616cd2f8dd86733328c0f671"), "nombre" : "Gentaro Yumeno", "edad" : 24, "altura" : 177, "banda" : { "nombrebanda" : "Fling Posse", "posicion" : "segundo" } }
{ "_id" : ObjectId("616cd2f8dd86733328c0f675"), "nombre" : "Doppo Kannozaka", "edad" : 24, "altura" : 177, "banda" : { "nombrebanda" : "Matenrou", "posicion" : "tercero" } }
*/

db.paradoxlive.find({"banda.nombrebanda":{$eq: "Akan Yatsura"}}) /*Encontrar a todos los miembros de la banda Akan Yatsura en la colección paradoxlife.*/
/*
{ "_id" : ObjectId("616cd311dd86733328c0f67b"), "nombre" : "Iori Suiseki", "edad" : 28, "altura" : 175, "banda" : { "nombrebanda" : "Akan Yatsura", "posicion" : "lider" } }
{ "_id" : ObjectId("616cd311dd86733328c0f67c"), "nombre" : "Zen Gaho", "edad" : 27, "altura" : 188, "banda" : { "nombrebanda" : "Akan Yatsura", "posicion" : "segundo" } }
{ "_id" : ObjectId("616cd311dd86733328c0f67d"), "nombre" : "Satsuki Ito", "edad" : 19, "altura" : 170, "banda" : { "nombrebanda" : "Akan Yatsura", "posicion" : "segundo" } }
{ "_id" : ObjectId("616cd311dd86733328c0f67e"), "nombre" : "Hokusai Masaki", "edad" : 24, "altura" : 193, "banda" : { "nombrebanda" : "Akan Yatsura", "posicion" : "tercero" } }
{ "_id" : ObjectId("616cd311dd86733328c0f67f"), "nombre" : "Reo Maruyama", "edad" : 17, "altura" : 162, "banda" : { "nombrebanda" : "Akan Yatsura", "posicion" : "tercero" } }
*/

db.hypmic.find({"altura":{$gt:180}}) /*Encontrar a los miembros que midan más de 180cm en la colección hypmic.*/
/*
{ "_id" : ObjectId("616cd2f8dd86733328c0f66a"), "nombre" : "Ichiro Yamada", "edad" : 19, "altura" : 185, "banda" : { "nombrebanda" : "Buster Bros", "posicion" : "lider" } }
{ "_id" : ObjectId("616cd2f8dd86733328c0f66d"), "nombre" : "Samatoki Aohitsugi", "edad" : 25, "altura" : 186, "banda" : { "nombrebanda" : "MAD TRIGGER CREW", "posicion" : "lider" } }
{ "_id" : ObjectId("616cd2f8dd86733328c0f66e"), "nombre" : "Jyuto Iruma", "edad" : 29, "altura" : 181, "banda" : { "nombrebanda" : "MAD TRIGGER CREW", "posicion" : "segundo" } }
{ "_id" : ObjectId("616cd2f8dd86733328c0f66f"), "nombre" : "Rio Mason Busujima", "edad" : 28, "altura" : 191, "banda" : { "nombrebanda" : "MAD TRIGGER CREW", "posicion" : "tercero" } }
{ "_id" : ObjectId("616cd2f8dd86733328c0f673"), "nombre" : "Jakurai Jinguji", "edad" : 37, "altura" : 195, "banda" : { "nombrebanda" : "Matenrou", "posicion" : "lider" } }
*/

db.paradoxlive.find({"altura":{$gte:178}}) /*Encontrar a los miembros que midan igual o más de 178cm en la colección paradoxlife.*/
/*
{ "_id" : ObjectId("616cd311dd86733328c0f676"), "nombre" : "Allen Sugasano", "edad" : 21, "altura" : 178, "banda" : { "nombrebanda" : "BAE", "posicion" : "lider" } }
{ "_id" : ObjectId("616cd311dd86733328c0f677"), "nombre" : "Yeon Hajun", "edad" : 21, "altura" : 185, "banda" : { "nombrebanda" : "BAE", "posicion" : "segundo" } }
{ "_id" : ObjectId("616cd311dd86733328c0f67c"), "nombre" : "Zen Gaho", "edad" : 27, "altura" : 188, "banda" : { "nombrebanda" : "Akan Yatsura", "posicion" : "segundo" } }
{ "_id" : ObjectId("616cd311dd86733328c0f67e"), "nombre" : "Hokusai Masaki", "edad" : 24, "altura" : 193, "banda" : { "nombrebanda" : "Akan Yatsura", "posicion" : "tercero" } }
{ "_id" : ObjectId("616cd311dd86733328c0f680"), "nombre" : "Chisei Kuzuryu", "edad" : 29, "altura" : 178, "banda" : { "nombrebanda" : "Buraikan", "posicion" : "lider" } }
{ "_id" : ObjectId("616cd311dd86733328c0f681"), "nombre" : "Haruomi Shingu", "edad" : 36, "altura" : 180, "banda" : { "nombrebanda" : "Buraikan", "posicion" : "segundo" } }
*/

db.hypmic.find({"edad":{$lte:20}}) /*Encontrar a los miembros que tengan igual o menos de 20 años en la colección hypmic.*/
/*
{ "_id" : ObjectId("616cd2f8dd86733328c0f66a"), "nombre" : "Ichiro Yamada", "edad" : 19, "altura" : 185, "banda" : { "nombrebanda" : "Buster Bros", "posicion" : "lider" } }
{ "_id" : ObjectId("616cd2f8dd86733328c0f66b"), "nombre" : "Jiro Yamada", "edad" : 17, "altura" : 180, "banda" : { "nombrebanda" : "Buster Bros", "posicion" : "segundo" } }
{ "_id" : ObjectId("616cd2f8dd86733328c0f66c"), "nombre" : "Saburo Yamada", "edad" : 14, "altura" : 173, "banda" : { "nombrebanda" : "Buster Bros", "posicion" : "tercero" } }
{ "_id" : ObjectId("616cd2f8dd86733328c0f672"), "nombre" : "Daisu Arisugawa", "edad" : 20, "altura" : 177, "banda" : { "nombrebanda" : "Fling Posse", "posicion" : "tercero" } }
*/

db.paradoxlive.find({"altura":{$ne:"Akan Yatsura"}}) /*Encontrar a los miembros que no pertenezcan a la banda Akan Yatsura en la colección paradoxlife.*/
/*
{ "_id" : ObjectId("616cd311dd86733328c0f676"), "nombre" : "Allen Sugasano", "edad" : 21, "altura" : 178, "banda" : { "nombrebanda" : "BAE", "posicion" : "lider" } }
{ "_id" : ObjectId("616cd311dd86733328c0f677"), "nombre" : "Yeon Hajun", "edad" : 21, "altura" : 185, "banda" : { "nombrebanda" : "BAE", "posicion" : "segundo" } }
{ "_id" : ObjectId("616cd311dd86733328c0f678"), "nombre" : "Anne Faulkner", "edad" : 20, "altura" : 175, "banda" : { "nombrebanda" : "BAE", "posicion" : "tercero" } }
{ "_id" : ObjectId("616cd311dd86733328c0f679"), "nombre" : "Kanata Yatonokami", "edad" : 19, "altura" : 165, "banda" : { "nombrebanda" : "Cozmez", "posicion" : "lider" } }
{ "_id" : ObjectId("616cd311dd86733328c0f67a"), "nombre" : "Nayuta Yatonokami", "edad" : 19, "altura" : 163, "banda" : { "nombrebanda" : "Cozmez", "posicion" : "segundo" } }
{ "_id" : ObjectId("616cd311dd86733328c0f67b"), "nombre" : "Iori Suiseki", "edad" : 28, "altura" : 175, "banda" : { "nombrebanda" : "Akan Yatsura", "posicion" : "lider" } }
{ "_id" : ObjectId("616cd311dd86733328c0f67c"), "nombre" : "Zen Gaho", "edad" : 27, "altura" : 188, "banda" : { "nombrebanda" : "Akan Yatsura", "posicion" : "segundo" } }
{ "_id" : ObjectId("616cd311dd86733328c0f67d"), "nombre" : "Satsuki Ito", "edad" : 19, "altura" : 170, "banda" : { "nombrebanda" : "Akan Yatsura", "posicion" : "segundo" } }
{ "_id" : ObjectId("616cd311dd86733328c0f67e"), "nombre" : "Hokusai Masaki", "edad" : 24, "altura" : 193, "banda" : { "nombrebanda" : "Akan Yatsura", "posicion" : "tercero" } }
{ "_id" : ObjectId("616cd311dd86733328c0f67f"), "nombre" : "Reo Maruyama", "edad" : 17, "altura" : 162, "banda" : { "nombrebanda" : "Akan Yatsura", "posicion" : "tercero" } }
{ "_id" : ObjectId("616cd311dd86733328c0f680"), "nombre" : "Chisei Kuzuryu", "edad" : 29, "altura" : 178, "banda" : { "nombrebanda" : "Buraikan", "posicion" : "lider" } }
{ "_id" : ObjectId("616cd311dd86733328c0f681"), "nombre" : "Haruomi Shingu", "edad" : 36, "altura" : 180, "banda" : { "nombrebanda" : "Buraikan", "posicion" : "segundo" } }
*/

db.hypmic.find({$and:[{"banda.posicion":{$eq:"lider"}, "edad":{$lt:25}}]}) /*Encontrar a los miembros que sean lideres con menos 25 años la colección hypmic.*/
/*
{ "_id" : ObjectId("616cd2f8dd86733328c0f66a"), "nombre" : "Ichiro Yamada", "edad" : 19, "altura" : 185, "banda" : { "nombrebanda" : "Buster Bros", "posicion" : "lider" } }
{ "_id" : ObjectId("616cd2f8dd86733328c0f670"), "nombre" : "Ramuda Amemura", "edad" : 24, "altura" : 155, "banda" : { "nombrebanda" : "Fling Posse", "posicion" : "lider" } }
*/