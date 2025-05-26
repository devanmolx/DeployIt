import { getAllFiles } from "./getAllFiles";
import path from "path"
import { uploadFiles } from "./uploadFile";

export const uploadProject = async (slug: string) => {

    const projectPath = path.join(`./downloads/${slug}/dist`)
    try {
        
        const files = getAllFiles(projectPath);
        await uploadFiles(files, slug);
    } catch (error) {
        console.log(error);
    }

}