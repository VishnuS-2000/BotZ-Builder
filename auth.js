import {createContext,useContext,useEffect,useState} from 'react';
import {onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import {auth} from "./firebase"
import {db} from "./firebase"

import {doc,collection,query,where,setDoc,getDoc,onSnapshot} from "firebase/firestore"
import {getAuth,updateProfile,sendEmailVerification} from "firebase/auth"




const AuthContext=createContext({})
export const useAuth=()=>useContext(AuthContext)



export const AuthContextProvider=({children})=>{
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

  



    const provider = new GoogleAuthProvider();

    useEffect(()=>{

        const unsubscribe=onAuthStateChanged(auth,(user)=>{
            
        
            if(user){

         
                
        

                    setUser({userId:user.uid})

           
           

       
            }
            else{
                setUser(null)
            }

            setLoading(false)

        })

        return ()=>unsubscribe()

    },[])
    

    const signUp=(email,password,first,last)=>{

        console.log(first,last)
        
        createUserWithEmailAndPassword(auth,email,password).then(async(result)=>{
            
            const profile=getAuth()
     
        

            const status1=await setDoc(doc(db,"users",result.user.uid),{

                        firstName:first,
                        lastName:last,
                        organizationName:'',
             
 
                    
                    })
                    
             
                    const status2=updateProfile(profile.currentUser,{displayName:first+' '+last,photoURL:"https://ui-avatars.com/api/?name="+first+' '+last})

                 
                      
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
                        
                        const status=await setDoc(doc(db,"users",result.user.uid),{
                            
                            firstName:'',
                            lastName:'',
                            organizationName:'',
                            
                   
                            
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



    return <AuthContext.Provider value={{user,setUser,login,signUp,logOut,loginWithGoogle}}>
    {loading?null:children}
    </AuthContext.Provider>
    
}