import createGeneralTable from './migrations/createGeneralTable';
import createChatsTable from './migrations/createChatsTable';
import createMessagesTable from './migrations/createMessagesTable';
import createRequestsTable from './migrations/createRequestsTable';

export default async () => {
	await createGeneralTable();
	await createChatsTable();
	await createMessagesTable();
	await createRequestsTable();
};
