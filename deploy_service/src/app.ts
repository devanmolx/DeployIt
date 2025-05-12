import { downloadS3Folder } from "./utils/downloadS3Folder";
import subscriber from "./utils/redis";

async function main() {
    while(true){
        try {
            
            const result = await subscriber.brPop("build_queue" , 0)
            if(result){
                await downloadS3Folder(result.element);                
            }

        } catch (error) {
            console.log(error);
        }
    }
}

main();