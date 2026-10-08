import { useState } from "react";
function User(){
    const[user,setUser] = useState({
        name:"Giorgi",
        age:20
    });
    const updateUser = () =>{
       setUser({
      name: "Nika",
      age: 25
    });
    }
    return(
        <div>
            <button onClick={updateUser}>update</button>
            <p>{user.name}</p>
            <p>{user.age}</p>
        </div>
    );
}
export default User;