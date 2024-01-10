export interface User {
   name: string;
   age: number;
}

let USERS: User[] = [];

export async function createUser(formData: FormData) {
   const name = formData.get('name')?.toString() || '';
   const age = parseInt(formData.get('age')?.toString() || '0');

   console.log(`Name: ${ name } / Age: ${ age }`);
   USERS.push({ name, age });
   return { name, age };
}

export async function getUsers () {
   return USERS;
}