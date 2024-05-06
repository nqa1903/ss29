import React, { useState } from 'react'

export default function cau4() {
    const [address , setAress] = useState<string>("");
    const handleAdress = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setAress(e.target.value);
        console.log(address);
        
    }
  return (
    <div>
        Cau 4 
        <label htmlFor="">Tỉnh / Thành phố : {address} </label>
        <select onChange={handleAdress}>
            <option value="">Chọn Tỉnh / Thành phố</option>
            <option value="Hà Nội"> Hà Nội </option>
            <option value="Hà Nam"> Hà Nam </option>
            <option value="Ninh Bình">Ninh Bình</option>  
            <option value="Thanh Hóa">Thanh Hóa</option>
            <option value="Nghệ An">Nghệ An</option>
        </select>
    </div>
  )
}
