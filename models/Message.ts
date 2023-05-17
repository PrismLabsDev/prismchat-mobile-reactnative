import sql from 'sql-bricks';

interface MessageRecord {
	chat_id: number;
	date: string;
	type: string;
	data: string;
	sent: boolean;
}

const tableName = 'messages';

const select = () => {
	return sql.select().from(tableName);
};

const insert = (record: MessageRecord) => {
	return sql.insert(tableName, record);
};

const update = (record: MessageRecord) => {
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
