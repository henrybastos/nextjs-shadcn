"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [name, setName] = useState('');
  
  return (
    <>
      <Label htmlFor="name">Name</Label>
      <Input id="name" name="name" placeholder="Put your name in here" className="border-neutral-800 w-fit" />
    </>
  )
}