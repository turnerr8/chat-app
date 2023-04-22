import React, {useState} from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";



export default function SendMessage({scroll}) {

    const [message, setMessage] = useState("");

    const sendMessage = async (event) =>{
        event.preventDefault();

        console.log(message);
        if( message.trim() === "" ){
            alert("enter message!");
            return;
        }

        const { uid, displayName, photoURL } = auth.currentUser;
        await addDoc(collection(db, "messages"), {
            text: message,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid,
        });
        setMessage("");
        scroll.current.scrollIntoView({behavior: "smooth"});

    }
    return(
            <form onSubmit={(event) => sendMessage(event)} className=" w-full flex flex-row justify-around p-3 bg-slate-400">
                <label htmlFor="inputMessage" hidden>Enter Message</label>
                <input value={message} onChange={(e)=> setMessage(e.target.value)} type="text" className=" w-3/4" name="inputMessage" id="inputMessage" placeholder="Message" ></input>
                <button type="submit" className=" rounded-xl bg-slate-500 px-3 py-1" >Send</button>
            </form>
    )
}