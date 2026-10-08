import { useState } from "react";
function Register(){
    const [name,setName] = useState("andria");
    const [age,setAge] = useState(16);
    const [isStudent,setIsStudent] = useState(true)

    return(
        <>
        <ul>
        <li>{name}</li>
        <li>{age}</li>
        <li>{isStudent ? "is student" : " is not student"}</li>
        </ul>
        <ol>
            <li><button onClick={() => setName("nika")}>Change Name</button></li>
            <li><button onClick={() => setAge(22)}>Change Age</button></li>
            <li><button onClick={() => setIsStudent(false)}>Toggle Student</button></li>
        </ol>
        </>
    );
}
export default Register;