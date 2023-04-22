import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


export default function Bubble({ message }){

    const [user] = useAuthState(auth);
    console.log(user.uid)
    console.log (message.uid)
    console.log (message.uid === user.uid)
    return(
        <div 
        className= {` rounded-3xl py-1 pr-3 pl-1 text-white bg-blue-800 w-fit flex flex-row flex-nowrap items-center mx-4 my-3 relative
        ${message.uid === user.uid ? " self-end rounded-br-md" : " bg-gray-400"}`}>
            <p className=" absolute top-[-15px] left-2 text-xs">{message.name}</p>
            <img className=" h-[35px] w=[35px] rounded-full mr-2" src={message.avatar}></img>
            <p>{message.text}</p>
        </div>
    )
}