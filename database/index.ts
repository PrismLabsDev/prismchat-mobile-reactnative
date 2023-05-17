import db from './connection';

const query = (queryString: string, queryParams: Array<any> = []) => {
	return new Promise((resolve, reject) => {
		db.transaction((tx) => {
			tx.executeSql(
				queryString,
				queryParams,
				(_, result) => {
					resolve({
						data: result.rows._array,
						length: result.rows.length,
					});
				},
				(_, err) => {
					console.error(err);
					resolve(undefined);
					// reject(err);
					return false;
				}
			);
		});
	});
};

const createTable = async (tableName: string, obj: any) => {
	const columnNames = Object.keys(obj);
	const columnFlags = Object.values(obj);

	const createColumnStr = columnNames
		.map((name, index) => {
			return `${name} ${columnFlags[index]}`;
		})
		.join(', ');

	return await query(
		`CREATE TABLE IF NOT EXISTS ${tableName} (${createColumnStr});`
	);
};

export { query, createTable };
export default {
	query,
	createTable,
};
