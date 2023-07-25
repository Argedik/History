import { addPost, getPosts } from '@/lib/data';
import { NextResponse } from 'next/server';

export const GET = async (req: Request, res: Response) => {
	try {
		const posts = getPosts();
		return NextResponse.json({ error: 'OK', posts }, { status: 200 });
	} catch (err) {
		return NextResponse.json({ error: 'error', err }.err, { status: 500 });
	}
};
export const POST = async (req: Request, res: Response) => {
	const { title, desc } = await req.json();
	try {
		const posts = { title, desc, date: new Date(), id: Date.now().toString() };
		addPost(posts);
		return NextResponse.json({ error: 'OK', posts }, { status: 201 });
	} catch (err) {
		return NextResponse.json({ error: 'error', err }.err, { status: 500 });
	}
};
export const PUT = async (req: Request, res: Response) => {
	console.log('🚀 ~ file: route.ts:10 ~ PUT ~ PUT:', PUT);
};
export const DELETE = async (req: Request, res: Response) => {
	console.log('🚀 ~ file: route.ts:11 ~ DELETE:', DELETE);
};
