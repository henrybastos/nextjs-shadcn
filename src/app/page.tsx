"use client"

import { useState, useEffect } from "react";
import CounterBtn from "@/components/CounterBtn";

function LabeledInput () {
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log(`Counter: ${ value }`);
  }, [value]);

  return (
    <>
      <h1>{ value }</h1>
      <input className="p-2 bg-neutral-950 rounded" type="text" placeholder="Put your text in here" onChange={(evt) => setValue(evt.target.value)} />
    </>
  )
}

export default function Home() {
  return (
    <>
      <CounterBtn />
      <LabeledInput />
    </>
  )
}