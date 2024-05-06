import React, { useState } from 'react'

export default function Cau3() {
    const [date , setDate] = useState<string>("");
    const handleDate = (e : React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
        console.log(date);
    }
  return (
    <div>
      Câu 3
      <p>Thời gian : {date}</p>
      <input type="date" onChange={handleDate}/>
    </div>
  )
}
