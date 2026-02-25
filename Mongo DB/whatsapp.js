const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

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

app.get("/", (req, res) => {
    res.send("Root is working");
});

//All chats
app.get("/chats",async (req, res) => { // We are using async bcz it is fetching data from data base and that's why we used await so for await there should be async
    let chats = await chat.find();
    res.render("chats.ejs", { chats });
});

//New Chat button
app.get("/chats/new", (req, res) => {
    res.render("newChat.ejs");
});

//Creating new chat
app.post("/chats", (req, res) => {
    let { from, to, msg } = req.body;
    let newChat = new chat({
        from: from,
        to: to,
        msg: msg,
        createdAt: new Date()
    });
    newChat.save()
    .then((res) => { // If we are using 'then', then we don't have to use async and await
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
    res.redirect("/chats");
});

//Edit message button
app.get("/chats/:id/edit", async (req, res) => {
    let {id} = req.params;
    let editableChat = await chat.findById(id);
    res.render("edit.ejs", {editableChat});
});

//Update the message
app.put("/chats/:id", async (req, res) => {
    let {id} = req.params;
    let {msg: newMsg} = req.body;
    let updatedChat = await chat.findByIdAndUpdate(id, {msg: newMsg}, {runValidators: true, new: true});
    console.log(updatedChat);
    res.redirect("/chats");
});

//Delete message
app.delete("/chats/:id", async (req, res) => {
    let {id} = req.params;
    let deletedChat = await chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
})

app.listen(8080, () => {
    console.log("Server listening on port 8080");
});