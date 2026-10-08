function HandleChangeInput(){
    const handleChange = (e)=>{
        console.log(e.target.value);
    }
    return(
        <>
        <input onChange={(event)=>{
            handleChange(event);
        }} type="text" />
        </>
    );

}
export default HandleChangeInput;