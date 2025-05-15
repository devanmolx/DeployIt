import express, { Request, Response } from "express"
import s3 from "./utils/s3";
import mime from "mime"

const app = express();

app.get("*path", async (req: Request, res: Response): Promise<void> => {

    const hostname = req.hostname;
    const projectId = hostname.split(".")[0];

    const filePath = req.path === "/" ? "index.html" : req.path.slice(1);

    const Key = `/project/${projectId}/${filePath}`;

    try {

        const params = {
            Bucket: "vercel",
            Key
        }


        const stream = s3.getObject(params).createReadStream();

        res.setHeader('Content-type', mime.getType(filePath) || 'application/octet-stream');

        stream.pipe(res);

        stream.on('error', (err) => {
            console.error('Stream error:', err);
            res.status(404).send('Not found');
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" })
    }
})

app.listen(8000, () => {
    console.log("Server Started")
})