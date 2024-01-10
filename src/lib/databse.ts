import * as SQLite from 'better-sqlite3';
import { Kysely, SqliteDialect } from 'kysely';

const dialect = new SqliteDialect({
   database: new SQLite(':memory:', { verbose: console.log })
});