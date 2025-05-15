import path from "path";
import git from "simple-git";
const LOCAL_DOWNLOAD_DIR = './downloads';

export const downloadS3Folder = async (id: string, gitRepoUrl: string) => {

    await git().clone(gitRepoUrl, path.join(LOCAL_DOWNLOAD_DIR, id))
    console.log('🎉 All files downloaded successfully.');
};
