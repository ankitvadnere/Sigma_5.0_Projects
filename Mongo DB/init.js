// This is to insert some sample data into the database at the start to test functions on the database

const mongoose = require("mongoose");
const chat = require("./models/chat.js");

main()
.then(() => {
    console.log("Connection Successful!");
})
.catch((err) => {
    console.log(err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let sampleChats = [
    {
        from: "Amogh",
        to: "Abhiram",
        msg: "Kya karra hai re?",
        createdAt: new Date()
    },
    {
        from: "Ankit",
        to: "Harshita",
        msg: "Good Morning!",
        createdAt: new Date()
    },
    {
        from: "Harshita",
        to: "Ankit",
        msg: "Good Night!",
        createdAt: new Date()
    },
    {
        from: "Ram",
        to: "Aastha",
        msg: "Blood D !!!!",
        createdAt: new Date()
    },
    {
        from: "Aastha",
        to: "Ram",
        msg: "Kya re Ram KHADUU !!",
        createdAt: new Date()
    }
];

chat.insertMany(sampleChats)
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});