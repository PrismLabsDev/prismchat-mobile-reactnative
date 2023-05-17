import sql from 'sql-bricks';

interface ChatRecord {
	name: string;
	partner: string;
	masterPublic: string;
	masterPrivate: string;
	sendKey: string;
	receiveKey: string;
	sendCount: number;
	newMessage: boolean;
}

const tableName = 'chats';

const select = () => {
	return sql.select().from(tableName);
};

const insert = (record: ChatRecord) => {
	return sql.insert(tableName, record);
};

const update = (record: ChatRecord) => {
	return sql.update(tableName, record);
};

const destroy = () => {
	return sql.delete().from(tableName);
};

export default {
	select,
	insert,
	update,
	delete: destroy,
};
