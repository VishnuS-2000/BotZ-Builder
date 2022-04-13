import React, { useEffect,useState } from 'react'
import SideMenu from "../components/DashBoard/Menu"
import {useAuth }from "../auth"

import helloImage from "./Assets/Dashboard/hello.jpg"

import AddIcon from '@mui/icons-material/Add';

import {db} from "../firebase"

import {doc,getDoc,updateDoc,onSnapshot,serverTimestamp} from "firebase/firestore"
import {defaultIntents} from "./Assets/Dashboard/intents"

import Link from "next/Link"

import {useRouter} from "next/router"

import { IconButton, TextField } from '@mui/material';

import Modal from '../components/DashBoard/Modal';



export default function Home() {

  const {user}=useAuth()
  const [showModal,setShowModal]=useState(false)
  const[botName,setBotName]=useState("")
  const[bot,setBot]=useState()
  const[showDeleteModal,setShowDeleteModal]=useState(false)
  const[showEditModal,setShowEditModal]=useState(false)
  





  const docRef=doc(db,"users",user.userId);



  const createBot=async(e)=>{

    e.preventDefault()

    console.log(user.userId)
    const status=await updateDoc(docRef,{bot:{name:botName,intents:defaultIntents}})

    setShowModal(false)
    setBotName("")
  

  }

  const deleteBot=async(e)=>{

    e.preventDefault()
    const status=await updateDoc(docRef,{bot:null})
    const document=await getDoc(docRef)

    console.log(document)
    setShowDeleteModal(false)
    
  }


  const editBot=async(e)=>{

    e.preventDefault()
    const status=await updateDoc(docRef,{bot:{name:botName,trainingData:data}})
    setShowEditModal(false)
  }




  useEffect(()=>{


   const unsub=onSnapshot(docRef,(doc)=>{


    if(doc.exists()){
    setBot(doc.data().bot)
    setBotName(doc.data().bot?.name)
    
    console.log('name',bot?.name)
    }
    })



  },[])


const DeleteModal=()=>{
  return <div className='flex justify-center items-center fixed bg-black/50 bg-blur-3xl w-screen h-screen top-0 bottom-0 left-0 right-0'>


  <div className='bg-gray-50 p-10 rounded-lg'>
      <form className='space-y-5'>
      <h1 className='text-xl font-bold'>Confirm Deleting the Bot</h1>
      <p className='text-medium text-gray-500'>You about to permanently delete the bot and all of its data</p>
   
      <button className='w-1/3 bg-gray-200 p-2 rounded-lg' onClick={()=>{setShowDeleteModal(false)}}>Cancel</button>
      
      <button className='w-1/3 bg-red-800 hover:bg-blue-600 transition-all duration-500 rounded-lg p-2 ml-3 text-white font-medium' onClick={deleteBot}>Delete</button>
      
      </form>
  </div>

</div>
}



const EditModal=()=>{

  return <div className='flex justify-center items-center fixed bg-black/50 bg-blur-3xl w-screen h-screen top-0 bottom-0 left-0 right-0'>


  <div className='bg-gray-50 p-10 rounded-lg'>
      <form className='space-y-5'>
      <h1 className='text-xl font-bold'>Edit Bot</h1>
      <p className='text-medium text-gray-500'>Rename your Bot</p>
      <TextField label="Bot Name" fullWidth value={botName} onChange={(e)=>{
        setBotName(e.target.value)}} defaultValue={bot}/>
      <button className='w-1/3 bg-gray-200 p-2 rounded-lg' onClick={()=>{setShowModal(false)}}>Cancel</button>
      
      <button className='w-1/3 bg-yellow-500 hover:bg-blue-600 transition-all duration-500 rounded-lg p-2 ml-3 text-white font-medium' onClick={editBot}>Confirm</button>
      

      </form>
  </div>

</div>



}







  return (
    <>
    <div className="w-full flex flex-col items-center h-screen py-20 justify-start space-y-20">
      <SideMenu/>


    <div className="drop-shadow rounded-xl space-y-3 bg-white p-5 w-3/4 md:w-1/2">
      <h1 className="text-3xl  font-medium font-sans text-center">Welcome,{user.displayName}</h1>
      <p className='text-center'></p>
      </div>




      
        {bot
        ?<div className=" flex flex-col items-start rounded-lg space-y-10 md:w-1/2">
          
        <h1 className="text-2xl font-bold">Bot In Progress</h1>
        <div className="flex flex-col justify-center items-start p-10 w-1/2 cursor-pointer drop-shadow border space-y-10">
          <h1 className="text-2xl font-medium">{bot.name}</h1>
          {/* <p className="text-gray-700">Created: {Date(bot.createdAt)}</p> */}
        
          
          <div className="flex space-x-5 items-center">

          <button className="bg-blue-800 hover:bg-blue-600 transition-all duration-500 px-3 py-2 text-white rounded-lg">Continue</button>
         
          <div className="rounded-full h-8 w-8 flex items-center justify-center cursor-pointer bg-white  hover:bg-[#1e90ff33]" onClick={()=>setShowEditModal(true)}>
                <svg className="text-[#1e90ff]" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
            </div>
            <div className="rounded-full h-8 w-8 flex items-center justify-center cursor-pointer bg-white hover:bg-[#FF634733]" onClick={()=>setShowDeleteModal(true)}>
                <svg className="text-[#FF6347]" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            </div>

          </div>
          </div>

        
        </div>:<div className="flex flex-col items-center space-y-2">

        <IconButton style={{width:"50px",height:"50px"}} onClick={()=>{setShowModal(true)}}>
          <AddIcon/>
        </IconButton>
  

        <p className='text-gray-600 text-center'>Start Building your Bot</p>
        </div>
    
        }
    




    </div>


    {showModal&&<Modal {...{botName, setBotName, setShowModal, botAction: createBot, title:"Create Bot", desc:"Get started by naming your bot.",primaryColor: "bg-blue-800"}} />}
    {showDeleteModal&&<DeleteModal/>}
    {showEditModal&&<Modal {...{botName, setBotName, setShowModal, botAction: editBot, title:"Edit Bot", desc:"Rename your bot.",primaryColor: "bg-yellow-500"}} />}

    </>


  )
}


