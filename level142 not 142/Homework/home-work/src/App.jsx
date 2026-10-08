import Cart from "./Components/Cartz/Cart";
import Badge from "./Components/Badge";
import Order from "./Components/Orderz/Order";
import EventCardComponent from "./Components/EventCardComponent";
import Member from "./Components/Member";
function App(){
  const arrOfObjects = [
    {name:"andria",role:"Admin",experience:"all"},
    {name:"nika",role:"Admin",experience:"all"},
    {name:"data",role:"customer",experience:"none"},
    {name:"mariami",role:"customer",experience:"none"}
  ]
  age = 16
  return(
    <>
    {/* <Cart/> */}
    {/* <Badge text="Shake Shack" status="brown"/> */}
    {/* <Order orderId="12" totalAmount="50" /> */}
    {/* <EventCardComponent title="ra sad rodis" date="25/2026/10" isOnline={true} /> */}
    <Member arr={arrOfObjects} />
    <h1>{age}</h1>
    </>
  );
}
export default App;