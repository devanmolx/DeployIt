import {createClient} from "redis"
import dotenv from "dotenv"
dotenv.config();

let isConnected = false;

const subscriber = createClient({
    url:process.env.REDIS_URL
})

const connectRedis = async () =>{
    await subscriber.connect();
}

if(!isConnected){
    try {
        connectRedis();
        isConnected = true;
    } catch (error) {
        console.log(error)
    }
}


export default subscriber;