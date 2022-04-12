import { TextField } from '@mui/material'
import React from 'react'

  
const Modal=({botName, setBotName, setShowModal, botAction, title, desc, primaryColor})=>{

     console.log('botName', botName)


    return <div className='flex justify-center items-center fixed bg-black/50 bg-blur-3xl w-screen h-screen top-0 bottom-0 left-0 right-0'>
  
  
        <div className='bg-gray-50 p-10 rounded-lg'>
            <form className='space-y-5'>
            <h1 className='text-xl font-bold'>{title}</h1>
            <p className='text-medium text-gray-500'>{desc}</p>
            <TextField label="Bot Name"  fullWidth value={botName} defaultValue={botName} onChange={({target: {value}}) => setBotName(value)} />
            <button className='w-1/3 bg-gray-200 p-2 rounded-lg' onClick={()=>{setShowModal(false)}}>Cancel</button>
            
            <button className={`w-1/3 ${primaryColor} hover:bg-blue-600 transition-all duration-500 rounded-lg p-2 ml-3 text-white font-medium`} onClick={botAction}>Confirm</button>
            
  
            </form>
        </div>
  
    </div>
  
  
  
  }

export default Modal