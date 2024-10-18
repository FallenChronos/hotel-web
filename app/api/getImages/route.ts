import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    const imageDirectory = path.join(process.cwd(), 'public/images/property');

    try {
        const files = await fs.promises.readdir(imageDirectory);
        const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
        return NextResponse.json(imageFiles);
    } catch (error) {
        return NextResponse.json({ error: 'Unable to scan directory' }, { status: 500 });
    }
}