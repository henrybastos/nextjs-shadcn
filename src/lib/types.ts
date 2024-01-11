import { Generated, Insertable, Selectable, Updateable } from "kysely";

export interface UserTable {
   id: Generated<number>;
   name: string;
   age: number;
   gender: 'male' | 'female' | 'other';
}

export type User = Selectable<UserTable>;
export type NewUser = Insertable<UserTable>;
export type UserUpdate = Updateable<UserTable>;

export interface DatabaseInterface {
   user: UserTable
}