import { buildProject } from "./utils/buildApp";
import { downloadgitRepo } from "./utils/downloadgitRepo";
import subscriber from "./utils/redis";
import { uploadProject } from "./utils/uploadProject";

async function main() {
    while (true) {
        try {

            const result = await subscriber.brPop("build_queue", 0)
            if (result) {
                const { id, gitRepoUrl } = await JSON.parse(result.element);
                await downloadgitRepo(id, gitRepoUrl);
                await buildProject(id);
                await uploadProject(id);
            }

        } catch (error) {
            console.log(error);
        }
    }
}

main();