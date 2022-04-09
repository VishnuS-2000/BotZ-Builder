import React,{useState,useEffect} from "react"
import { NextPage } from "next"
import { TextField } from "@mui/material"

import {useRouter} from "next/router"


import {useAuth} from "../auth"

const SignUp:NextPage=()=>{

    const {signUp}=useAuth()
    const[first,setFirst]=useState("")
    const[last,setLast]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[confirm,setConfirm]=useState("")


    const router=useRouter()
 

    const handleSignUp=(e)=>{
        e.preventDefault()
        try{
            if(password==confirm){
                signUp(email,password,first,last)
                router.replace("/home")
            }

            
        }
        catch(err){
            console.log(err.message)
        }

    }

 
    


    return <div className="bg-gradient-to-r from-blue-400 to-indigo-800 min-h-screen flex flex-col justify-center px-12 py-12 items-center">
            
            <div className="bg-white w-full h-5/6  flex  px-5 py-5 drop-shadow rounded-lg md:w-1/2  items-center">
            
            <div className="hidden lg:flex w-2/3">
                <img src="./images/robo.jpg"/>

            </div>
            <form className="flex flex-col w-full  space-y-1 items-start px-5 py-5 justify-between  ">
            <h1 className="text-xl my-2 space-y-3 font-bold md:text-2xl  ">Register</h1>
            

            <TextField variant="standard" label="First Name" onChange={(e)=>{setFirst(e.target.value)}}/>
            <TextField variant="standard" label="Last Name" onChange={(e)=>{setLast(e.target.value)}}/>

            <TextField variant="standard" label="Email"  onChange={(e)=>{setEmail(e.target.value)}}/>
            <TextField variant="standard" label="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <TextField variant="standard" label="Confirm Password" onChange={(e)=>setConfirm(e.target.value)}/>    
        
            

            <br/>




            <button className="bg-blue-800 hover:bg-blue-600 transition-all duration-700 px-3 py-2 rounded-lg text-white font-bold" onClick={handleSignUp}>Create Account</button>
            
        
            
            </form>

         

        

            </div>
            
 
            


    </div>

}

export default SignUp;