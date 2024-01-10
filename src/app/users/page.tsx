'use client'

import { getUsers } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { User } from "@/app/actions";

export default function User () {
   const [users, setUsers] = useState<User[]>([]);

   async function requestUsers () {
      setUsers(await getUsers());
   }

   return (
      <>
         <ul>
            { users.map(({ name, age }) => <li key={`user_${ Math.random().toString().substring(2,8) }`}>{ name } ({ age })</li>) }
         </ul>
         <Button onClick={requestUsers}>Get users</Button>
      </>
      )
}