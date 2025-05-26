import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    gitRepoUrl: {
        type: String,
        required: true,
        unique: true
    },
}, { timestamps: true })

const Project = mongoose.model("project", projectSchema);

export default Project;