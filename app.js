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
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
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
const peach = new Fruit({
  name: "peach",
  rating: 10,
  review: "Peaches are so yummy !"
});

Fruit.insertMany([kiwi, orange, banana, peach]);

Fruit.find({},"name").exec().then((fruits)=> {
  mongoose.connection.close();
  fruits.forEach(fruit => {
    console.log(fruit.name);
  });
});