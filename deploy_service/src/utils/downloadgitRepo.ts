import path from "path";
import git from "simple-git";
const LOCAL_DOWNLOAD_DIR = './downloads';

export const downloadgitRepo = async (slug: string, gitRepoUrl: string) => {

    console.log("Downloading started : ", gitRepoUrl)
    await git().clone(gitRepoUrl, path.join(LOCAL_DOWNLOAD_DIR, slug))
    console.log('🎉 All files downloaded successfully.');
};
