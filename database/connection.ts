import { openDatabase } from 'expo-sqlite';
const connection = openDatabase('PrismChat.db');

export { connection };
export default connection;
