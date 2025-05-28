import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
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
    },
}, { timestamps: true })

projectSchema.virtual("deployments", {
    ref: "deployment",
    localField: "_id",
    foreignField:"project"
})

projectSchema.set("toObject", { virtuals: true });
projectSchema.set("toJSON", { virtuals: true });

const Project = mongoose.model("project", projectSchema);

export default Project;