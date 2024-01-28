const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: String,
    salary: Number
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee