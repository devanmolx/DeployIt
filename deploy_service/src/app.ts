import { buildProject } from "./utils/buildApp";
import { downloadgitRepo } from "./utils/downloadgitRepo";
import subscriber from "./utils/redis";
import { uploadProject } from "./utils/uploadProject";

async function main() {
    while (true) {
        try {

            const result = await subscriber.brPop("build_queue", 0)
            if (result) {
                const { slug, gitRepoUrl } = await JSON.parse(result.element);
                await downloadgitRepo(slug, gitRepoUrl);
                await buildProject(slug);
                await uploadProject(slug);
            }

        } catch (error) {
            console.log(error);
        }
    }
}

main();