import path from "path";
import git from "simple-git";
const LOCAL_DOWNLOAD_DIR = './downloads';

export const downloadgitRepo = async (id: string, gitRepoUrl: string) => {

    console.log("Downloading started : ", gitRepoUrl)
    await git().clone(gitRepoUrl, path.join(LOCAL_DOWNLOAD_DIR, id))
    console.log('🎉 All files downloaded successfully.');
};
