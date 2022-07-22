const express = require("express");
const pool = require("../dbConfig");
const router = express.Router();

router.post("/:AppID", async (req, res) => {
  const query =
    "INSERT INTO hiring_contact (first_name, last_name, contact_position, company, email, phone, app_id, account_holder) VALUES(?,?,?,?,?,?,?,?)";
  const contact = [
    req.body.first,
    req.body.last,
    req.body.position,
    req.body.company,
    req.body.email,
    req.body.phone,
    req.params.AppID,
    req.user,
  ];
  pool.query(query, contact, (error, results, fields) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(results);
    }
  });
});
router.get("/", async (req, res) => {
  const query = "SELECT * FROM hiring_contact WHERE account_holder = ?";
  const account_holder = req.user;
  pool.query(query, [account_holder], (error, results, fields) => {
    if (error) {
      console.log("Error: " + error);
      res.status(400).send(error);
    }
    if (results.length == 0) {
      res.status(204).send("No Hiring Contacts to view");
    } else {
      res.status(200).send(results);
    }
  });
});
router.get("/:AppID", async (req, res) => {
  const query = "SELECT * FROM hiring_contact WHERE app_id = ?";
  pool.query(query, req.params.AppID, (error, results, fields) => {
    if (error) {
      res.status(400).send(error);
    }
    if (results.length == 0) {
      res.status(204).send("No Hiring Contacts to view");
    } else {
      res.status(200).send(results);
    }
  });
});

router.delete("/:contact_id", (req, res) => {
  const query = "DELETE FROM hiring_contact WHERE contact_id = ?";
  pool.query(query, [req.params.contact_id], (error, results, fields) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(results);
    }
  });
});

module.exports = router;
