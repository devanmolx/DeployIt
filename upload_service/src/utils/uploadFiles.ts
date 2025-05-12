import s3 from "./s3"
import fs from "fs"

export const uploadFiles = (files:string[]) =>{
    console.log(files)
    files.forEach(async (file) => {
        const fileContent = fs.readFileSync(file);
        const filepath = file.slice(__dirname.length + 1)
        const params = {
            Bucket:"vercel",
            Key:filepath,
            Body:fileContent
        }

        try {
            const data = await s3.upload(params).promise();
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    })
}