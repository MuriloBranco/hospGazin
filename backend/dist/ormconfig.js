"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const isProduction = process.env.NODE_ENV === 'production';
const config = isProduction
    ? {
        type: 'postgres',
        url: process.env.DATABASE_URL,
        synchronize: true,
        logging: false,
        entities: ['./dist/models/*.js'],
        migrations: ['./dist/database/migrations/*.js'],
        subscribers: ['./dist/subscriber/**/*.js'],
        ssl: {
            rejectUnauthorized: false,
        },
    }
    : {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || '5432', 10),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DB,
        synchronize: true,
        logging: false,
        entities: ['./src/models/*.ts'],
        migrations: ['./src/database/migrations/*.ts'],
        subscribers: ['./src/subscriber/**/*.ts'],
    };
exports.default = config;
//# sourceMappingURL=ormconfig.js.map