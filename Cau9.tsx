import React, { useState } from 'react'

interface User {
    email : string;
    password : string;
}

export default function cau9() {
    const [user , setUser] = useState<User> ({
        email : "",
        password : "",
    })
    const [submit , setSubmit] = useState<boolean> (false);
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name
        let value = e.target.value
        setUser({
            ...user , [name]:value
        })
    }
    const handleSubmit = () =>{
        setSubmit(!submit);
        console.log(user);
    }
  return (
    <div>
      Cau 9 <br />
      <h2>Form</h2>
      <input type="text" placeholder='Nhập email' onChange={handleChange} name="email"/>
      <br />
      <input type="text" placeholder='Nhập mật khẩu' onChange={handleChange} name="password"/>
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      {submit && (
                <div>
                    <p>Email: {user.email}</p>
                    <p>Mật khẩu: {user.password}</p>
                </div>
            )}
    </div>
  )
}
