import { DataSource } from 'typeorm';
import { TaskEntity } from './models/entities/TasksEntity';
import dotenv from 'dotenv';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!),
  username: process.env.DB_USER! ,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true, 
  logging: true,
  entities: [TaskEntity],
  migrations: ['src/migrations/*.ts'],
  subscribers: [],
});

export default AppDataSource;