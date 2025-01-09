import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();
export const DatabaseConfig: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false, // for heroku
  },
};
const AppDataSource = new DataSource({
  ...DatabaseConfig,
  migrations:
    process.env.NODE_ENV === 'production'
      ? ['./dist/src/Database/migrations/*.js']
      : ['./src/Database/migrations/*.ts'],
});
export default AppDataSource;
//create migration:  npm run typeorm -- migration:create
//run migration:  npm run typeorm -- migration:run -d ormConfig.ts
//revert migration:  npm run typeorm -- migration:revert -d ormConfig.ts
