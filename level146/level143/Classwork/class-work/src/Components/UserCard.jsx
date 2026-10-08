import { useState } from "react";
import { useEffect } from "react";
function UserCard( {name,age,role}){
    const [name,setName] = useState();
    // setName({...name,lastname:lastname+1})
   setInterval(()=>{
    
   },1000)
    
return (
<div className = "card">
<h2>{name ==="andria" ? "ok" : "bad"}</h2>
<p>ასაკი: {age}</p>
<p>პოზიცია:{role}</p>
</div>
);
}

export default UserCard;