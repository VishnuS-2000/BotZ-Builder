import React from "react"
import { NextPage } from "next"
import { TextField } from "@mui/material"


const SignUp:NextPage=()=>{



    return <div className="bg-gradient-to-r from-blue-400 to-indigo-800 min-h-screen flex flex-col justify-center px-12 py-12 items-center">
            
            <div className="bg-white w-5/6 h-5/6  flex  px-5 py-5 drop-shadow rounded-lg md:w-1/2  items-center">
            
            <div className="hidden lg:flex w-2/3">
                <img src="./images/robo.jpg"/>

            </div>
            <form className="flex flex-col w-full  space-y-1 items-start px-5 py-5 justify-between  ">
            <h1 className="text-xl my-2 space-y-3 font-bold md:text-2xl  ">Register</h1>
            

            <TextField variant="standard" label="First Name"  />
            <TextField variant="standard" label="Last Name"/>

            <TextField variant="standard" label="Email"  />
            <TextField variant="standard" label="Password"/>
            <TextField variant="standard" label="Confirm Password"/>    
        
            

            <br/>




            <button className="bg-blue-900 px-3 py-2 rounded-lg hover:bg-blue-700 duration-700 text-white font-bold">Create Account</button>
            
            <div className="flex py-3 flex-col justify-center space-y-3 lg:hidden">
            <button className="px-2 bg-white py-1 flex   drop-shadow border rounded-md text-md font-medium justify-between items-center"><img src="./images/google.png" className="w-10"/> Continue with Google </button>
            <button className="px-2 bg-white py-2 flex  drop-shadow border rounded-md text-md font-medium  justify-between items-center"><img src="./images/fb.png" className="w-8 mr-1"/>Continue with Facebook</button>

            </div>
            
            </form>

         

        

            </div>
            
            <div className="hidden lg:bg-gray-50  rounded-md  my-6 p-5 md:flex items-center flex-col w-1/2 space-y-4">

<button className="hidden lg:flex px-5 bg-white py-2  w-1/3 drop-shadow border rounded-md text-md font-medium justify-between items-center"><img src="./images/google.png" className="w-10"/> Continue with Google </button>
<button className="hidden lg:flex px-4 bg-white py-2  w-1/3 drop-shadow border rounded-md text-md font-medium  justify-between items-center"><img src="./images/fb.png" className="w-8"/>Continue with Facebook</button>



</div>
          
            


    </div>

}

export default SignUp;