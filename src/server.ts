// const express = require('express');
// import { connect } from './database/connect';
// import { createServer } from 'http';
// import { parse } from 'url';
// import { default as next } from 'next';

// const app = next({ dev: process.env.NODE_ENV !== 'production' });
// const handle = app.getRequestHandler();

// export default async function startServer() {
// 	try {
// 		await connect(); // MongoDB'ye bağlanma

// 		await app.prepare();

// 		const PORT = process.env.PORT || 4000;

// 		createServer((req, res) => {
// 			const parsedUrl = parse(req.url!, true);
// 			const { pathname, query } = parsedUrl;

// 			if (pathname === '/_next') {
// 				return handle(req, res, parsedUrl);
// 			}

// 			handle(req, res, parsedUrl);
// 		}).listen(PORT, () =>
// 			console.log(`🚀 Server ready at http://localhost:${PORT}`)
// 		);
// 	} catch (error) {
// 		console.error('Error starting the server:', error);
// 		process.exit(1);
// 	}
// }
