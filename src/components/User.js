import { useState } from "react";
const User=({name})=>{
    const [count]=useState(0);
    return <div className="user-card">
      
        <h1>count={count}</h1>
       <h2>name:{name}</h2>
       <h3>contact:123@gmail.com</h3>
    </div>
}

export default User;

