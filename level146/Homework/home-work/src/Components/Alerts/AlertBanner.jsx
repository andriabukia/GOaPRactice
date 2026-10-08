import { useState } from "react";
import './Alert.css';
function AlertBanner(){
    const [isOpen,setIsOpen] = useState(true);
    const [text,setText] = useState("დახურვა");
    const bannerStyle = {
        backgroundColor:'#e8f5e9',
        fontSize:'18px',
        padding:'12px 20px',
        display:'flex',
        opacity:0.95
    }
    return(
        <>
        <div className="div">
        <div className="textContainer">
        {isOpen === true ? <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus error ipsam provident fugit hic nemo et consequuntur, ipsa illum animi asperiores laborum expedita quibusdam laboriosam sequi quae nulla? Suscipit, beatae.</p> : console.log("დახურულია")}
        </div>
        <button onClick={()=>{
            if(isOpen === true){
                setIsOpen(false)
                setText("გახსნა")
            }else{
                setIsOpen(true)
                setText("დახურვა")
            }
        }} style={{
            backgroundColor:'antiquewhite',
            color:'brown',
            border:'2px solid brown',
            height:'50px',
            width:'200px'
        }}>{text}</button>
        </div>
        
        </>
    );
}
export default AlertBanner;