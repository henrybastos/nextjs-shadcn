import { DatabaseInterface } from './types';
import SQLite from 'better-sqlite3';
import { Kysely, SqliteDialect } from 'kysely';

const dialect = new SqliteDialect({
   database: new SQLite(':memory:', { verbose: console.log })
});

export const db = new Kysely<DatabaseInterface>({
   dialect
})