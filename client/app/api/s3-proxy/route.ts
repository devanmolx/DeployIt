import { NextResponse } from 'next/server'
import mime from 'mime'
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { Readable } from 'stream';
import s3 from '@/utils/s3';

async function streamToBuffer(stream: Readable): Promise<Buffer> {
  const chunks: Uint8Array[] = [];
  for await (const chunk of stream) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export async function GET(request: Request) {
  try {
    const projectId = request.headers.get('x-project-id');
    let path = request.headers.get('x-path');

    if (path === '/') {
      path = '/index.html';
    }

    const Key = `project/${projectId}${path}`;

    const params = {
      Bucket: "vercel.anmolgarg.dev",
      Key
    };

    const command = new GetObjectCommand(params);
    const data = await s3.send(command);

    if (data.Body) {
      const buffer = await streamToBuffer(data.Body as Readable);
      const contentType = mime.getType(path || "") || 'application/octet-stream';

      return new NextResponse(buffer, {
        headers: {
          'Content-Type': contentType,
          'Cache-Control': 'public, max-age=3600'
        },
      });
    } else {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

  } catch (error: any) {
    console.error("S3 error:", error);

    if (error.name === 'NoSuchKey') {
      try {
        const fallbackKey = `project/404.html`;
        const fallbackCommand = new GetObjectCommand({ Bucket: "vercel.anmolgarg.dev", Key: fallbackKey });
        const fallback = await s3.send(fallbackCommand);
        if (fallback.Body) {
          const fallbackBuffer = await streamToBuffer(fallback.Body as Readable);
          return new NextResponse(fallbackBuffer, {
            status: 404,
            headers: { 'Content-Type': 'text/html' },
          });
        }
      } catch {
        return NextResponse.json({ error: 'File not found' }, { status: 404 });
      }
    }

    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
