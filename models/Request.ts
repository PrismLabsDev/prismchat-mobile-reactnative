import sql from 'sql-bricks';

interface RequestRecord {
	partner: string;
	value: string;
}

const tableName = 'requests';

const select = () => {
	return sql.select().from(tableName);
};

const insert = (record: RequestRecord) => {
	return sql.insert(tableName, record);
};

const update = (record: RequestRecord) => {
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
