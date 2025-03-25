import { createConnection } from 'typeorm';
import { User } from './models/User';
import { Role } from './models/Role';

const connection = createConnection({
    type: 'postgres', // or your preferred database type
    host: 'localhost',
    port: 5432, // default port for PostgreSQL
    username: 'your_username',
    password: 'your_password',
    database: 'your_database',
    entities: [User, Role],
    synchronize: true, // set to false in production
    logging: false,
});

export default connection;