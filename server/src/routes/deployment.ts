import { Router } from "express";
import Deployment from "../models/deployment";

const router = Router();

router.post("/all", async (req, res) => {
    const { userId } = req.body;

    try {

        const deployments = await Deployment.find({ user: userId });

        if (deployments) {
            res.status(200).json({ deployments, status: true });
        }
        else {
            res.status(400).json({ error: "Unable to get projects", status: false });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error, status: false });
    }
})

export default router;