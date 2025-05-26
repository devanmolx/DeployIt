import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
    message: {
        type: String
    }
},{timestamps:true , _id:false})

const deploymentSchema = new mongoose.Schema({

    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'project',
        required:true
    },
    status: {
        type: String,
        enum: ["Success", "Failed", "Deploying"],
        default: "Deploying",
        required: true
    },
    logs:[logSchema]

},{timestamps:true})

const Deployment = mongoose.model("deployment", deploymentSchema);

export default Deployment