import React, { useState } from 'react'

export default function Cau10() {
    const genders = ["Nam" , "Nữ" , "Khác"];
    const [gender , setGender] = useState<string>("Nam");
    const randomGender = () =>{
        const randomIndex = Math.floor(Math.random() * genders.length);
        const randomGender = genders[randomIndex];
        setGender(randomGender);
    }
  return (
    <div>
      Câu 10
      <p>Gender : {gender}</p>
      <button onClick={randomGender}>Random Gender</button>
    </div>
  )
}
