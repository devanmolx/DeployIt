import fs from "fs"

export const getAllFiles = (projectPath: string): string[] => {
    let files: string[] = [];

    const fileAndFolders = fs.readdirSync(projectPath);

    fileAndFolders.map(async file => {
        const filePath = `${projectPath}/${file}`;
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            files = files.concat(getAllFiles(filePath))
        }
        else {
            files.push(filePath);
        }
    })

    return files;
}