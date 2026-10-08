// import UserProfile from "./Components/UserProfile";
import Practice from "./Components/Practice";
function App(){
  let name = "andria";

  return(
    <>
    {/* <UserProfile/> */}
    {/* <h1>გამარჯობა {name}</h1> */}
    <Practice name={name} price={16.99} quantity={4}  />
    </>
  );
}
export default App;