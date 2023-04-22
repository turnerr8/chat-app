import SendMessage from "./SendMessage"
import { useEffect, useState, useRef } from "react";
import ChatBox from "./ChatBox";

import Bubble from "./Bubble";
import Chat from "./Chat";

export default function Messages() {
    
    const scroll = useRef();        
   

    return( 
        <div className=" relative row-span-6 col-span-5 bg-gray-300 flex flex-col">
            <ChatBox />
        </div>

    )
}