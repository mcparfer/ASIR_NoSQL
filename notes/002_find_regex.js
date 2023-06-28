db.products.drop()
db.products.insertMany([
    { "_id" : 100, sku : "abc123", "description" : "Single line description." },
    { "_id" : 101, sku : "abc789", "description" : "First line\nSecond line" },
    { "_id" : 102, "sku" : "xyz456", "description" : "Many spaces before     line" },
    { "_id" : 103, "sku" : "xyz789", "description" : "Multiple\nline description" },
])

db.products.find( { sku: { $regex: /789$/ } } ).pretty()
db.products.find( { sku: { $regex: /^abc/ } } ).pretty()
db.products.find( { sku: { $regex: /^aBc/i } } ).pretty()
db.products.find( { description: { $regex: /^S/ } } ).pretty()
db.products.find( { description: { $regex: /^S/m } } ).pretty()
db.products.find( { description: { $regex: /^S/im } } ).pretty()

db.products.find( { description: { $regex: /b/ } } ).pretty()

db.products.find( { description: { $regex: /m.*line/si } } ).pretty()