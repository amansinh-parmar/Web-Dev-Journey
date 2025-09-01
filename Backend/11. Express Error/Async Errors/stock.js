const mongoose = require("mongoose");

const Product = require("./product");

mongoose
  .connect("mongodb://127.0.0.1:27017/UnisexStore", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  //  To check wather it get an error.
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!");
  })
  .catch((err) => {
    console.log("OHH NO IT'S MONGO ERROR!!!!");
    console.log(err);
  });

// =============== Add Single "Item/Product" ===============
/*
const p = new Product({
  name: "T-Shirt",
  price: 10,
  category: "Clothes",
});

p.save()
.then(p =>{
    console.log(p);
})
.catch(e =>{
    console.log(e);
})
*/

// =============== Clarification: ===============
/*
- insertMany() saves data automatically without .save().

- don’t need to use .save() even for single inserts if using create() or insertOne() — they also save automatically.

.save() is only required if manually creating a new instance like const p = new Product(...).

*/

const stockProduct = [
  {
    name: "Rolex",
    price: 900,
    category: "watch",
  },
  {
    name: "Nike Air Jordan",
    price: 249,
    category: "shoes",
  },
  {
    name: "Cap",
    price: 40,
    category: "accessories",
  },
  {
    name: "Jack n Jones",
    price: 89,
    category: "clothes",
  },
];

Product.insertMany(stockProduct)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
