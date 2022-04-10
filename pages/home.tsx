import React, { useEffect,useState } from 'react'
import SideMenu from "../components/DashBoard/Menu"
import {useAuth }from "../auth"

import helloImage from "./Assets/Dashboard/hello.jpg"

import AddIcon from '@mui/icons-material/Add';

import {db} from "../firebase"

import {doc,getDoc,updateDoc,onSnapshot} from "firebase/firestore"


import Link from "next/Link"

import {useRouter} from "next/router"

import { IconButton, TextField } from '@mui/material';



export default function Home() {

  const {user}=useAuth()
  const [showModal,setShowModal]=useState(false)
  const[botName,setBotName]=useState("")
  const[bot,setBot]=useState({})

  const docRef=doc(db,"users",user.userId);


  const createBot=async(e)=>{

    e.preventDefault()

    console.log(user.userId)
    const status=await updateDoc(docRef,{bot:{name:botName}})

    setShowModal(false)

    


  }


  const handleChange=(e)=>{


    setBotName(e.target.value)



  }


  useEffect(()=>{


   const unsub=onSnapshot(docRef,(doc)=>{

    console.log(doc.data())

    if(doc.exists()){
    setBot(doc.data().bot)
    
    }
    })

    console.log(bot)
   


  },[])



  
const Modal=()=>{


  return <div className='flex justify-center items-center fixed bg-black/50 bg-blur-3xl w-screen h-screen top-0 bottom-0 left-0 right-0'>


      <div className='bg-gray-50 p-10 rounded-lg'>
          <form className='space-y-5'>
          <h1 className='text-xl font-bold'>Create Bot</h1>
          <p className='text-medium text-gray-500'>Get started by naming your bot.</p>
          <TextField label="Bot Name" fullWidth value={botName} onChange={handleChange}/>

          <button className='w-1/3 bg-gray-200 p-2 rounded-lg' onClick={()=>{setShowModal(false)}}>Cancel</button>
          
          <button className='w-1/3 bg-blue-800 hover:bg-blue-600 transition-all duration-500 rounded-lg p-2 ml-3 text-white font-medium' onClick={createBot}>Confirm</button>
          
          </form>
      </div>

  </div>



}




  return (
    <>
    <div className="w-full flex flex-col items-center h-screen py-20 justify-center space-y-20">
      <SideMenu/>


    <div className="drop-shadow rounded-xl space-y-3 bg-white p-5 w-3/4 md:w-1/2">
      <h1 className="text-3xl  font-medium font-sans text-center">Welcome,{user.displayName}</h1>
      <p className='text-center'>You are currently at the Design Stage of the Bot</p>
      </div>




      
        {!bot?<div className="flex flex-col items-center space-y-2">

        <IconButton style={{width:"50px",height:"50px"}} onClick={()=>{setShowModal(true)}}>
          <AddIcon/>
        </IconButton>
  

        <p className='text-gray-600 text-center'>Start Building your Bot</p>
        </div>
    
        :<div className="bg-gray-50 p-10 rounded-lg">
        
        
        <h1>Bot Created Already</h1>
        
        </div>}
    




    </div>


    {showModal&&<Modal/>}

    </>


  )
}


