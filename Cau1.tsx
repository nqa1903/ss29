import React from 'react'

export default function cau1() {
    const handleClick = () => {
        console.log("Clicked");
    }
  return (
    <div>
      Cau 1
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}
