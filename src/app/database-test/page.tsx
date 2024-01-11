'use client'
import { selectAllUsers, createUser, createTableUsers } from "@/lib/userRepository"
import { Button } from "@/components/ui/button";

async function createDummyuser () {
   await createUser({
      name: 'Dummy 001',
      age: 21,
      gender: "male"
   });
}

async function _selectAllUsers () {
   console.log(await selectAllUsers());
   ;
}


export default async function DatabaseTest () {

   return (
      <>
      <h1>Hello!</h1>
         <Button onClick={_selectAllUsers}>Select all users</Button>
         <Button onClick={createDummyuser}>Create dummy user</Button>
         <Button onClick={async () => await createTableUsers()}>Create table user</Button>
      </>
   )
}