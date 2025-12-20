const express = require("express");
const { v4: uuidv4 } = require("uuid"); 
const methodOverride = require("method-override");
const app = express();
const port = 3000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

let posts = [
    {
        id: uuidv4(),
        username: "ankitvadnere",
        content: "I am currently learning WEB DEVELOPMENT!"
    },
    {
        id: uuidv4(),
        username: "amoghyadav",
        content: "I got 9.11 CGPA!"
    },
    {
        id: uuidv4(),
        username: "harshitadiwane",
        content: "I got an internship!"
    }
];

app.get("/", (req, res) => {
    res.send("Server Working Properly");
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) => {
    res.render("newpost.ejs");
});

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("post.ejs", {post});
});

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});

app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    let newContent = req.body.content;
    post.content = newContent;
    res.redirect("/posts");
});

app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});