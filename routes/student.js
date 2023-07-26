const express = require("express");
const router = express.Router();
const Student = require("../models/student");

// handler function
const respHandler = (res, student) => {
  console.log(student);
  res.json({ student: "ok", student });
};

const errHandler = (res, err) => {
  let errorMsg = "an error occured:" + err;
  console.log(errorMsg);
  return res.json({ status: errorMsg }).status(500);
};

// get students listing
router.get("/", (req, res) => {
  res.send("student info");
});

// create new student
router.post("/", (req, res) => {
    console.log(req.body.student)
  const student = new Student(req.body.student);
  student
    .save()
    .then((resp) => respHandler(res, resp))
    .catch((err) => errHandler(res, err));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Student.findById(id)
    .exec()
    .then((resp) => respHandler(res, resp))
    .catch((err) => errHandler(res, err));
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    Student.findById(id)
      .exec()
      .then((resp) => respHandler(res, resp))
      .catch((err) => errHandler(res, err));
  });

module.exports = router;
