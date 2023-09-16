const mongoose = require("mongoose");


const feedbackSchema = new mongoose.Schema({
    employeeId: String,
    feedback: {
        type: Array
    }
}, {timestamps: true})

const Feedback = mongoose.model("feedbacks", feedbackSchema);
module.exports = Feedback;