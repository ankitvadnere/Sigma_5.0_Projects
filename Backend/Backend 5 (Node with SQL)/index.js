// 






// // let q = "SHOW TABLES";

// //INSERT DATA IN TABLE (USING PLACEHOLDERS '?')

// let q = "INSERT INTO users (id, username, email, password) VALUES ?;";

// let data = [];
// for (let i = 1; i <= 100; i++) {
//   data.push(getUsers()); //100 fake users
// }

// try {
//     connection.query(q, [data], (err, result) => { // In this the user 1 would be referenced and taken values from if there are placeholders in "q"
//         if (err) throw err;
//         console.log(result);
//     })
// } catch (err) {
//     console.log(err);
// }

// connection.end();


// <------ Routing --------->

const express = require("express");
const app = express();
const path = require("path");
const PORT = 8080;
const methodOverride = require("method-override");
const { faker } = require('@faker-js/faker');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));

const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test',
  password: 'Ankit@236812'
});

function getUserId() {
  return faker.string.uuid();
}

//Home Page Route
app.get("/", (req, res) => {
  let q = "SELECT COUNT(*) FROM users";

  try {
    connection.query(q, (err, result) => {
      if(err) throw err;
      let userCount = result[0]["COUNT(*)"];
      res.render("home.ejs", {userCount});
    })
  } catch (err) {
    res.send(err);
  }
})

//Show users route
app.get('/user', (req, res) => {
  let q = "SELECT * FROM users";
  
  try {
    connection.query(q, (err, result) => {
      if(err) throw err;
      let users = result;
      res.render("showusers.ejs", {users});
    })
  } catch (err) {
    res.send(err);
  }
})

//Edit route
app.get('/user/:id/edit', (req, res) => {
  let {id} = req.params;
  let q = `SELECT * FROM users WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", {user});
    })
  } catch (err) {
    res.send(err);
  }
})

//Update route
app.patch("/user/:id", (req, res) => {
  let {id} = req.params;
  let {password: formPass, username: newUsername} = req.body;
  let q = `SELECT * FROM users WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (user.password != formPass) {
        res.send("Wrong Password");
      } else {
        let q2 = `UPDATE users SET username = '${newUsername}' WHERE id = '${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("http://localhost:8080/user");
        })
      }
    })
  } catch (err) {
    res.send(err);
  }
})

//delete route
app.get('/user/:id/delete', (req, res) => {
  let {id} = req.params;
  let q = `SELECT * FROM users WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("delete.ejs", {user});
    })
  } catch (err) {
    res.send(err);
  }
})

//Deleting user route
app.delete('/user/:id', (req, res) => {
  let {id} = req.params;
  let {pass: formPass, email: formEmail} = req.body;
  let q = `SELECT * FROM users WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (user.password != formPass || user.email != formEmail) {
        res.send("Wrong Credentials");
      } else {
        let q2 = `DELETE FROM users WHERE id = '${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("http://localhost:8080/user");
        })
      }
    })
  } catch (err) {
    res.send(err);
  }
})

app.get('/user/new', (req, res) => {
  res.render('newUser.ejs');
})

//Adding new User route
app.post('/user/add', (req, res) => {
  let {email: formEmail, pass: formPass, username: formUsername} = req.body;
  let id = getUserId();
  let q = `INSERT INTO users (id, username, email, password) VALUES ('${id}', '${formUsername}', '${formEmail}', '${formPass}')`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      res.redirect("http://localhost:8080/user");
    })
  } catch (err) {
    res.send(err);
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})