import { Request, Response, Router } from "express";
import { generateId } from "../utils/generateId";
import publisher from "../utils/redis";

const router = Router();

router.post("/", async (req: Request, res: Response): Promise<void> => {
    const gitRepoUrl = req.body.gitRepoUrl;
    if (gitRepoUrl) {

        try {

            const id = generateId();
            await publisher.lPush('build_queue', JSON.stringify({ id, gitRepoUrl }));

            res.status(200).json({ id });

        } catch (error) {

            console.log(error);
            res.status(500).json({ error });
        }
    }
    else {
        res.status(400).json({ error: "No repo URL" })
    }
})

export default router;