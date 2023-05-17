import { query, createTable } from '../index';

export default async () => {
	await createTable('general', {
		id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
		name: 'VARCHAR(255) UNIQUE NOT NULL',
		value: 'TEXT NOT NULL',
	});
};
