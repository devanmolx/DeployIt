import {createClient} from "redis"
import dotenv from "dotenv"
dotenv.config();

let isConnected = false;

const publisher = createClient({
    url:process.env.REDIS_URL
})

const connectRedis = async () =>{
    await publisher.connect();
}

if(!isConnected){
    try {
        connectRedis();
        isConnected = true;
    } catch (error) {
        console.log(error)
    }
}


export default publisher;