import React, { useState } from 'react'

export default function Cau7(){
    const [numbers , setNumbers] = useState<number[]>([]);
    const addNumber = () => {
        const randomNumber = Math.floor(Math.random() * 100);
        setNumbers([...numbers , randomNumber]);
    }
  return (
    <div>
      Cau 7 
      <p>Mảng số : [{numbers.join(' , ')}]</p>
      <button onClick={addNumber}>Add Element</button>
    </div>
  )
}
