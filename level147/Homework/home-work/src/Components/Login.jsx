import { useState } from "react";

function Login(){
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [isTrue, setIsTrue] = useState(false);
    const RealEmail = "example@gmail.com";
    const password = "123didgori";
    return(
        <>
        <input type="text" onChange={(e)=>{
            setEmail(e.target.value);
        }} />
        <input type="text" onChange={(e)=>{
            setPass(e.target.value);
        }}/>
        <button onClick={()=>{
            if(email === RealEmail && pass === password){
                setIsTrue(true);
                console.log(`email: ${email}, password: ${pass}`);
            }else{
                setIsTrue(false)
                console.log(`email: ${email}, password: ${pass}`);
            }
        }}>click me</button>
        <h1>{isTrue ? "both of them are right" : "none of them are right"}</h1>
        </>
    );
}
export default Login;