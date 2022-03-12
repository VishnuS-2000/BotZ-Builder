import React,{useState} from 'react';
import Chat from "./Chat";
import {TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

function Chatbot() {



  const [showBot,setShowBot]=useState(false);

  return (
    <div>

    
    {showBot&&
    <div className='flex flex-col  h-screen w-screen z-50 px-5 py-3 fixed right-0 bottom-0  justify-start items-center bg-white rounded-tl-3xl rounded-tr-3xl rounded-br-3xl  drop-shadow self-end md:w-1/3 lg:h-3/4  px-0 py-0'>

      <div className="w-full p-5 rounded-tl-3xl  rounded-br-3xl bg-gradient-to-r from-blue-500 to-indigo-800">
        <h1 className="text-2xl font-extrabold">BOT Z</h1>

     
        </div>
        <div className="flex w-full  flex-col overflow-y-auto overflow-x-hidden p-5">

        <Chat content='Welcome to the Botz' bot={true}/>
        <Chat content='Welcome to the Botz' bot={false}/>
        <Chat content='Welcome to the Botz' bot={true}/>
        <Chat content='Welcome to the Botz' bot={true}/>
        <Chat content='Welcome to the Botz' bot={false}/>
        <Chat content='Welcome to the Botz' bot={true}/>
        <Chat content='Welcome to the Botz' bot={true}/>
        <Chat content='Welcome to the Botz' bot={false}/>
        <Chat content='DkjhKJKJHDkjhKJDHkjhKJDkjHKJZHDkjhJZKDkdlkwjfkwsfkjgwskjf' bot={false}/>

        </div>


       

        <div className="flex  bottom-0 w-full px-5 py-2 mb-20">
        <TextField variant="outlined" label="Type a message" fullWidth/>
        <button className="ml-1 rounded-full py-4 px-4 bg-gradient-to-r from-blue-500 to-indigo-800 "><SendIcon/></button>
        </div>
    

      </div>}
      
      <button className="bg-gradient-to-r from-blue-500 to-indigo-800 px-5 py-3 rounded-full text-2xl font-bold fixed bottom-5 right-5 z-50" onClick={()=>{setShowBot(!showBot)}}>
        {showBot?
        <h1>X</h1>:<h1>Z</h1>  
      }
        </button>


        


    </div>
  )
}

export default Chatbot