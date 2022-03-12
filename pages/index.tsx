import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import Chatbot from "../components/Chatbot"

import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BugReportIcon from '@mui/icons-material/BugReport';
import CodeIcon from '@mui/icons-material/Code';
import { TextField } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import zIndex from '@mui/material/styles/zIndex';



const Home: NextPage = () => {
  return (
    <div className="flex flex-col  max-w-7xl mx-auto">
      <NavBar/>
    

    <div className='bg-gray-50 w-7xl md:h-auto flex justify-between px-4 py-12'>

      <div className='flex flex-col justify-center px-8 py-6 space-y-12 '>

        <h1 className='text-5xl font-bold font-sans  lg:text-6xl'>Build a Bot to your Liking!</h1>
        <h2 className='text-xl lg:text-2xl'>Engage Your Customers with an AI conversational experience with your own custom bots deployed in minutes.</h2>

      </div>

      <div className="flex">

      <img src='./images/chatbot.jpg' className='hidden md:flex max-w-md lg:max-w-xl'/>
      </div>




    </div>

    <div className='grid grid-cols-1 grid-rows-2 gap-8 px-6 py-4 md:grid-cols-2 '>

    <div className='flex space-between items-center px-2 py-2max-w-md object-contain bg-white  rounded-lg '>
      <button className=' mx-3 px-3 py-3 bg-gradient-to-r from-blue-400 to-indigo-800 rounded-full'>
      <DashboardCustomizeIcon/>
      </button>
      <div className=' '>
      <h2 className='text-2xl font-semibold'>Easy Customization</h2>
      <h3 className='text-md'>Customize the bot to make it your own</h3>
      </div>
   
    </div>

    <div className='flex space-between items-center px-2 py-2max-w-md object-contain bg-white  rounded-lg '>
      <button className='mx-3 px-3 py-3 bg-gradient-to-r from-blue-400 to-indigo-800 rounded-full'>
      <PsychologyIcon/>
      </button>
      <div className=' '>
      <h2 className='text-2xl font-semibold'>NLP Engine</h2>
      <h3 className='text-md'>Improve Communication with Bots using Natural Language Processing Model</h3>
      </div>
   
    </div>

    <div className='flex space-between items-center px-2 py-2max-w-md object-contain bg-white  rounded-lg '>
      <button className='mx-3 px-3 py-3 bg-gradient-to-r from-blue-400 to-indigo-800 rounded-full'>
      <BugReportIcon/>
      </button>
      <div className=' '>
      <h2 className='text-2xl font-semibold'>Test the Bot</h2>
      <h3 className='text-md'>Easily Test the Bot before Deploy </h3>
      </div>
   
    </div>

    <div className='flex space-between items-center px-2 py-2max-w-md object-contain bg-white  rounded-lg '>
      <button className='mx-3 px-3 py-3 bg-gradient-to-r from-blue-400 to-indigo-800 rounded-full'>
      <CodeIcon/>
      </button>
      <div className=' '>
      <h2 className='text-2xl font-semibold'>Easy Integration</h2>
      <h3 className='text-md'>Integrate the Bot with minimal code to your app.</h3>
      </div>
   
    </div>

    
   



    </div>

   

      <div className="flex px-20 py-20 flex-col ">
        <div className="flex flex-col items-center p-5 space-y-10 text-center  lg:flex-row  justify-between">

        <img src="./images/design.webp" className="max-w-lg"/>
        <h2 className="text-2xl font-bold text-gray-800">Design Your Bot in Minutes</h2>
        <h3></h3>
        </div>

        <div className='flex flex-col items-center  p-5 space-y-10 text-center   lg:flex-row-reverse justify-between'>
        <img src="./images/testing.jpg" className="max-w-lg " />
        <h2 className="text-2xl font-bold text-gray-800">Easily Test your Bot Before Launch</h2>
        <h3></h3>
        </div>

        <div className='flex flex-col items-center  p-5 space-y-10 text-center  lg:flex-row  justify-between space-x-5'>

        <img src="./images/integrate.webp" className="max-w-lg"/>
        <h2 className="text-2xl font-semibold text-gray-800">Integrate Your Bot to a Web App using Minimal code.</h2>
        <h3></h3>
        </div>



     
      </div>



    <div className="flex mx-auto  justify-center shadow-lg my-20 shadow-blue-300  w-5/6 bg-white space-y-5 px-10 py-10 md:max-w-7xl rounded-xl border border-gray-300">


      <div className="flex flex-col items-center justify-center text-center space-y-10 relative z-0 mb-5">

      <div>
      <h1 className='text-2xl text-center font-bold text-blue-800'>Get In Touch</h1>
      <h3 className='text-lg font-xl font-medium text-blue-400'>Please Provide your Details for Support</h3>
      </div>
      
      <form className="flex flex-col items-center p-5 space-y-8 w-full">
      <TextField variant='standard' label="First Name"/>
      <TextField variant='standard' label="Last Name"/>
      <TextField variant='standard' label="Phone"/>
      <TextField variant='standard' label="Email"/>
     <button className="rounded-full px-3 py-2 relative bg-blue-800 drop-shadow text-white z-10">Send Message</button>
      </form>

      </div>




    
     
  

 
    <div className='hidden lg:inline-flex justify-center  align-center'>
      <img src='./images/contact.webp'/>
    </div>
    </div>

  





  {/* Footer Section */}



  <div className='bg-gray-200 px-10 py-10 flex justify-between'>
    <div className="">

    <h1 className="text-2xl font-bold">BOT Z</h1>
    <h3 className="text-lg ">Abdullah's Corner,CUSAT</h3>
    <h3 className="text-lg ">Kochi,682022</h3>

    <h3 className="my-4"><EmailIcon/>botzbuilder2022@gmail.com</h3>
    </div>

  

    <div className="">

    <h1 className='text-xl font-semibold'>Follow Us</h1>

    <div className="flex space-x-2">
     
      <h3><WhatsAppIcon/></h3>
      <h3><FacebookSharpIcon/></h3>
      <h3></h3>
      </div>   
    </div>

  </div>
    


    </div>





  )
}

export default Home
