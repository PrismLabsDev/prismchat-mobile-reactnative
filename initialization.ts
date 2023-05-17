import migrate from './database/migrate';
import { query } from './database';
import General from './models/General';

export default async () => {
	const isDatabaseInitialized: any = await query(
		General.select().where({ name: 'init' }).toString()
	);

	// Initialize database if cannot find init record in general table
	if (!isDatabaseInitialized) {
		await migrate();
		await query(
			General.insert({
				name: 'init',
				value: JSON.stringify(true),
			}).toString()
		);
	}
};
