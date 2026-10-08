import { useEffect } from "react"

function ChatRoom(){
    const onConnected = (theme)=>{
        console.log(theme)
    }
    const theme = "dark"
    useEffect(()=>{
        onConnected(theme)
    },[])
}
export default ChatRoom;