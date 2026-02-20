const mongoose = require('mongoose');

main()
.then(() => {
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
};

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 30
    },
    author: {
        type: String
    }, 
    price: {
        type: Number,
        min: [1, "ERROR: Price is too low"]
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["Fiction", "Non-Fiction"] // Enum means the value of category can only be any one from these two and anything execpt this will throw a error
    }
});

const book = mongoose.model("book", bookSchema);

// let book1 = new book ({
//     title: "Web Development Delta 5.0",
//     author: "Shraddha Khapra",
//     price: 3500 ====> Here we can also write "3500" as it is a number it will be casted or parsed to data type Number, but if we put "abc" then it will not be accepted and a throw a cast error as it is not able to cast it into Number data type
// });

// book1.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// }); 

// let book2 = new book ({
//     title: "Harry Potter",
//     author: "J K Howling",
//     price: "679",
// }); // Here it automatically sets discount to default value 0

// book2.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// let book3 = new book ({
//     title: "This is just a veryyyyyyyyyyyy longgggg title", // This is to test the maxlength constraint
//     author: "tester",
//     price: -450, // This is to test the min constraint on price
//     category: "adventure" // Adventure is not defined in the enum array so this will throw an error
// });

// book3.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

book.findByIdAndUpdate('6990ba8df3e1396b25fc8443', {price: -100}, {runValidators: true}) // If we just do like this it will not see the contraints of price not allowed less than 1 if we want it to follow the constraints we write "runvalidators: true"
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err.errors.price.properties.message);
});