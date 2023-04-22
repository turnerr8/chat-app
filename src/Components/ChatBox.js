import { useEffect, useState, useRef } from "react";
import { query, collection, orderBy, onSnapshot, limit, } from "firebase/firestore";
import { db } from "../firebase";
import Bubble from "./Bubble";
import SendMessage from "./SendMessage";

export default function ChatBox() {
    
    const scroll = useRef();        
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const q = query(
            collection(db, 'messages'),
            orderBy("createdAt"),
            limit(50)
        );
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let messages = [];
            QuerySnapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id});
            });
            setMessages(messages);
        });
        return () => unsubscribe;

    }, []);

    return( 
            <div className=" h-full flex flex-col flex-nowrap overflow-scroll">
                {messages?.map((message) => (
                    <Bubble key={message.id} message={message}/>
                ))}
                <span ref={scroll}></span>
                <SendMessage scroll={scroll} />
            </div>

    )
}