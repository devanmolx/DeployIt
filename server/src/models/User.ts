import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    refreshToken: {
        type: String,
        required: true
    },
    accessToken: {
        type: String,
        required: true
    },
    photoUrl: {
        type: String,
        required: true    
    }
})

const User = mongoose.model("user", userSchema);

export default User