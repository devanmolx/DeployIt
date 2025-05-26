import { Router } from "express";
import Project from "../models/Project";
import Deployment from "../models/deployment";
import publisher from "../utils/redis";

const router = Router();

router.post("/", async (req, res) => {
    const { userId, slug, gitRepoUrl } = req.body;

    let project;

    const existingProject = await Project.findOne({ user: userId, gitRepoUrl });

    if (existingProject) {
        project = existingProject;    
    }

    try {
        if (!project) {   
            project = await Project.create({ user: userId, slug, gitRepoUrl })
        }

        if (project) {

            const deployment = await Deployment.create({ project: project._id })
            
            if (deployment) {
                await publisher.lPush('build_queue', JSON.stringify({ deploymentId:deployment._id, slug, gitRepoUrl }));
                res.status(200).json({deployment ,status:true})
            }
            else {
                res.status(500).json({error:"Internal server error" , status:false})
            }

        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ error, status: false })
    }
})

export default router