import { Request, Response, Router } from "express";
import git from "simple-git"
import { generateId } from "../utils/generateId";
import path from "path"
import { getAllFiles } from "../utils/getAllFiles";
import { uploadFiles } from "../utils/uploadFiles";
import publisher from "../utils/redis";

const router = Router();

router.post("/", async (req: Request, res: Response): Promise<void> => {
    const repoUrl = req.body.repoUrl;
    if (repoUrl) {

        try {

            const id = generateId();
            // await git().clone(repoUrl, path.join(__dirname, `./output/${id}`))
            // const files = getAllFiles(path.join(__dirname, `./output/${id}`));
            // uploadFiles(files);
            await publisher.lPush('build_queue', "anIYnCay");

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