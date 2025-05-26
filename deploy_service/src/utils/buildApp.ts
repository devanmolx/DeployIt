import Docker from "dockerode"
import path from "path"

export const buildProject = async (slug: string) => {

    try {

        const projectPath = path.join(__dirname, "..", "..", "downloads", slug);

        const docker = new Docker();

        const container = await docker.createContainer({
            Image: "node:20-alpine",
            Cmd: ['sh', '-c', 'npm install && npm run build'],
            Tty: true,
            WorkingDir: "/app",
            HostConfig: {
                Binds: [`${projectPath}:/app`]
            }
        })

        await container.start();
        console.log('🚀 Container started. Building...');

        const stream = await container.logs({
            follow: true,
            stderr: true,
            stdout: true
        })

        stream.on('data', chunk => {
            process.stdout.write(chunk.toString());
        });

        await container.wait();
        console.log('✅ Build finished.');

        await container.remove();
        console.log('🧹 Container removed.');

    }
    catch (error) {
        console.log(error);
    }
}