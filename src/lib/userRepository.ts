'use server'
import { db } from "./databse";
import { NewUser } from "./types";
import { sql } from 'kysely'

export async function selectAllUsers () {
   return await db.selectFrom('user')
      .selectAll().executeTakeFirst();
}

export async function createUser(user: NewUser) {
   return await db.insertInto('user')
      .values(user)
      .returningAll()
      .executeTakeFirstOrThrow();
}

export async function createTableUsers () {
   db.schema.createTable('user')
     .addColumn('id', 'integer', cb => cb.primaryKey().autoIncrement().notNull())
     .addColumn('name', 'varchar(255)', cb => cb.notNull())
     .addColumn('age', 'integer', cb => cb.notNull())
     .addColumn('gender', 'varchar(64)', cb => cb.defaultTo('other'))
     .addColumn('create_at', 'timestamp', cb => cb.defaultTo(sql`current_timestamp`))
     .execute();
}