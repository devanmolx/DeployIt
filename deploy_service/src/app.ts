import { buildProject } from "./utils/buildApp";
import { downloadS3Folder } from "./utils/downloadS3Folder";
import subscriber from "./utils/redis";
import { uploadProject } from "./utils/uploadProject";

async function main() {
    while (true) {
        try {

            const result = await subscriber.brPop("build_queue", 0)
            if (result) {
                const id = result.element;
                await downloadS3Folder(id);
                await buildProject(id);
                await uploadProject(id);
            }

        } catch (error) {
            console.log(error);
        }
    }
}

main();