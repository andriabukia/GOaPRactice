function Member(props){
    return(
        <>
        <ul>
        {props.arr.map((member) => (
            <li>
                <h3>Name: {member.name}</h3>
                <h3>Role: {member.role}</h3>
                <h3>Experience: {member.experience}</h3>
            </li>
        ))}
           </ul>
        </>
    );
}
export default Member;