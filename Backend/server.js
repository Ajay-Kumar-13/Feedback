const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require("axios");

const app = express();
// app.use(cors({
//     origin: 'http://*.localhost:3000'
// }))
const CHAT_URL = 'http://127.0.0.1:5000'

mongoose.set('strictQuery', true);

// Mongoose Schemas
const feedbackSchema = new mongoose.Schema({
    employeeId: String,
    feedbackName: String,
    feedback: {
        type: Array
    },
    summary: String
}, { timestamps: true })

const All_FeedbacksSchema = new mongoose.Schema({
    Feedback_name: String,
    Feedback_id: String
}, { timestamps: true })

const employeeSchema = new mongoose.Schema({
    employeeName: String,
    organization: String,
    employeeRole: String,
    password: String,
    email: String
}, { timestamps: true })

const orgSchema = new mongoose.Schema({
    organization: String
}, { timestamps: true })

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.get('/question', (req, response) => {
    axios.get(CHAT_URL + '/question')
        .then(res => {
            response.send(res.data)
        })
})

app.post('/upload', (req, res) => {
    axios.post(CHAT_URL + '/upload', req.body)
})


app.get('/auth/check/:org', async (req, res) => {
    const organization = req.params.org;
    try {
        const connectionUri = "mongodb+srv://Ajay-kumar:Ajaykumar$13@chronos.emvsxuh.mongodb.net/utils";
        const connection = await mongoose.createConnection(connectionUri, { dbName: 'utils' });
        const Organizations = connection.model("apps", orgSchema);
        const docs = await Organizations.find({ organization: organization }).exec();
        connection.close()
        res.send(docs)
    } catch (error) {
        console.log(error);
    }
})

app.post("/:organization/:empId/:feedback_name/submitFeedback", async (req, res) => {

    const organization = req.params.organization;
    try {
        const connectionUri = `mongodb+srv://Ajay-kumar:Ajaykumar$13@chronos.emvsxuh.mongodb.net/${organization}`;
        const connection = await mongoose.connect(connectionUri, { dbName: organization });

        if (connection) {
            const Feedback = connection.model(req.params.feedback_name + "_feedbacks", feedbackSchema);

            async function fetchDataAndCreateFeedback() {
                try {
                    const response = await axios.post(CHAT_URL + '/summarise', {feedback: req.body});
                    const s = response.data;

                    const newFeedback = new Feedback({
                        employeeId: req.params.empId,
                        feedbackName: req.params.feedback_name,
                        feedback: req.body,
                        summary: s
                    });
                    await newFeedback.save()

                    const All_Feedbacks = connection.model("All_Feedbacks", All_FeedbacksSchema);
                    const recent = new All_Feedbacks({
                        Feedback_name: req.params.feedback_name + "_feedbacks",
                        Feedback_id: newFeedback._id
                    });
                    await recent.save();
                    // Use newFeedback or do other operations with s here
                } catch (error) {
                    // Handle any errors here
                    console.error(error);
                }
            }

            // Call the function to initiate the POST request and create the feedback
            fetchDataAndCreateFeedback();

            res.status(200).json({
                message: "Feedback saved successfully"
            });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error" + error);
    }

});

app.get('/:organization/getEmployees', async (req, res) => {
    const organization = req.params.organization;

    try {
        const connectionUri = `mongodb+srv://Ajay-kumar:Ajaykumar$13@chronos.emvsxuh.mongodb.net/${organization}`;
        const connection = await mongoose.connect(connectionUri, { dbName: organization });
        if (connection) {
            const Employee = connection.model("employees", employeeSchema);
            const docs = await Employee.find({}).exec();
            res.send(docs);
            // connection.close();
        }

    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error" + error);
    }
});

app.get('/:organization/:email/getEmployee', async (req, res) => {
    const organization = req.params.organization;
    try {
        const connectionUri = `mongodb+srv://Ajay-kumar:Ajaykumar$13@chronos.emvsxuh.mongodb.net/${organization}`;
        // Create a new Mongoose connection for each request
        const connection = await mongoose.connect(connectionUri, { dbName: organization });
        if (connection) {
            const Employee = connection.model("employees", employeeSchema);
            const docs = await Employee.find({ email: req.params.email }).exec();

            // Close the connection when done
            // connection.close();
            res.send(docs);
        }

    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error" + error);
    }
})

app.get('/:organization/:feedbackname/:emp_id/getFeedback', async (req, res) => {
    const organization = req.params.organization;
    try {
        const connectionUri = `mongodb+srv://Ajay-kumar:Ajaykumar$13@chronos.emvsxuh.mongodb.net/${organization}`;
        // Create a new Mongoose connection for each request
        const connection = await mongoose.connect(connectionUri, { dbName: organization });
        if (connection) {
            const feedback = connection.model(req.params.feedbackname + "_feedbacks", feedbackSchema);
            const docs = await feedback.find({ employeeId: req.params.emp_id }).exec();

            // Close the connection when done
            // connection.close();
            res.send(docs);
        }

    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error" + error);
    }
})

app.get("/:organization/getAllFeedbacks", async (req, res) => {
    try {
        const connectionUri = `mongodb+srv://Ajay-kumar:Ajaykumar$13@chronos.emvsxuh.mongodb.net/${req.params.organization}`;
        const connection = await mongoose.connect(connectionUri, { dbName: req.params.organization });
        if (connection) {
            const All_Feedbacks = connection.model("All_Feedbacks", All_FeedbacksSchema);
            const docs = await All_Feedbacks.find({}).exec();
            // connection.close();
            res.send(docs);
        }

    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error" + error);
    }
})

app.get("/:organization/:feedback_name/submittedEmps", async (req, res) => {
    try {
        const connectionUri = `mongodb+srv://Ajay-kumar:Ajaykumar$13@chronos.emvsxuh.mongodb.net/${req.params.organization}`;
        const connection = await mongoose.connect(connectionUri, { dbName: req.params.organization });
        if (connection) {
            const feedback = connection.model(req.params.feedback_name, feedbackSchema);
            const docs = await feedback.find({}).exec();
            // connection.close();
            res.send(docs);
        }

    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error" + error);
    }
})

app.post('/:organization/saveEmployee', async (req, res) => {
    console.log(req.body, "save employee");
    try {
        const connectionUri = `mongodb+srv://Ajay-kumar:Ajaykumar$13@chronos.emvsxuh.mongodb.net/${req.params.organization}`;
        const connection = await mongoose.connect(connectionUri, { dbName: req.params.organization });
        if (connection) {
            const Employee = connection.model("employees", employeeSchema);
            const newEmp = new Employee({
                employeeName: req.body.firstname + ' ' + req.body.lastname,
                organization: req.body.organization,
                employeeRole: req.body.role,
                email: req.body.email,
                password: req.body.password
            });
            await newEmp.save();
            res.status(200).json({
                success: true
            });
        }

    } catch (error) {
        res.status(400).json({
            success: false
        });
    }
})

app.listen(3001, () => {
    console.log("server is running");
})
