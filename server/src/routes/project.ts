import { Router } from "express";
import Project from "../models/Project";
import Deployment from "../models/deployment";
import publisher from "../utils/redis";
import User from "../models/User";

const router = Router();

router.post("/new", async (req, res) => {
    const { name, userId, slug, gitRepoUrl } = req.body;

    let project;

    const existingProject = await Project.findOne({ user: userId, gitRepoUrl });

    if (existingProject) {
        project = existingProject;
    }

    try {
        if (!project) {
            project = await Project.create({ name, user: userId, slug, gitRepoUrl })
        }

        if (project) {

            const deployment = await Deployment.create({ user: userId, project: project._id })

            if (deployment) {
                await publisher.lPush('build_queue', JSON.stringify({ deploymentId: deployment._id, slug, gitRepoUrl }));
                res.status(200).json({ deployment, status: true })
            }
            else {
                res.status(500).json({ error: "Internal server error", status: false })
            }

        }

    } catch (error) {
        console.log(error)
        res.status(500).json({ error, status: false })
    }
})

router.post("/all", async (req, res) => {
    const { userId } = req.body;

    try {

        const projects = await Project.find({ user: userId }).populate("deployments");

        if (projects) {
            res.status(200).json({ projects, status: true });
        }
        else {
            res.status(400).json({ error: "Unable to get projects", status: false });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error, status: false });
    }
})

router.post("/gitProjects", async (req, res) => {
    const { userId } = req.body;
    try {


        const user = await User.findById(userId);

        if (!user) {
            res.status(400).json({ error: "No user found", status: false });
        }

        const accessToken = user!.accessToken;

        let repos = await fetch("https://api.github.com/user/repos", {
            headers: {
                Authorization: `token ${accessToken}`,
            },
        })
        repos = await repos.json();

        res.status(200).json({repos , status:true})


    } catch (error) {
        console.log(error);
        res.status(500).json({ error, status: false });
    }
})

router.post("/checkSlugAvailablity", async (req, res) => {
    const { slug } = req.body;

    const project = await Project.find({ slug });

    if (project.length == 0) {
        res.status(200).json({msg:"Subdomain availabe" ,status:true})
    }
    else {
        res.status(400).json({msg:"Subdomain not availabe" ,status:false})
    }
})

export default router