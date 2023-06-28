db.hypmic.deleteMany({})
db.hypmic.insertMany(
    [
        {nombre: "Ichiro Yamada", edad: 19, altura: 185, banda: {nombrebanda: "Buster Bros", posicion: "lider"}},
        {nombre: "Jiro Yamada", edad: 17, altura: 180, banda: {nombrebanda: "Buster Bros", posicion: "segundo"}},
        {nombre: "Saburo Yamada", edad: 14, altura: 173, banda: {nombrebanda: "Buster Bros", posicion: "tercero"}},
        {nombre: "Samatoki Aohitsugi", edad: 25, altura: 186, banda: {nombrebanda: "MAD TRIGGER CREW", posicion: "lider"}},
        {nombre: "Jyuto Iruma", edad: 29, altura: 181, banda: {nombrebanda: "MAD TRIGGER CREW", posicion: "segundo"}},
        {nombre: "Rio Mason Busujima", edad: 28, altura: 191, banda: {nombrebanda: "MAD TRIGGER CREW", posicion: "tercero"}},
        {nombre: "Ramuda Amemura", edad: 24, altura: 155, banda: {nombrebanda: "Fling Posse", posicion: "lider"}},
        {nombre: "Gentaro Yumeno", edad: 24, altura: 177, banda: {nombrebanda: "Fling Posse", posicion: "segundo"}},
        {nombre: "Daisu Arisugawa", edad: 20, altura: 177, banda: {nombrebanda: "Fling Posse", posicion: "tercero"}},
        {nombre: "Jakurai Jinguji", edad: 37, altura: 195, banda: {nombrebanda: "Matenrou", posicion: "lider"}},
        {nombre: "Hifumi Izanami", edad: 29, altura: 179, banda: {nombrebanda: "Matenrou", posicion: "segundo"}},
        {nombre: "Doppo Kannozaka", edad: 24, altura: 177, banda: {nombrebanda: "Matenrou", posicion: "tercero"}}

]
)