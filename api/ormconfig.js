/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

/** @type {import('typeorm').ConnectionOptions} */
const dbConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  schema: 'public',
  logger: 'debug',
  logging: 'all',
  entities: [path.resolve(__dirname, 'dist/**/*.entity{.ts,.js}')],
  // ssl: isProduction,
  synchronize: true,
  migrationsTableName: 'migrations',
  migrations: ['dist/**/migrations/*.js'],
  migrationsRun: true,
  cli: {migrationsDir: 'src/migrations'}
}

console.log('Database connection options are:', dbConnectionOptions)

module.exports = dbConnectionOptions
