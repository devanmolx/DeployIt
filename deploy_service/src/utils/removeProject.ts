import { exec } from "child_process"
import path from "path"

export async function removeProject(slug: string) {

    try {

        const projectPath = path.join(__dirname, "..", "..", "downloads", slug);

        exec(`rm -rf ${projectPath} `, (error) => {
            console.log(error);
        })

        console.log("Remove downloaded files")

    } catch (error) {
        console.log(error);
    }

}
