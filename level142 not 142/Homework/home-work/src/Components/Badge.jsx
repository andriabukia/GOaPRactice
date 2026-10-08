function Badge(props){
    return(
        <>
        <p style={{backgroundColor:props.status}}>{props.text}</p>
        </>
    );
}
export default Badge;