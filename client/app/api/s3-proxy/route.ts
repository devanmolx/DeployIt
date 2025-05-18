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

        const Key = `project/${projectId}${path}`;

        const params = {
            Bucket: "vercel.anmolgarg.dev",
            Key
        }

        const data = await s3.getObject(params).promise();

        if (data) {
            const contentType = mime.getType(path || "") || 'application/octet-stream'

            return new NextResponse(data.Body as Buffer, {
                headers: {
                    'Content-Type': contentType,
                    'Cache-Control': 'public, max-age=3600'
                },
            })
        }

    } catch (error: any) {
        console.error("S3 error:", error);

        if (error.code === 'NoSuchKey') {
            const fallbackKey = `project/404.html`;
            try {
                const fallback = await s3.getObject({ Bucket: "vercel.anmolgarg.dev", Key: fallbackKey }).promise();
                return new NextResponse(fallback.Body as Buffer, {
                    status: 404,
                    headers: {
                        'Content-Type': 'text/html',
                    },
                });
            } catch {
                return NextResponse.json({ error: 'File not found' }, { status: 404 });
            }

        }

        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}