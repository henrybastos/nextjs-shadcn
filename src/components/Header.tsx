"use client"

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { IconMoon, IconSun, IconSettings } from '@tabler/icons-react';

export default function Header () {
   const router = useRouter();
   const [count, setCount] = useState(0);

   return (
      <header className='flex gap-x-2 p-2 dark'>
         <Button variant={'outline'} onClick={() => setCount(count + 1)}>Increment { count }</Button>
         <Button variant={'outline'} onClick={() => router.push('/')}>Home</Button>
         <Button variant={'outline'} onClick={() => router.push('/users')}>Users</Button>
         <Button variant={'outline'} onClick={() => router.push('/add-user')}>Add user</Button>
         <Button variant={'default'} size={'icon'} ><IconSettings size={'22'}/></Button>
      </header>
   )
}