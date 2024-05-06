import React, { useState } from 'react'

export default function Cau8() {
    const [count , setCount] = useState <number>(0);
    const handleClick = () => {
        setCount(count + 1);
    }
  return (
    <div>
      Cau 8 
      <button onClick={handleClick}>Click {count} lần</button>
    </div>
  )
}
