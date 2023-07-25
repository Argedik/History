import mongoose from 'mongoose';

export async function connect() {
	const uri: string | undefined = process.env.MONGODB_URL;

	if (!uri) {
		console.log('Could not connect to the database');
		return;
	}

	try {
		await mongoose.connect(uri);

		mongoose.connection.on('open', () => {
			console.log('Connected to MongoDB');
		});
		mongoose.connection.on('error', (err) => {
			console.error('Error connecting to MongoDB', err);
		});
	} catch (error) {
		console.error('Error connecting to MongoDB', error);
		process.exit(1);
	}
}
