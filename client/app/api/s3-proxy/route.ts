import { NextResponse } from 'next/server'
import mime from 'mime'
import s3 from '@/app/utils/s3'

export async function GET(request: Request) {
    try {

        const projectId = request.headers.get('x-project-id');
        let path = request.headers.get('x-path');

        if (path == '/') {
            path = "/index.html"
        }

        const Key = `/project/${projectId}/${path}`;

        const params = {
            Bucket: "vercel",
            Key
        }

        const data = await s3.getObject(params).promise();

        if (data) {
            const contentType = mime.getType(path || "") || 'application/octet-stream'

            return new NextResponse(data.Body as Buffer, {
                headers: {
                    'Content-Type': contentType,
                },
            })
        }

    } catch (error: any) {
        console.error("S3 error:", error);

        if (error.code === 'NoSuchKey') {
            return NextResponse.json({ error: 'File not found' }, { status: 404 });
        }

        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}