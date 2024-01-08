"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
   Card,
   CardHeader,
   CardContent,
   CardTitle
} from "@/components/ui/card"
import { IconCircleArrowLeft } from "@tabler/icons-react";

export default function AddUser () {
   return (
      <>
      <main className="dark">
         <Card className="dark:bg-transparent dark:border-neutral-800">
            <CardHeader>
               <CardTitle className="text-neutral-50">Add user</CardTitle>
            </CardHeader>
            <CardContent>
               <Label htmlFor="name" className="text-neutral-50 subpixel-antialiased">
                  <IconCircleArrowLeft className="text-blue-500 inline-flex" size={16}/>
                  Name
               </Label>
               <Input className="border-neutral-800" name="name" id="name" placeholder="Your name" />

               <Label htmlFor="age">
                  <IconCircleArrowLeft className="text-blue-500 w-8 h-8" />
                  Age
               </Label>
               <Input className="border-neutral-800" type="number" name="age" id="age" placeholder="Your age" />
            </CardContent>
         </Card>
      </main>
      </>
   )
}