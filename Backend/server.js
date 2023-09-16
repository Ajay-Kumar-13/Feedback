const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require("axios");

const app = express();
const CHAT_URL = 'http://127.0.0.1:5000'

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://Ajay-kumar:Ajaykumar$13@chronos.emvsxuh.mongodb.net/Sample")
    .then(res => console.log("server is up and running"))
    .catch(err => console.log(err))

// Mongoose Schemas
const feedbackSchema = new mongoose.Schema({
    employeeId: String,
    feedback: {
        type: Array
    }
}, {timestamps: true})

const Feedback = mongoose.model("feedbacks", feedbackSchema);

const employeeSchema = new mongoose.Schema({
    employeeId: String,
    employeeName: String,
    organization: String,
    employeeRole: String
}, {timestamps: true})

const Employee = mongoose.model("employees", employeeSchema);


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.get('/question', (req, response) => {
    axios.get(CHAT_URL+'/question')
        .then(res => {
            response.send(res.data)
        })
})

app.post('/upload', (req, res) => {
    axios.post(CHAT_URL+'/upload', req.body)
})

app.post("/submitFeedback", async (req, res) => {
    console.log(req.body);
    const newFeedback = new Feedback({
        employeeId: '1234567',
        feedback: req.body
    });

    await newFeedback.save();

    res.status(200).json({
        message: "Feedback saved successfully"
    });
});

app.get('/:emp_id/getEmployee', async (req, res) => {
    let emp_id = req.params.emp_id
    var docs = await Employee.find({employeeId: emp_id}).exec()
    res.send(docs[0])
})


app.listen(3001, () => {
    console.log("server is running");
})