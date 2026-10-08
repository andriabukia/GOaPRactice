function Input2(){
    const handleChange = (e)=>{
        console.log(e);
    }
    return(
        <>
        <input onChange={(e)=>{
            handleChange(e.target.value)
        }} type="text" />
        </>
    );
}
export default Input2;