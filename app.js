const {MongoClient, ObjectId} = require("mongodb");
const mongoose = require("mongoose");

// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017/fruitsDB";

mongoose.connect(uri);

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const peopleSchema = new mongoose.Schema({
  name:String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", peopleSchema);
const Fruit = mongoose.model("Fruit", fruitSchema);

const person = new Person({
  name: "John",
  age: 36
});

// person.save().then(()=>{
//   mongoose.connection.close();
//   console.log("Person added !");
// });

const pineapple = new Fruit({
  name: "pineapple",
  rating: 10,
  review: "Great fruit."
});
pineapple.save().then(console.log("successfully added pineapple"),(e)=>console.log(e));;

const amy = new Person({
  name: "Amy",
  age: 12,
  favoriteFruit: pineapple
});
amy.save().then(console.log("successfully added amy"),(e)=>console.log(e));


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
  rating: 10,
  review: "Peaches are so yummy !"
});

// Fruit.insertMany([kiwi, orange, banana, peach]).then((fruits)=> {
//   mongoose.connection.close();
//   console.log("insert successfully");
//   console.log(fruits);
// });

// Fruit.find({},"name").exec().then((fruits)=> {
//   mongoose.connection.close();
//   fruits.forEach(fruit => {
//     console.log(fruit.name);
//   });
// });

// Fruit.updateOne({_id: "65ab3ac329c80e14f93bb4ab"}, {name: "Peach"}).then((fruits) => {
//   mongoose.connection.close();
//   console.log("Succesfully updated !");
//   console.log(fruits);
// });

// Fruit.deleteOne({_id: "65ab3ac329c80e14f93bb4ab"}).then((fruits) => {
//   mongoose.connection.close();
//   console.log("Successfully removed !");
//   console.log(fruits);
// });

// Person.deleteMany({name: "John"}).then((persons)=> {
//   mongoose.connection.close();
//   console.log("Successfully delete many");
//   console.log(persons);
// });