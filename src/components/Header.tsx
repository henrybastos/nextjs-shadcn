"use client"

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { IconMoon, IconSun } from '@tabler/icons-react';

export default function Header () {
   const router = useRouter();
   const [count, setCount] = useState(0);

   return (
      <header>
         <Button onClick={() => setCount(count + 1)}>Increment { count }</Button>
         <Button onClick={() => router.push('/')}>Home</Button>
         <Button onClick={() => router.push('/users')}>Users</Button>
         <Button onClick={() => router.push('/add-user')}>Add user</Button>
         <Button>Settings</Button>
      </header>
   )
}