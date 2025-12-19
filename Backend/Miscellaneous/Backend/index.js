const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true})); //This is used to convert the url encoded data from any request to express readable form

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})

app.get("/register", (req, res) => {
    let {user, password} = req.query;
    res.send(`This is a GET request. Welcome ${user}`);
})

app.post("/register", (req, res) => {
    let {user, password} = req.body;
    res.send(`This is a POST request. Welcome ${user}`); 
})