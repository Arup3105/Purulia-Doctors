const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();
const Designation= require('../models/Designation');
const Doctor= require('../models/Doctor');
const Clinic= require('../models/Clinic');

router.get("/category", async (req, res) => {
    try{
        const Categories = await Designation.find()

        if(Categories.length ===0){
            res.status(401).json({message:"No Category Found"})
        }else{
            res.status(200).json(Categories)
        }
    }catch (error){
        console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
    };
});

router.get("/:category", async (req,res)=>{
    try {
        const {category} = req.params
        console.log(category);
        const designation = await Designation.findOne({ name: category });
        if (!designation) {
            return res.status(404).json({ message: "Designation not found" });
        }

        const categoryId = designation._id;
        const availableDoc = await Doctor.find({Designation: categoryId}).lean();
        if(availableDoc.length===0){
            res.status(401).json({message:"No Doctor Found"});
        }else{
            const modifiedAvailableDoc= await Promise.all(availableDoc.map(async doctor => {
                const clinicAvl = await Clinic.find({ "avlDoctor.doctorId": doctor._id });
                doctor.clinic = clinicAvl;
                return doctor;
            }));
            res.status(200).json(modifiedAvailableDoc);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

module.exports = router;