import React,{useState} from "react"
import { NextPage } from "next"
import { TextField } from "@mui/material"
import Link from "next/link"

const Login:NextPage=()=>{

    const [resetPassword,setResetPassword]=useState(false)

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
            <button className="bg-blue-900 px-3 py-2 rounded-lg hover:bg-blue-700 duration-700 text-white font-bold" onClick={()=>{setResetPassword(false)}}>Back</button>
            <button className="bg-blue-900 px-3 py-2 rounded-lg hover:bg-blue-700 duration-700 text-white font-bold">Send Mail</button>
            </div>
                </form>


            :
            
            <form className="flex flex-col w-full space-y-3 items-start  px-10 py-10 justify-between  ">
            <h1 className="text-xl my-2 space-y-3 font-bold md:text-2xl ">Sign In</h1>

            <TextField variant="standard" label="Email"  />
            <TextField variant="standard" label="Password"/>

                <p className="text-sm my-4 underline cursor-pointer" onClick={()=>{
                    setResetPassword(true)
                }}>Forgot Password</p>
                <div className="text-sm my-4 flex w-full" >
                    <p>Don't have a Account?</p>
                <Link href="/signup">
                <p className="underline cursor-pointer">{" "}Create One</p>
                </Link>
                </div>

            




            <button className="bg-blue-900 px-3 py-2 rounded-lg hover:bg-blue-700 duration-700 text-white font-bold">Continue</button>

            <div className="flex py-3 flex-col justify-center space-y-3 lg:hidden">
            <button className="px-2 bg-white py-1 flex w-full drop-shadow border rounded-md text-md font-medium justify-between items-center"><img src="./images/google.png" className="w-10"/> Continue with Google </button>
            <button className="px-2 bg-white py-2 flex w-full drop-shadow border rounded-md text-md font-medium  justify-between items-center"><img src="./images/fb.png" className="w-8 mr-1"/>Continue with Facebook</button>

            </div>
          
             </form>
}
   

            

            </div>
            
            {!resetPassword&&<div className="hidden lg:bg-gray-50 rounded-md my-6 p-5 md:flex items-center flex-col w-1/2 space-y-4">

<button className="px-5 bg-white py-2 flex w-1/3 drop-shadow border rounded-md text-md font-medium justify-between items-center"><img src="./images/google.png" className="w-10"/>Login with Google </button>
<button className="px-4 bg-white py-2 flex w-1/3 drop-shadow border rounded-md text-md font-medium  justify-between items-center"><img src="./images/fb.png" className="w-8"/>Login with Facebook</button>



</div>
}


    </div>)

}

export default Login;