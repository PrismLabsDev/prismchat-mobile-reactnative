import { query, createTable } from '../index';

export default async () => {
	await createTable('chats', {
		id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
		name: 'TEXT UNIQUE NOT NULL',
		partner: 'TEXT UNIQUE NOT NULL',
		masterPublic: 'TEXT NOT NULL',
		masterPrivate: 'TEXT NOT NULL',
		sendKey: 'TEXT NOT NULL',
		receiveKey: 'TEXT NOT NULL',
		sendCount: 'INTEGER NOT NULL DEFAULT 0',
		newMessage: 'BOOLEAN NOT NULL DEFAULT 0',
	});
};
