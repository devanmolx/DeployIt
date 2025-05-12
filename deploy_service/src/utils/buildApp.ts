import { spawn } from "child_process"
import path from "path"

export const buildProject = async (id: string) => {

    try {

        const projectPath = path.join(__dirname, "..", "..", "downloads", id);

        const command = `cd "${projectPath}" && npm install && npm run build`;

        const child = spawn(command, { shell: true });

        child.stdout.on("data", (data) => {
            console.log(`stdout:\n${data}`);
        });

        child.stderr.on("data", (data) => {
            console.error(`stderr:\n${data}`);
        });

        child.on("close", (code) => {
            console.log(`build process exited with code ${code}`);
        });


    } catch (error) {
        console.log(error);
    }

}