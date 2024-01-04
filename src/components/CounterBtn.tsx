import { useState } from "react";

export default function CounterBtn () {
   const [count, setCount] = useState(0);
   const classBtn = 'border border-neutral-800 px-4 py-3 rounded-md hover:bg-neutral-900 transition-all active:bg-neutral-800';
 
   function incrementCounter () {
     console.log('Increment!');
     setCount(count + 1);
     
   }

   function decrementCounter () {
     console.log('Increment!');
     setCount(count - 1);
     
   }
 
   return (
     <>
       <h1>Counter: { count }</h1>
       <button onClick={incrementCounter} className={classBtn}>Increment</button>
       <button onClick={decrementCounter} className={classBtn}>Decrement</button>
     </>
   )
 }