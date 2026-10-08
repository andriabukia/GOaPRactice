function MemberCard(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.position}</p>
            <img src={props.photo} alt="sumPhoto" />
        </div>
    );
}
export default MemberCard;