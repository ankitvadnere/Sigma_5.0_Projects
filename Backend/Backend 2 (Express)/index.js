const express = require("express");

const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})

// app.use((req, res) => {
//     console.log("Req recieved");
//     let code = 
//     `
//         <h1>Fruits</h1>
//         <ul>
//             <li>Apple</li>
//             <li>Mango</li>
//             <li>Grape</li>
//         </ul>
//     `
//     res.send(code);
// })

app.get("/", (req, res) => {
    res.send("Hello, Welcome to the root path");
})

// app.get("/apple", (req, res) => {
//     res.send("You are at the apple path");
// })

// app.get("/orange", (req, res) => {
//     res.send("You are at the orange path");
// })

// app.get((req, res) => { // This is executed if all the above paths didn't match with the server side call
//     res.send("This path does not exist"); 
// })

// app.get("/:username/:id", (req, res) => { // Here we can take variable parameters in the routes to give a specialized response everytime
//     let { username, id } = req.params; 
//     res.send(`Hi, ${username}. Your id is ${id}`);
// })

app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q) {
        res.send("Nothing Searched");
    }
    res.send(`Search results for ${q}`);
})