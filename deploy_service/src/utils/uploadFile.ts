import s3 from "./s3"
import fs from "fs"
import path from "path"

const extractPath = (path: string) => {
    const index = path.indexOf('dist/');
    return index !== -1 ? path.slice(index + 5) : path;
}

export const uploadFiles = (files: string[], id: string) => {

    files.forEach(async (file) => {
        const fileContent = fs.readFileSync(file);
        const filepath = path.join(`/project/${id}`, extractPath(file));
        console.log(filepath)
        const params = {
            Bucket: "vercel",
            Key: filepath,
            Body: fileContent
        }

        try {
            const data = await s3.upload(params).promise();
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    })
}