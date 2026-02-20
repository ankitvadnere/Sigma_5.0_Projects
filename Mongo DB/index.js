const mongoose = require('mongoose');

main()
.then(() => {
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);
//     ^                      ^
//    Model               Collection

// //Inserting in Mongo DB
// const user1 = new User({ name:"Ankit", email:"ankit@gmail.com", age: 19 })
// const user2 = new User({ name:"Harshita", email:"harshita@gmail.com", age: 19 })

// user1.save();
// user2.save();

// // Inserting many documents at same time 
// User.insertMany([
//     {name: "Amogh", email: "amogh@gmail.com", age: 19},
//     {name: "Anushka", email: "anushka@gmail.com", age: 20},
//     {name: "Abhiram", email: "abhiram@gmail.com", age: 19},
// ]).then((res) => {
//     console.log(res);
// })

// // Searching documents
// User.find({age: {$gt: 19}})
// .then((res) => {
//     console.log(res[0]);
// })
// .catch((err) => {
//     console.log(err);
// })

// User.findById('698b4466327fb70619421134')
// .then((res) => {
//     console.log(res);
// }) 
// .catch((err) => {
//     console.log(err);
// })

// // Update documents
// User.updateOne({name: "Ankit"}, {age: 20})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// User.findOneAndUpdate({name: "Harshita"},{age: 20},{new: true})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// // Delete documents
// User.deleteOne({name: "Anushka"})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })