const express = require("express");
const pool = require("../dbConfig");
const router = express.Router();

router.post("/:AppID", async (req, res) => {
  const query =
    "INSERT INTO interview (positive_notes, negative_notes,  behavioral_interview_score, coding_interview_score, systemDesign_interview_score, company_name, app_id, account_holder) VALUES (?,?,?,?,?,?,?,?)";
  const interview = [
    req.body.positiveNotes,
    req.body.negativeNotes,
    req.body.behavioralInterviewScore,
    req.body.codingInterviewScore,
    req.body.systemDesignInterviewScore,
    req.body.companyName,
    req.params.AppID,
    req.user,
  ];
  pool.query(query, interview, (error, results, fields) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(results);
    }
  });
});
router.put("/:interview_id", (req, res) => {
  const query =
    "UPDATE interview SET behavioral_interview_score = ?, coding_interview_score = ?, systemDesign_interview_score = ? WHERE interview_id = ?";
  const updateFields = [
    req.body.behavioral_interview_score,
    req.body.coding_interview_score,
    req.body.systemDesign_interview_score,
    req.params.interview_id,
  ];
  pool.query(query, updateFields, (error, results, fields) => {
    if (error) {
      console.log(error);
      res.status(400).send(error);
    } else {
      res.status(200).send(results);
    }
  });
});

router.get("/", async (req, res) => {
  const query = "SELECT * FROM interview WHERE account_holder = ?";
  pool.query(query, req.user, (error, results, fields) => {
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
router.get("/:id", async (req, res) => {
  const query = "SELECT * FROM interview WHERE interview_id = ?";
  pool.query(query, req.params.id, (error, results, fields) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(results);
    }
  });
});

router.delete("/:interview_id", (req, res) => {
  const query = "DELETE FROM interview WHERE interview_id = ?";
  pool.query(query, [req.params.interview_id], (error, results, fields) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(results);
    }
  });
});

module.exports = router;
