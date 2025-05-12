import subscriber from "./utils/redis";
import s3 from "./utils/s3";

const BUCKET_NAME = 'vercel';
const PREFIX = 'output';
const LOCAL_DOWNLOAD_DIR = './downloads';

async function main() {
    while(true){
        try {
            
            const result = await subscriber.brPop("build_queue" , 0)
            if(result){

                const id = result.element;
                const params = {
                    Bucket: `${BUCKET_NAME}`,
                    Prefix: `${PREFIX}/${id}`
                }

                const response = await s3.listObjectsV2(params).promise();
                console.log(response);
            }

        } catch (error) {
            console.log(error);
        }
    }
}

main();