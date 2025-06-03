import { NextResponse } from 'next/server'
import mime from 'mime'
import s3 from '@/utils/s3';

export async function GET(request: Request) {
    try {

        const projectId = request.headers.get('x-project-id');
        let path = request.headers.get('x-path');

        if (path == '/') {
            path = "/index.html"
        }

        const Key = `project/${projectId}${path}`;

        const params = {
            Bucket: "vercel.anmolgarg.dev",
            Key
        }

        const data = await s3.getObject(params).promise();

        if (data.Body) {
            const contentType = mime.getType(path || "") || 'application/octet-stream'

            return new NextResponse(data.Body as Buffer, {
                headers: {
                    'Content-Type': contentType,
                    'Cache-Control': 'public, max-age=3600'
                },
            })
        }
        else {
            return NextResponse.redirect(new URL("/404", request.url));
        }

    } catch (error: any) {
        console.error("S3 error:", error);
        return NextResponse.redirect(new URL("/404", request.url));
    }
}