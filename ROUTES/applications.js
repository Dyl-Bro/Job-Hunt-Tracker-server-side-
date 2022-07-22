const express = require("express");
const pool = require("../dbConfig");
const router = express.Router();

router.post("/", async (req, res) => {
  const query =
    "INSERT INTO application (app_date, company_name, location, link_to_posting, interview_received, offer_received, account_holder) VALUES(?, ?, ?, ?, ?, ?, ?)";
  const application = [
    req.body.appDate,
    req.body.companyName,
    req.body.location,
    req.body.link,
    req.body.interviewReceived,
    req.body.offerReceived,
    req.user,
  ];
  if (application[4].toLowerCase() === "true") {
    application[4] = "T";
  } else if (application[4].toLowerCase() === "false") {
    application[4] = "F";
  }
  if (application[5].toLowerCase() === "false") {
    application[5] = "F";
  } else if (application[5].toLowerCase() === "true") {
    application[5] = "T";
  }
  pool.query(query, application, (error, results, fields) => {
    if (error) {
      console.log("ERROR!!!! " + error);
      res.status(400).send(error);
    } else {
      res.status(200).send(results);
    }
  });
});

router.get("/", async (req, res) => {
  const query = "SELECT * FROM application WHERE account_holder = ?";
  const account_holder = req.user;
  pool.query(query, [account_holder], (error, results, fields) => {
    if (error) {
      res.status(400).send(error);
    }
    if (results.length == 0) {
      res.status(204).send("No Applications to view");
    } else {
      res.status(200).send(results);
    }
  });
});

router.get("/:applicationId", async (req, res) => {
  const query =
    "SELECT * FROM application WHERE account_holder = ? AND app_id = ?";
  const values = [req.user, req.params.applicationId];
  pool.query(query, values, (error, results, fields) => {
    if (error) {
      res.status(400).send(error);
    }
    if (results.length == 0) {
      res.status(204).send("No Applications to view");
    } else {
      res.status(200).send(results);
    }
  });
});

router.put("/:app_id", (req, res) => {
  const query =
    "UPDATE application SET interview_received = ?, offer_received = ? WHERE app_id = ?";
  const updateFields = [
    req.body.interview_received,
    req.body.offer_received,
    req.params.app_id,
  ];
  if (updateFields[0].toLowerCase() === "true") {
    updateFields[0] = "T";
  } else if (updateFields[0].toLowerCase() === "false") {
    updateFields[0] = "F";
  }
  if (updateFields[1].toLowerCase() === "false") {
    updateFields[1] = "F";
  } else if (updateFields[1].toLowerCase() === "true") {
    updateFields[1] = "T";
  }
  pool.query(query, updateFields, (error, results, fields) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(results);
    }
  });
});

router.delete("/:app_id", (req, res) => {
  const query = "DELETE FROM application WHERE app_id = ?";
  pool.query(query, [req.params.app_id], (error, results, fields) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(results);
    }
  });
});

module.exports = router;
