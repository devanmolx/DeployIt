import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
    message: {
        type: String
    }
},{timestamps:true , _id:false})

const deploymentSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required:true
    },
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
    commitSha: {
        type: String,
    },
    commitMsg: {
        type: String,
    },
    slug: {
        type: String,
        required:true
    },
    url: {
        type:String
    },
    logs:[logSchema]

}, { timestamps: true })

deploymentSchema.pre('save', function (next) {
    if (this.isModified('slug')) { 
        this.url = `https://${this.slug}.deployit.anmolgarg.tech`;
    }
    next();
});

const Deployment = mongoose.model("deployment", deploymentSchema);

export default Deployment