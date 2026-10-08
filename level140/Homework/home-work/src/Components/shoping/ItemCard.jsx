function ItemCard(props){
    return(
        <ul>
            <li><h1>{props.name}</h1></li>
            <li>{props.quantity}</li>
            <li>{props.isInStock == true ? "არის მარაგში" : "არ არის მარაგში"}</li>
        </ul>
    );
}
export default ItemCard;