const mongoose = require('mongoose');

const clinicSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    alternateNumber: { type: String },
    avlDoctor: [{
        doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
        availability: [{
            day: { type: String, required: true },
            time: { type: String, required: true }
        }]
    }],
    gstNumber: { type: String }
});

const Clinic = mongoose.model('Clinic', clinicSchema);

module.exports = Clinic;
