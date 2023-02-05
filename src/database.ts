import mysql from 'mysql2/promise';
import config from './config';

const query = async (sql: string, params: any) => {
  const connection = await mysql.createConnection({
    host: config.MYSQL_HOST,
    user: config.MYSQL_USER,
    password: config.MYSQL_PASSWORD,
    database: config.MYSQL_DATABASE,
  });
  const [results] = await connection.execute(sql, params);

  return results;
};

export default query;
