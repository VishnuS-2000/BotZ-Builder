import React,{useState,useEffect} from "react"
import { NextPage } from "next"
import { TextField } from "@mui/material"
import Link from "next/link"
import {useAuth} from "../auth"
import {useRouter} from "next/router"

import Notification from "../components/UI/alerts"

import {db} from "../firebase"


const Login:NextPage=()=>{

    const router=useRouter()
    const [resetPassword,setResetPassword]=useState(false)

    const{user,login,loginWithGoogle}=useAuth()

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    console.log(user)

    
    const handleLogin=(e)=>{
        e.preventDefault()

        try{
        login(email,password)
        router.push("/dashboard")
        }

        catch(err){
            console.log(err)
        }
        

    }

    const handleSocialLogin=()=>{
        try{
        loginWithGoogle()
        console.log(user)
        router.push("/dashboard")
       
        }
        catch(err){
           console.log(err)
        }
    }

    useEffect(()=>{
        if(user){
            router.push("/dashboard")
        }
    
    },[router,user])
    

    return(

    <div className="bg-gradient-to-r from-blue-400 to-indigo-800 min-h-screen flex flex-col justify-center px-10 py-10 items-center">
            
            <div className="bg-white w-full flex px-5 py-5 drop-shadow rounded-lg md:w-1/2  items-center">
            
            <div className="hidden lg:flex w-2/3">
                <img src="./images/robo.jpg"/>

            </div>
            
            {resetPassword?<form className="flex flex-col w-full space-y-8 items-start  px-10 py-10 justify-between  ">
            <h1 className="text-xl my-2 space-y-3 font-bold md:text-2xl ">Reset your Password</h1>

            <TextField variant="standard" label="Email" />

            <div className="flex justify-evenly space-x-5">
            <button className="bg-blue-800 hover:bg-blue-600 transition-all duration-500 px-3 py-2 rounded-lg text-white font-bold" onClick={()=>{setResetPassword(false)}}>Back</button>
            <button className="bg-blue-800 hover:bg-blue-600 transition-all duration-500 px-3 py-2 rounded-lg  text-white font-bold">Send Mail</button>
            </div>
                </form>


            :
            
            <form className="flex flex-col w-full space-y-3 items-start  px-10 py-10 justify-between  ">
            <h1 className="text-xl my-2 space-y-3 font-bold md:text-2xl ">Sign In</h1>

            <TextField variant="standard" label="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <TextField variant="standard" label="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

                <p className="text-sm my-4 underline cursor-pointer" onClick={()=>{
                    setResetPassword(true)
                }}>Forgot Password</p>
                <div className="text-sm my-4 flex w-full" >
                    <p>Don't have a Account?</p>
                <Link href="/signup">
                <p className="underline cursor-pointer">{" "}Create One</p>
                </Link>
                </div>

            



      
            <Link href="/dashboard">
            <button className="bg-blue-800 hover:bg-blue-600 transition-all duration-500 px-3 py-2 rounded-lg duration-700 text-white font-bold" onClick={handleLogin}>Continue</button>
            </Link>
            
            <div className="flex py-3 flex-col justify-center space-y-3 lg:hidden">
            <button className="px-2 bg-white py-1 flex w-full drop-shadow border rounded-md text-md font-medium justify-between items-center"><img src="./images/google.png" className="w-10" onClick={handleSocialLogin} /> Continue with Google </button>
            <button className="px-2 bg-white py-2 flex w-full drop-shadow border rounded-md text-md font-medium  justify-between items-center"><img src="./images/fb.png" className="w-8 mr-1"/>Continue with Facebook</button>

            </div>
          
             </form>
}
   

            

            </div>
            
            {!resetPassword&&<div className="hidden lg:flex bg-gray-50 rounded-md my-6 p-5  items-center flex-col w-1/2 space-y-4">

<button className="px-5 bg-white py-2 flex w-1/3 drop-shadow border rounded-md text-md font-medium justify-between items-center" onClick={handleSocialLogin}><img src="./images/google.png" className="w-10"/>Login with Google </button>
<button className="px-4 bg-white py-2 flex w-1/3 drop-shadow border rounded-md text-md font-medium  justify-between items-center"><img src="./images/fb.png" className="w-8"/>Login with Facebook</button>



</div>
}


    </div>)

}

export default Login;