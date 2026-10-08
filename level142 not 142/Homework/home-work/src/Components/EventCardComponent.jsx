function EventCardComponent(props){
    return(
        <>
        <h3>{props.title}</h3>
        <h3>{props.date}</h3>
        <h3>{props.isOnline ? "Online Event" : "In-Person Event"}</h3>
        </>
    );
}
export default EventCardComponent;