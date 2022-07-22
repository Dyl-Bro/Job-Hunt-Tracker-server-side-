const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../dbConfig");
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  const secret = process.env.SECRET;
  const query = "SELECT * FROM AccountHolder WHERE email = ?";
  const email = req.body.email;
  const password = req.body.password;
  pool.query(query, [email], (error, results, fields) => {
    if (error) {
      console.log(error);
      res.status(400).send(error);
    }
    if (results.length == 0) {
      res.status(407).send("No account registered to this email!");
    }
    if (
      results.length > 0 &&
      bcrypt.compareSync(password, results[0].pass_word)
    ) {
      const token = jwt.sign({ user_id: results[0].user_id }, secret, {
        expiresIn: "1d",
      });
      res.cookie("AuthToken", token, { httpOnly: true });
      res.status(200).send({
        user_id: results[0].user_id,
        accountHolder: results[0].email,
        token,
      });
    } else if (results.length > 0 && password == results[0].pass_word) {
      const token = jwt.sign({ user_id: results[0].user_id }, secret, {
        expiresIn: "1d",
      });
      res.cookie("AuthToken", token, { httpOnly: true });
      res.status(200).send({
        user_id: results[0].user_id,
        accountHolder: results[0].email,
        token,
      });
    } else {
      res.status(400).send("Authorization Failed");
    }
  });
});

router.post("/register", async (req, res) => {
  const query =
    "INSERT INTO AccountHolder( first_name, last_name, email, pass_word) VALUES (?, ?, ?, ?)";

  let accountHolder = [
    req.body.first,
    req.body.last,
    req.body.email,
    bcrypt.hashSync(req.body.password, 10),
  ];
  pool.query(query, accountHolder, (error, results, fields) => {
    if (error) {
      res.status(400).send(error);
      console.log(error);
    } else {
      res.status(200).send(results);
    }
  });
});
router.get("/:id", (req, res) => {
  const query =
    "SELECT user_id, first_name FROM AccountHolder WHERE user_id =?";
  pool.query(query, [req.params.id], (error, results, fields) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send({
        user_id: results[0].user_id,
        first_name: results[0].first_name,
      });
    }
  });
});

module.exports = router;
