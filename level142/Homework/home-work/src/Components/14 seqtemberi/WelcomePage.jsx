import { useEffect } from "react";

function WelcomePage(){

    useEffect(() =>{
        console.log("Welcome to my page")
        
    },[])
    
    return(
        <>
        <h1>welcome to my page</h1>
        </>
    );
}
export default WelcomePage;