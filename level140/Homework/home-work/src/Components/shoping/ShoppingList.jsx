import ItemCard from "./ItemCard";
function ShoppingList(){
    return(
        <div>
            <ItemCard name="apple" quantity="52" isInStock={true}/>
            <ItemCard name="banana" quantity="25" isInStock={true}/>
            <ItemCard name="jjk manga" quantity="1mln" isInStock={false}/>
        </div>
    );

}
export default ShoppingList;