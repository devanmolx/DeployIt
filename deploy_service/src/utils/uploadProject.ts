import { getAllFiles } from "./getAllFiles";
import path from "path"
import { uploadFiles } from "./uploadFile";

export const uploadProject = async (id: string) => {

    const projectPath = path.join(`./downloads/${id}/dist`)
    const files = getAllFiles(projectPath);
    await uploadFiles(files, id);

}