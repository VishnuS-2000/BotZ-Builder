import React, { useEffect } from "react"
import SideMenu from "../components/DashBoard/Menu"



import {db} from "firebase"

import {setDoc,doc} from "firebase/firestore"
import { TextField } from "@mui/material"

export default function Design(){



   return (
        <div className="flex flex-col w-full h-screen flex items-center p-8">
          
          <SideMenu/>
          
        <div className="flex flex-col space-y-8 w-1/3 bg-gray-50 p-5 absolute left-20 top-1/4 justify-center">
        <h1 className="text-xl text-bold">Training Data</h1>
        <p>Enter your Data</p>
        <TextField label="Tag"/>
        <TextField label="Input"/>
        <TextField label="Responses"/>
        <button className="bg-blue-800 hover:bg-blue-600 transition-all duration-500 px-3 py-2 text-white rounded-lg">Add Intent</button>


        </div>




      </div>
  
    
    
      )

    }
