import Docker from "dockerode"
import path from "path"
import stripAnsi from "strip-ansi";

export const buildProject = async (deployment: any, slug: string) => {

    let container;
    const projectPath = path.join(__dirname, "..", "..", "downloads", slug);
    const docker = new Docker();

    try {

        const uid = typeof process.getuid === 'function' ? process.getuid() : 1000;
        const gid = typeof process.getgid === 'function' ? process.getgid() : 1000;

        container = await docker.createContainer({
            Image: "node:20-alpine",
            Cmd: ['sh', '-c', 'npm install && npm run build'],
            Tty: true,
            WorkingDir: "/app",
            User: `${uid}:${gid}`,
            HostConfig: {
                Binds: [`${projectPath}:/app`]
            }
        })

        await container.start();
        console.log('🚀 Container started. Building...');

        let logs: string[] = [];

        const stream = await container.logs({
            follow: true,
            stderr: true,
            stdout: true
        })

        stream.on('data', chunk => {
            let log = chunk.toString();
            log = stripAnsi(log);
            log = log.replace(/^[\/\\|\-]+/, '').trim();
            logs.push(log);
            process.stdout.write(log + '\n');
        });


        await new Promise((resolve, reject) => {
            stream.on("end", resolve);
            stream.on("error", reject);
        });


        const result = await container.wait();

        if (result.StatusCode === 0) {

            console.log('✅ Build finished successfully.');
            deployment.status = "Success";

        } else {

            console.log(`❌ Build failed with status code: ${result.StatusCode}`);
            deployment.status = "Failed"
        }

        logs.forEach(log => deployment.logs.push({ message: log }))

        await deployment.save();
    }
    catch (error) {

        console.log(error);
        deployment.status = "Failed";
        // deployment.logs.push({ message: `Error: ${error.message}` });
        await deployment.save();

    }
    finally {
        if (container) {
            try {
                await container.remove();
                console.log("🧹 Container removed.");
            } catch (removeError) {
                console.error("Error removing container:", removeError);
            }
        }
    }
}