import { buildProject } from "./utils/buildApp";
import { downloadgitRepo } from "./utils/downloadgitRepo";
import subscriber from "./utils/redis";
import { uploadProject } from "./utils/uploadProject";
import {removeProject} from "./utils/removeProject"
import dbConnect from "./utils/dbConnect";

dbConnect();

async function main() {
    while (true) {
        try {

            const result = await subscriber.brPop("build_queue", 0)
            if (result) {
                const { deploymentId, slug, gitRepoUrl } = await JSON.parse(result.element);
                await downloadgitRepo(slug, gitRepoUrl);
                await buildProject(deploymentId , slug);
                await uploadProject(slug);
                await removeProject(slug);
            }

        } catch (error) {
            console.log(error);
        }
    }
}

main();