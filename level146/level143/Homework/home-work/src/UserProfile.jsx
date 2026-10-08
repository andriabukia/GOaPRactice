import { useEffect } from "react";
function UserProfile(){
    const fetchData = (data)=>{
        return fetch(data);
    }
    const link = "https:something";
    const count = 5;
    useEffect(()=>{
        fetchData(link);
    },[]);
    useEffect(()=>{
        document.title = $`{count}`;
    },[count]);
    return(
        <>
        
        </>
    );
}
export default UserProfile