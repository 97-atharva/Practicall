const express = require('express');
const router = express.Router();
const Student = require("../models/Student");

//CREATE
router.post("/",async(req,res)=>{
    const student = new Student(req.body);
    await student.save();
    res.send(student);
});

//READ
router.get("/:id",async(req,res)=>{
    const students = await Student.find();
    res.send(students);
});

// router.get("/:id", async (req, res) => {
//     const student = await Student.findById(req.params.id);
//     res.send(student);
// });

//UPDATE
// UPDATE
router.put("/:id", async (req, res) => {

    const student = await Student.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        }
    );

    res.send(student);
});

//DELETE
router.delete("/:id", async (req, res) => {

    await Student.findByIdAndDelete(req.params.id);

    res.send("Deleted Successfully");
});

module.exports = router;