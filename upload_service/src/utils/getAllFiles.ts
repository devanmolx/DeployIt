import fs from "fs"
import path from "path";

export const getAllFiles = (folderPath: string): string[] => {
    let files: string[] = [];

    const allFilesandFolder = fs.readdirSync(folderPath);
    allFilesandFolder.map(file => {
        const filePath = path.join(folderPath, file);
        const stat = fs.lstatSync(filePath);
        if (stat.isDirectory()) {
            files = files.concat(getAllFiles(filePath));
        }
        else if (stat.isFile()) {
            files.push(filePath);
        }
    })
    return files;
}