import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";



export default function Nav(){

    const [user] = useAuthState(auth);
    const signIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    }
    const signOut = () => {
        auth.signOut();
    }
    return(
        <div className=" w-full col-span-6 bg-zinc-300 flex items-center">

            {user ? (
                <button onClick={signOut} type="button">Sign Out</button>
            ) : (
                <button ><img onClick={signIn} src={GoogleSignin} alt="google sign in button"  /></button>
            )}
            
        </div>
    )
}