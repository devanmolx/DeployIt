import { Router } from "express"
import User from "../models/User";

const router = Router();

router.post("/login", async (req, res) => {
    const { name, email, refreshToken , accessToken , photoUrl } = req.body;
    console.log(name)

    try {

        const existingUser = await User.findOne({ email });
        
        if (existingUser) {
            existingUser.name = name;
            existingUser.accessToken = accessToken;
            existingUser.refreshToken = refreshToken;
            existingUser.photoUrl = photoUrl;
            await existingUser.save();
            res.status(200).json({ user:existingUser, status: true });
        }

        const user = await User.create({ name, email, refreshToken , accessToken , photoUrl });

        if (user) {
            res.status(200).json({ user, status: true });
        }
        else {
            res.status(500).json({ error: "Unable to login", status: false })
        }
    } catch (error) {
        res.status(500).json({ error, status: false })
    }

})

export default router