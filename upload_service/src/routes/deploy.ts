import { Request, Response, Router } from "express";
import git from "simple-git"
import { generateId } from "../utils/generateId";

const router = Router();

router.post("/" , async (req:Request,res:Response):Promise<void>=>{
    const repoUrl = req.body.repoUrl;
    if(repoUrl){
        console.log(repoUrl)
        const id = generateId();
        await git().clone(repoUrl , `./output/${id}`)
    }
    res.json({});
})

export default router;