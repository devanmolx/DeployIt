import { Router } from "express"
import User from "../models/User";

const router = Router();

router.post("/login", async (req, res) => {
    const { name, email, refreshToken } = req.body;
    console.log(name)

    try {
        let user;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            user = existingUser;
        }

        if (!user) {
            user = await User.create({ name, email, refreshToken });
        }

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