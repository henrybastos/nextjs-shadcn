"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { 
   Card,
   CardHeader,
   CardContent,
   CardTitle
} from "@/components/ui/card"
import { createUser } from "@/app/actions"
import { useFormState } from "react-dom"
import { stringify } from "querystring"

const initialState = {
   name: '',
   age: 0
}

export default function AddUser () {
   // const [createUserState, createUserAction] = useFormState(initialState);

   return (
      <form className="dark px-2" action={createUser}>
         <Card className="dark:bg-transparent dark:border-neutral-800 rounded-md">
            <CardHeader>
               <CardTitle className="text-neutral-50 text-xl">Add user</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-y-4">
               <div>
                  <Label htmlFor="name" className="text-neutral-50 subpixel-antialiased">Name</Label>
                  <Input className="border-neutral-800 mt-2" name="name" id="name" placeholder="Your name" />
               </div>

               <div>
                  <Label htmlFor="age">Age</Label>
                  <Input className="border-neutral-800 mt-2" type="number" name="age" id="age" placeholder="Your age" />
               </div>

               <Button className="text-md">Submit</Button>
            </CardContent>
         </Card>
      </form>
   )
}