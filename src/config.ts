import { config } from 'dotenv';

config();

export default {
  MYSQL_DATABASE: process.env.MYSQL_DATABASE || 'clissicmodels',
  MYSQL_USER: process.env.MYSQL_USER || 'mysql-abhiud',
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || 'Pass_1234',
  MYSQL_HOST: process.env.MYSQL_HOST || 'localhost3306',
  HOST: process.env.HOST || 'http://localhost',
  DEV_HOST: process.env.DEV_HOST || 'http://localhost',
};
