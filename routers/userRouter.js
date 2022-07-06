const express = require("express");
const Model = require("../models/userModel");

const router = express.Router();

router.post("/add", (req, res) => {
  // to extract data from request and save to database
  const data = req.body;
  console.log(data);

  new Model(req.body)
    .save()
    .then((data) => {
      console.log("user data saved!");
      res.status(200).json({ message: "success" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getall", (req, res) => {
  Model.find({})
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;