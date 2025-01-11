const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")

app.use(bodyParser.json())
dotenv.config()
app.use(cors())


let ConsultingShema = new mongoose.Schema({
    image: {
        required: [true, "Enter Image Url"],
        type: String
    },
    name: {
        required: [true, "Enter Name"],
        type: String
    },
    specialization: {
        required: [true, "Enter Specialization"],
        type: String
    }
})
let ConsultingModel = mongoose.model("consulting", ConsultingShema)

// Butun datalar
app.get("/consulting", async (req, res) => {
    let consulting = await ConsultingModel.find()
    res.send(consulting)
})
// Datani ID-ye gore getirmek
app.get("/consulting", async (req, res) => {
    let { id } = req.params
    let consulting = await ConsultingModel.findById(id)
    res.send({
        message: "Succes By Id",
        data: consulting
    })
})
// Post 
app.post("/consulting", async (req, res) => {
    let newConsulting = ConsultingModel(req.body)
    await newConsulting.save()
    res.send({ data: newConsulting })
})
// Delete
app.delete("/consulting/:id", async (req, res) => {
    let { id } = req.params
    let delConsulting = await ConsultingModel.findByIdAndDelete(id)
    res.send({
        message: "Success Delete",
        data: delConsulting
    })
})

mongoose.connect(process.env.ConnectionUrl)
    .then(() => {
        console.log("Succes Connected");
    })
app.listen(process.env.ConnectionPort, () => {
    console.log("Succes 7070");

})