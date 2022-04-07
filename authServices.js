import { GoogleAuthProvider,signInWithPopup,signOut } from "firebase/auth"

const authService=async()=>{
    loginWithGoogle:async()=>{
        const provider=new GoogleAuthProvider()

        try{
            const userCred=await signInWithPopup(provider)
            return {user:userCred}
        }

        catch(err){
            return {error:err.message};
        }

    }

    logout:async()=>{
        await signOut()
    }

}

export default authService;