import {createContext,useContext,useEffect,useState} from 'react';
import {onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import {auth} from "./firebase"
import {db} from "./firebase"

import {doc,collection,query,where,getDoc,addDoc,setDoc} from "firebase/firestore"



const AuthContext=createContext({})
export const useAuth=()=>useContext(AuthContext)



export const AuthContextProvider=({children})=>{
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
  



    const provider = new GoogleAuthProvider();

    useEffect(()=>{

        const unsubscribe=onAuthStateChanged(auth,(user)=>{

            if(user){
                console.log(user)
                setUser({
                    userid:user.uid,
                    email:user.email,
                    photoURL:user.photoURL,
                    displayName:user.displayName
                })
            }
            else{
                setUser(null)
            }

            setLoading(false)

        })

        return ()=>unsubscribe()

    },[])
    

    const signUp=(email,password,first,last)=>{
        createUserWithEmailAndPassword(auth,email,password).then(async(result)=>{

            const status=setDoc(doc(db,"users",result.user.uid),{
                        email:result.user.email,
                        photoURL:"https://ui-avatars.com/api/?name="+first+' '+last,
                        displayName:first+' '+last,
                        status:"first"
                    })
                      
        }).catch((err)=>{
            
            console.log(err)
        });

    }
    const login=(email,password)=>{
        signInWithEmailAndPassword(auth,email,password).then(async(result)=>{
            const docRef=doc(db,"users",result.user.uid);
            const docSnap=await getDoc(docRef)   


        }).catch((err)=>{
           console.log(err.code)
        })
    }

    const loginWithGoogle= () => {
        signInWithPopup(auth, provider)
            .then(async(result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;

                const docRef=doc(db,"users",result.user.uid);
                const docSnap=await getDoc(docRef)
        
          
                if(docSnap.exists()){
                     
                    console.log("Document Exists")
                
                }
                else{
                      
                        const status=setDoc(doc(db,"users",result.user.uid),{
                            email:result.user.email,
                            photoURL:result.user.photoURL||"unknown",
                            displayName:result.user.displayName||"unknown",
                            status:"first"
                        })
                }
                
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                
                console.log(error)
            });
    };
    

    const logOut=async()=>{
        setUser(null)
        return signOut(auth)
    }



    return <AuthContext.Provider value={{user,login,signUp,logOut,loginWithGoogle}}>
    {loading?null:children}
    </AuthContext.Provider>
    
}