const Student = require('../models/student');

const createStudent = async (req,res) => {
    try{
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
};

module.exports = { createStudent };