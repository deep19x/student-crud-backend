const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.route("/")
.post(studentController.createStudent)
.get(studentController.getStudents)

router.route("/:id")
.get(studentController.getStudentbyId)
.put(studentController.updateStudentbyId)
.delete(studentController.deleteStudentbyId)

module.exports = router;