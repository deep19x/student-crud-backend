const Student = require('../models/student');

module.exports.createStudent = async (req,res) => {
    try{
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
};

module.exports.getStudents = async(req,res) => {
    try{
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

module.exports.getStudentbyId = async(req,res) => {
    try{
        const student = await Student.findById(req.params.id);

        if(!student){
            return res.status(404).json({message:"Student not Found!"});
        }

        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

module.exports.updateStudentbyId = async(req,res) => {
    try{
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});

        if(!updatedStudent){
            res.status(404).json({message:"Student not Found!"});
        }

        res.status(200).json(updatedStudent);
    } catch(error){
        res.status(500).json({message:error.message});
    }
};

module.exports.deleteStudentbyId = async(req,res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);

        if(!deletedStudent){
            res.status(404).json({message:"Student not Found!"});
        }

        res.status(200).json(deletedStudent);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}