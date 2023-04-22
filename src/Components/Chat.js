import People from "./People";
import Messages from "./Messages";
export default function Chat(){
    return(
        <div className=" col-span-6 row-span-5 bg-zinc-100 grid grid-cols-6 grid-rows-6 p-4">
            <People />
            <Messages />
        </div>
    )
}