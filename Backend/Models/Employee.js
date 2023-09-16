const mongoose = require("mongoose");


const employeeSchema = new mongoose.Schema({
    employeeId: String,
    employeeName: String,
    organization: String,
}, {timestamps: true})

const Employee = mongoose.model("employees", employeeSchema);
module.exports = Employee;