const mongoose = require('mongoose');

const Doctorschema = new mongoose.Schema({
    Name: String,
    designation: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Designation' 
    }],
    email: {type: String,require:true},
    phNumber:{type: Number, require:true},
    address: String,
    photo: String,
    regId:{ type: String, unique: true, required: true }
});

const Doctor = mongoose.model('Doctor', Doctorschema);
module.exports = Doctor;
