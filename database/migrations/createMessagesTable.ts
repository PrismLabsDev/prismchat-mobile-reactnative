import { query, createTable } from '../index';

export default async () => {
	await createTable('messages', {
		id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
		chat_id: 'INTEGER NOT NULL',
		date: 'VARCHAR(255) NOT NULL',
		type: 'VARCHAR(255) NOT NULL',
		data: 'TEXT NOT NULL',
		sent: 'BOOLEAN NOT NULL DEFAULT 0',
	});
};
