import ChatRoom from "./Components/ChatRoom"
function App() {
  return (
    <>
  <ChatRoom/>
  {/* განსხვავება:
    useEffect-ს ჭირდება dependency array, useEffectEvent-ს არა, იმიტომ რომ props-ის ბოლო მნიშვნელობებს უყურებს */}
    {/* ციკლებსა და ოპერატორებს შორის გაწერილი ჰუკი არ გაეშვება */}
    </>
  )
}

export default App
