const mongoose = require('mongoose');

const designationSchema = new mongoose.Schema({
    logoUrl: { type: String, required: true },
    name: { type: String, required: true },
});

const Designation = mongoose.model('Designation', designationSchema);

module.exports = Designation;
