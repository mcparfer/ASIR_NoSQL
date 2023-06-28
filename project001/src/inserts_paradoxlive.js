db.paradoxlive.deleteMany({})
db.paradoxlive.insertMany(
    [
        {nombre: "Allen Sugasano", edad: 21, altura: 178, banda: {nombrebanda: "BAE", posicion: "lider"}},
        {nombre: "Yeon Hajun", edad: 21, altura: 185, banda: {nombrebanda: "BAE", posicion: "segundo"}},
        {nombre: "Anne Faulkner", edad: 20, altura: 175, banda: {nombrebanda: "BAE", posicion: "tercero"}},
        {nombre: "Kanata Yatonokami", edad: 19, altura: 165, banda: {nombrebanda: "Cozmez", posicion: "lider"}},
        {nombre: "Nayuta Yatonokami", edad: 19, altura: 163, banda: {nombrebanda: "Cozmez", posicion: "segundo"}},
        {nombre: "Iori Suiseki", edad: 28, altura: 175, banda: {nombrebanda: "Akan Yatsura", posicion: "lider"}},
        {nombre: "Zen Gaho", edad: 27, altura: 188, banda: {nombrebanda: "Akan Yatsura", posicion: "segundo"}},
        {nombre: "Satsuki Ito", edad: 19, altura: 170, banda: {nombrebanda: "Akan Yatsura", posicion: "segundo"}},
        {nombre: "Hokusai Masaki", edad: 24, altura: 193, banda: {nombrebanda: "Akan Yatsura", posicion: "tercero"}},
        {nombre: "Reo Maruyama", edad: 17, altura: 162, banda: {nombrebanda: "Akan Yatsura", posicion: "tercero"}},
        {nombre: "Chisei Kuzuryu", edad: 29, altura: 178, banda: {nombrebanda: "Buraikan", posicion: "lider"}},
        {nombre: "Haruomi Shingu", edad: 36, altura: 180, banda: {nombrebanda: "Buraikan", posicion: "segundo"}}

]
)