import React,{useState,useEffect} from "react"
import SideMenu from "../components/DashBoard/Menu"
import {TestBot} from "../components/Widgets/Chatbot"
import {db} from "../firebase"
import {useAuth} from "../auth"

import {onSnapshot,doc} from "firebase/firestore"

import Link from "next/link"
import { IconButton, TextField,InputAdornment } from "@mui/material"
import AddBoxIcon from '@mui/icons-material/AddBox';


export default function Test(){
    const [bot,setBot]=useState(null)

    const {user}=useAuth()
    const docRef=doc(db,"users",user.userId)


    useEffect(()=>{

      const unsub=onSnapshot(docRef,(doc)=>{

          if(doc.exists()){
      
            setBot(doc.data().bot)
            
          }


      })

    

    },[])


   return<>
    <SideMenu/>

   
    <div className="w-screen h-screen flex flex-col justify-center items-center">

      {bot?<>
      <div className="flex flex-col w-1/3 p-2 justify-start"><h1 className="text-3xl font-medium">Test {bot.name}</h1>
      <p>Last Tested at</p>
      </div>
    <TestBot intents={bot.intents}/>
    </>:<div className="flex flex-col w-11/12 h-full justify-center items-center space-y-5">
                  <h1 className="text-2xl font-medium text-gray-700 font-sans">Oho! No Bot Available ,Start Creating</h1>
                  <Link href="/home">
                  <IconButton ><AddBoxIcon style={{fontSize:"2.3rem"}}/></IconButton>
                  </Link>

          </div>}
      

  </div>

    
  </>


}

