import React, { useState } from 'react'

export default function Cau5() {
    const [isVisible , setIsVisible] = useState<boolean> (false);
    const handleClick = () =>{
        setIsVisible(!isVisible);
    }
  return (
    <div>
      Cau 5
      <p>Nếu giá trị là : {isVisible.toString()}</p>
      <button onClick={handleClick}>{isVisible ? "Hiện" : "Ẩn"}</button>
    </div>
  )
}
