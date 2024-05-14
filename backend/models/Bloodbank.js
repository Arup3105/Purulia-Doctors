const mongoose = require('mongoose');

const bloodBankSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    alternateMobileNumber: { type: String }
});

const BloodBank = mongoose.model('BloodBank', bloodBankSchema);

module.exports = BloodBank;
