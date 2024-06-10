const express = require('express')
const app = express()
const port = 3000
var jwt = require('jsonwebtoken');
const config = require("./config");
const auth = require("./auth");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.json({ status: "reg OK" });
})

app.post('/register',  (req, res) => {
  const payload = {
    username: req.body.username,
    email: req.body.email,
  }
  console.log(config.jwt.options.alogrithm);

  const token = jwt.sign(payload, config.jwt.secret,config.jwt.options);

  const body = {
    username: req.body.username,
    email: req.body.email,
    token: token,
  }


  res.status(200).json(body);
})

app.get("/login", (req, res) => {
  res.status(200).json({
    msg: "Login Successful",
  });


})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
