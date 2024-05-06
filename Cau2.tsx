// import React from 'react'
import React, { useState } from 'react'

export default function Cau2() {
    const [user , setUser] = useState<string>();
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
      setUser(e.target.value);
      console.log(user);
    }
  return (
    <div>
      Cau 2
      <label htmlFor="">Dữ liệu người dùng : {user}</label>
      <br />
      <input type="text" onChange={handleChange}/>
    </div>
  )
}
