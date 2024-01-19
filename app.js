const {MongoClient, ObjectId} = require("mongodb");
const mongoose = require("mongoose");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017/fruitsDB";

mongoose.connect(uri);

const peopleSchema = new mongoose.Schema({
  name:String,
  age: Number
});
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Person = mongoose.model("Person", peopleSchema);
const Fruit = mongoose.model("Fruit", fruitSchema);

const person = new Person({
  name: "John",
  age: 36
});

// person.save().then(()=>console.log("Person added"));

const kiwi = new Fruit({
  name: "kiwi",
  rating: 10,
  review: "The best fruit"
});
const orange = new Fruit({
  name: "orange",
  rating: 4,
  review: "Sour taste"
});
const banana = new Fruit({
  name: "banana",
  rating: 3,
  review: "weird texture"
});

// Fruit.insertMany([kiwi, orange, banana]).then((d) => {
//   console.log("successfully insert many");
//   console.log(d);
// });

Fruit.find({},"name").exec().then((fruits)=> {
  mongoose.connection.close();
  fruits.forEach(fruit => {
    console.log(fruit.name);
  });
});