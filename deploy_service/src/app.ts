import { buildProject } from "./utils/buildApp";
import { downloadgitRepo } from "./utils/downloadgitRepo";
import subscriber from "./utils/redis";
import { uploadProject } from "./utils/uploadProject";
import { removeProject } from "./utils/removeProject"
import dbConnect from "./utils/dbConnect";
import Deployment from "./utils/deployment";

dbConnect();

async function main() {

    let deployment;
    let slug;

    while (true) {
        try {

            const result = await subscriber.brPop("build_queue", 0)
            if (result) {
                const { deploymentId, slug, gitRepoUrl } = await JSON.parse(result.element);
                deployment = await Deployment.findById(deploymentId);
                if (!deployment || !slug) {
                    continue;
                }
                await downloadgitRepo(slug, gitRepoUrl);
                await buildProject(deployment, slug);
                await uploadProject(slug);
                await removeProject(slug);
            }

        } catch (error) {
            if (deployment) {
                deployment.status = "Failed";
                await deployment?.save();
            }
            console.log(error);
        }
        finally {
            if (slug) {
                await removeProject(slug);
            }
        }
    }
}

main();