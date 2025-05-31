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
            return NextResponse.redirect(new URL('/404', request.url), 302);
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
                return NextResponse.redirect(new URL('/404', request.url), 302);
            }

        }

        return NextResponse.redirect(new URL('/404', request.url), 302);
    }
}