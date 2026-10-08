import { useEffect } from "react";
import { useState } from "react";
function SearchInput(){
    const[searchInput,setSearchInput] = useState("searchInput");
    const searchApi = (inp)=>{
        let jsonData =  fetch(inp);
        const realData = JSON.parse(jsonData);
        return realData;
    }
    useEffect(()=>{
        searchApi(searchInput);
        return()=>{
            setSearchInput();
        }
    },[searchInput])
    return(
        <>
        <h1>{searchApi}</h1>
        </>
    );
}
export default SearchInput;