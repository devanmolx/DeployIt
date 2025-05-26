import dotenv from "dotenv";
import mongoose from "mongoose"

dotenv.config();

async function dbConnect() {
    if (process.env.MONGO_URI) {   
        try {

            await mongoose.connect(process.env.MONGO_URI);
            console.log("DB connected");

        } catch (error) {
            console.log(error);
        }
    }
}

export default dbConnect