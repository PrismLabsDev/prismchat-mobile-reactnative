import { query, createTable } from '../index';

export default async () => {
	await createTable('requests', {
		id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
		partner: 'TEXT UNIQUE NOT NULL',
		value: 'TEXT NOT NULL',
	});
};
