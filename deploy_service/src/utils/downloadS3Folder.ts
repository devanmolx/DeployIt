import s3 from "./s3";
import path from "path";
import fs from "fs";
import { pipeline } from "stream/promises"; // <-- Correct import!

const BUCKET_NAME = 'vercel';
const PREFIX = 'output';
const LOCAL_DOWNLOAD_DIR = './downloads';

export const downloadS3Folder = async (id: string) => {
    const params = {
        Bucket: BUCKET_NAME,
        Prefix: `${PREFIX}/${id}/`,
    };

    const files = await s3.listObjectsV2(params).promise();

    if (!files.Contents || files.Contents.length === 0) {
        console.log('No files found.');
        return;
    }

    for (const file of files.Contents) {
        const key = file.Key;
        if (!key || key.endsWith('/')) continue;

        const relativePath = key.replace(`${PREFIX}/${id}/`, '');
        const localFilePath = path.join(LOCAL_DOWNLOAD_DIR, id, relativePath);

        fs.mkdirSync(path.dirname(localFilePath), { recursive: true });

        const s3Stream = s3.getObject({ Bucket: BUCKET_NAME, Key: key }).createReadStream();
        const fileStream = fs.createWriteStream(localFilePath);

        await pipeline(s3Stream, fileStream);
        console.log(`✅ Downloaded: ${key}`);
    }

    console.log('🎉 All files downloaded successfully.');
};
