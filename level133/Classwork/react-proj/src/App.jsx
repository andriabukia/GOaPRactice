import { useState } from 'react';
import Header from "./components/Header";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {
  let age = 20;

  const [countTime, setCountTime] = useState(0);
  const clickk = (event) => {
    event.stopPropagation();
    setCountTime(countTime + 1); 
  };

  return (
    <>
      <Header />
      <Footer/>
      <Navbar/>
    </>
  );
}

export default App;