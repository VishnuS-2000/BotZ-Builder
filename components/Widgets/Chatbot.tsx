import React,{useState,useEffect} from 'react';
import Chat from "./Chat";
import {TextField,Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


import {getResponse} from "../../chatService"

function Chatbot() {



  const [showBot,setShowBot]=useState(false);
  const [typing,setTyping]=useState(false)

  return (
    <div>


    
    {showBot&&
    <div className='flex flex-col  h-full w-full z-50  fixed right-0 bottom-0 top-0  justify-start  bg-white  drop-shadow self-end md:w-1/3 top-auto lg:h-3/4 '>
      
      {/* Chatbot Header */}

      <div className="flex justify-between items-center w-full p-4   bg-gradient-to-r from-blue-500 to-indigo-800">
        <h1 className="text-2xl font-extrabold text-gray-50">BOT Z</h1>
        <button className="text-2xl font-extrabold text-gray-50 " onClick={()=>{setShowBot(false)}}><MoreHorizIcon style={{fontSize:"2.5rem"}}/></button>

     
        </div>

        
      {/* Chatbot Content Section */}

        <div className="flex relative top-0 bottom-50 w-full h-full flex-col overflow-y-auto  p-10">

        <Chat content='Machine Learning ' bot={true}/>
        <Chat content='Deep Learning' bot={false}/>
        <Chat content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ligula in lorem porttitor elementum. Integer condimentum vehicula odio, at ornare ante porttitor eu.  " bot={false}/>
        <Chat content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ligula in lorem porttitor elementum. Integer condimentum vehicula odio, at ornare ante porttitor eu.  " bot={true}/>
        <Chat content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ligula in lorem porttitor elementum. Integer condimentum vehicula odio, at ornare ante porttitor eu.  " bot={false}/>
        <Chat content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ligula in lorem porttitor elementum. Integer condimentum vehicula odio, at ornare ante porttitor eu.  " bot={true}/>


        </div>


             {/* Chatbot Input Section */}

        <div className="flex justify-evenly bottom-0  w-full relative border-t border-gray-300 bg-gray-50">
        <input type="text" className="p-5 h-full w-3/4 outline-none  rounded-lg text-lg md:text-xl" placeholder="Type a Message" onChange={()=>{setTyping(true)}}/>
        {typing&&<button className="relative py-2 px-4 "><SendIcon style={{fontSize:"2rem",color:"blue"}}/></button>}
        </div>
    

      </div>}

             {/* Chatbot Show */}
      
      {!showBot&&<button className="bg-gradient-to-r from-blue-500 to-indigo-800 px-5 py-3 rounded-full text-2xl font-bold fixed bottom-5 right-5 z-50" onClick={()=>{setShowBot(!showBot)}}>
          <h1>Z</h1>
        </button>}


        


    </div>
  )
}



export default Chatbot

export const TestBot=({intents})=>{

  const [userQuery,setUserQuery]=useState("")
  const [messages,setMessages]=useState([])

  useEffect(()=>{

    console.log("rendered")

  },[])

  const handleClick=async(e)=>{

    e.preventDefault()
    
    try{
    const userMessage={message:userQuery,bot:false}
    const {reply}=await getResponse(intents,userQuery)
    
    setMessages([...messages,userMessage])

    setUserQuery("")
    
    const botMessage={message:reply,bot:true}


    setMessages([...messages,userMessage])

    console.log(messages)

    }
    catch(err){
      console.log(err)
    }
  }


  return <>
 
  <div className='flex flex-col bg-white  drop-shadow  md:w-1/3  lg:h-3/4 '>
    
    {/* Chatbot Header */}

    <div className="flex justify-between items-center w-full p-4   bg-gradient-to-r from-blue-500 to-indigo-800">
      <h1 className="text-2xl font-extrabold text-gray-50">BOT Z</h1>
      <button className="text-2xl font-extrabold text-gray-50 " ><MoreHorizIcon style={{fontSize:"2.5rem"}}/></button>

   
      </div>

      
    {/* Chatbot Content Section */}

      <div className="flex relative top-0 bottom-50 w-full h-full flex-col overflow-y-auto  p-10">

      {messages.map((e,index)=>{

          return <Chat key={index} content={e.message} bot={e.bot}/>
      })}

      </div>


           {/* Chatbot Input Section */}

      <div className="flex justify-evenly bottom-0  w-full relative border-t border-gray-300 bg-gray-50">
      <input type="text" className="p-5 h-full w-3/4 outline-none  rounded-lg text-lg md:text-xl" placeholder="Type a Message" value={userQuery} onChange={(e)=>{setUserQuery(e.target.value)}}/>
      <button className="relative py-2 px-4 "><SendIcon style={{fontSize:"2rem",color:"blue"}} onClick={handleClick}/></button>
      </div>


    </div>

        
  </>
}