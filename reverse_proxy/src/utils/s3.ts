import AWS from "aws-sdk"
import dotenv from "dotenv";
dotenv.config();

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
    region: process.env.AWS_S3_REGION,
    s3ForcePathStyle: true,
    signatureVersion: 'v4'
})

export default s3;