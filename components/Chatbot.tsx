import React,{useState} from 'react';
import Chat from "./Chat";
import {TextField,Button} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

function Chatbot() {



  const [showBot,setShowBot]=useState(false);

  return (
    <div>

    
    {showBot&&
    <div className='flex flex-col  h-screen w-screen z-50 px-5 py-10 fixed right-0 bottom-0 top-0  justify-start  bg-white rounded-tl-3xl rounded-tr-3xl rounded-br-3xl drop-shadow self-end md:w-1/3 top-auto lg:h-3/4 px-0 py-0'>

      <div className="flex items-center w-full p-8 rounded-tl-xl rounded-br-xl  bg-gradient-to-r from-blue-500 to-indigo-800">
        <h1 className="text-2xl font-extrabold text-gray-50">BOT Z</h1>
        <Button className='text-white rounded-full absolute right-0' onClick={()=>{setShowBot(false)}}><CloseIcon style={{fontSize:"2rem"}}/></Button>

     
        </div>
        <div className="flex w-full h-full flex-col overflow-y-auto  p-10">

        <Chat content='Machine Learning ' bot={true}/>
        <Chat content='Deep Learning' bot={false}/>
        <Chat content="Artificial Intelligence" bot={false}/>


        </div>


       

        <div className="flex  bottom-0 w-full px-10 py-4 fixed bg-white">
        <TextField variant="outlined" label="Type a message" fullWidth/>
        <button className="ml-4 rounded-full py-4 px-4 bg-gradient-to-r from-blue-500 to-indigo-800 "><SendIcon/></button>
        </div>
    

      </div>}
      
      {!showBot&&<button className="bg-gradient-to-r from-blue-500 to-indigo-800 px-5 py-3 rounded-full text-2xl font-bold fixed bottom-5 right-5 z-50" onClick={()=>{setShowBot(!showBot)}}>
          <h1>Z</h1>
        </button>}


        


    </div>
  )
}

export default Chatbot