import fs from "fs-extra"
import path from "path"

export async function removeProject(slug: string) {

    try {

        const projectPath = path.join(__dirname, "..", "..", "downloads", slug);
        const exist = await fs.pathExists(projectPath);

        if (exist) {
            await fs.remove(projectPath);
            console.log("Remove downloaded files")
        }

    } catch (error) {
        console.log(error);
    }
}
