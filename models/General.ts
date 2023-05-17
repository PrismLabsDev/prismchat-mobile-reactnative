import sql from 'sql-bricks';

interface GeneralRecord {
	name: string;
	value: string;
}

const tableName = 'general';

const select = () => {
	return sql.select().from(tableName);
};

const insert = (record: GeneralRecord) => {
	return sql.insert(tableName, record);
};

const update = (record: GeneralRecord) => {
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
