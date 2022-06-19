const express = require("express");
const pool = require("../dbConfig");
const router = express.Router();

router.get("/behavioral-interview-skill-analysis", (req, res) => {
  const query =
    "SELECT AVG(behavioral_interview_score)* 10  AS behavioral_interview_skill_score FROM interview WHERE account_holder = ?";

  pool.query(query, [req.user], (error, results, fields) => {
    if (error) {
      res.status(400).send(error);
    }
    if (results.length == 0) {
      res.status(407).send("No behavioral interview Scores found");
    } else {
      res.status(200).send(results);
    }
  });
});

router.get("/coding-interview-skill-analysis", (req, res) => {
  const query =
    "SELECT AVG(coding_interview_score)* 10  AS coding_interview_skill_score FROM interview WHERE account_holder = ?";

  pool.query(query, [req.user], (error, results, fields) => {
    if (error) {
      res.status(400).send(error);
    }
    if (results.length == 0) {
      res.status(407).send("No coding interview Scores found");
    } else {
      res.status(200).send(results);
    }
  });
});
router.get("/system-design-interview-skill-analysis", (req, res) => {
  const query =
    "SELECT AVG(systemDesign_interview_score)* 10  AS systemDesign_interview_skill_score FROM interview WHERE account_holder = ?";

  pool.query(query, [req.user], (error, results, fields) => {
    if (error) {
      res.status(400).send(error);
    }
    if (results.length == 0) {
      res.status(407).send("No system design interview Scores found");
    } else {
      res.status(200).send(results);
    }
  });
});
router.get("/interview-success-rate", (req, res) => {
  const query =
    "SELECT interview_received, COUNT(interview_received) AS interview_COUNT,COUNT(interview_received) /(SELECT COUNT(interview_received) FROM application)* 100 AS INTERVIEW_INVITATION_PERCENTAGE FROM application WHERE account_holder = ? GROUP BY interview_received";

  pool.query(query, [req.user], (error, results, fields) => {
    if (error) {
      res.status(400).send(error);
    }
    if (results.length == 0) {
      res
        .status(407)
        .send("No Interviews Associted with this account Recorded");
    } else {
      res.status(200).send(results);
    }
  });
});
router.get("/offer-success-rate", (req, res) => {
  const query =
    "SELECT offer_received, COUNT(offer_received) AS count, COUNT(offer_received) / (SELECT COUNT(offer_received)FROM application WHERE interview_received= ?)* 100 AS PERCENTAGE FROM application WHERE interview_received=? AND account_holder= ? GROUP BY offer_received";
  const values = ["T", "T", req.user];
  pool.query(query, values, (error, results, fields) => {
    if (error) {
      res.status(400).send(error);
    }
    if (results.length == 0) {
      res
        .status(407)
        .send("No Interviews Associted with this account Recorded");
    } else {
      res.status(200).send(results);
    }
  });
});

module.exports = router;
