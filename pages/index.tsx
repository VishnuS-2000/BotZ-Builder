import type { NextPage } from 'next'


// import components

import NavBar from '../components/Index/NavBar'
import Chatbot from "../components/Widgets/Chatbot"


// import icons

import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BugReportIcon from '@mui/icons-material/BugReport';
import CodeIcon from '@mui/icons-material/Code';
import { TextField } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';




const Home: NextPage = () => {
  return (
    <div className="w-screen md:max-w-7xl mx-auto">

    <NavBar/>
    

  {/* Home Section */}



    <div className='bg-white w-7xl md:h-auto flex justify-between  py-8'>
      <div className='flex flex-col justify-center px-8 py-6 space-y-12 '>

        <h1 className='text-5xl font-bold font-sans  lg:text-6xl'>Build a Bot to your Liking!</h1>
        <h2 className='text-xl lg:text-2xl'>Engage Your Customers with an AI conversational experience with your own custom bots deployed in minutes.</h2>

      </div>

      <div className="flex">

      <img src='./images/chatbot.jpg' className='hidden md:flex max-w-md lg:max-w-xl'/>
      </div>

    </div>




    {/*Feature Points*/}


    <div className='grid grid-cols-1 grid-rows-2 gap-12 px-6 py-4 md:grid-cols-2 '>

    <div className='flex space-between items-center px-2 py-2 max-w-md object-contain bg-white  rounded-lg  '>
      <button className=' mx-3 px-3 py-3 bg-gradient-to-r from-blue-400 to-indigo-800 rounded-full'>
      <DashboardCustomizeIcon/>
      </button>
      <div className=''>
      <h2 className='text-2xl font-semibold'>Easy Customization</h2>
      <h3 className='text-md'>Customize the bot to make it your own</h3>
      </div>
   
    </div>

    <div className='flex space-between items-center px-2 py-2 max-w-md object-contain bg-white  rounded-lg '>
      <button className='mx-3 px-3 py-3 bg-gradient-to-r from-blue-400 to-indigo-800 rounded-full'>
      <PsychologyIcon/>
      </button>
      <div className=' '>
      <h2 className='text-2xl font-semibold'>NLP Engine</h2>
      <h3 className='text-md'>Improve Communication with Bots using Natural Language Processing Model</h3>
      </div>
    </div>


    <div className='flex space-between items-center px-2 py-2 max-w-md object-contain bg-white  rounded-lg '>
      <button className='mx-3 px-3 py-3 bg-gradient-to-r from-blue-400 to-indigo-800 rounded-full'>
      <BugReportIcon/>
      </button>
      <div className=' '>
      <h2 className='text-2xl font-semibold'>Test the Bot</h2>
      <h3 className='text-md'>Easily Test the Bot before Deploy </h3>
      </div>
   
    </div>



    <div className='flex space-between items-center px-2 py-2 max-w-md object-contain bg-white  rounded-lg '>
      <button className='mx-3 px-3 py-3 bg-gradient-to-r from-blue-400 to-indigo-800 rounded-full'>
      <CodeIcon/>
      </button>
      <div className=''>
      <h2 className='text-2xl font-semibold'>Easy Integration</h2>
      <h3 className='text-md'>Integrate the Bot with minimal code to your app.</h3>
      </div>
   
    </div>


    </div>

    {/* Feature Cards Section */}

      <div className="flex flex-col ">
        <div className="flex flex-col items-center  space-y-5  py-5 text-center  lg:flex-row  justify-between">

        <img src="./images/design.webp" className="max-w-sm md:max-w-lg "/>
       
        <div className="flex flex-col items-center w-3/4 space-y-3 md:w-1/2">
        <h2 className="text-2xl font-bold ">Design</h2>
        <h3 className="text-lg font-medium text-gray-800">Build your Bot in just a few minutes.</h3>
        </div>
       
        </div>

        <div className='flex flex-col items-center space-y-5  py-5 text-center   lg:flex-row-reverse justify-between'>
        <img src="./images/testing.jpg" className="max-w-sm md:max-w-lg" />
        
        <div  className="flex flex-col items-center w-3/4  space-y-3 md:w-1/2">
        <h2 className="text-2xl font-bold">Test</h2>
        <h3 className="text-xl font-medium text-gray-800">Easily Test the bot created before launching.</h3>
        </div>
        
        </div>

        <div className='flex flex-col items-center   space-y-5 py-5 text-center  lg:flex-row  justify-between space-x-5'>

        <img src="./images/integrate.webp" className="max-w-sm md:max-w-lg "/> 
        <div  className="flex flex-col items-center w-3/4 space-y-3 md:w-1/2">
        <h2 className="text-2xl font-semibold ">Integrate</h2>
        <h3 className="text-xl font-medium text-gray-800">
        Seamlessly integrate the bot to your webapp or website.</h3>
        </div>
        </div>

     
      </div>


    {/* Contact Section */}


    <div className="flex mx-auto  justify-center shadow-inset shadow-lg my-20 shadow-blue-300  w-5/6 bg-white space-y-5 px-10 py-10 md:max-w-7xl rounded-xl border border-gray-200">


      <div className="flex flex-col items-center justify-center text-center space-y-10 relative z-0 mb-5">

      <div>
      <h1 className='text-2xl text-center font-bold text-black'>Get In Touch</h1>
      <h3 className='text-lg font-xl font-medium text-gray-600'>Fill the form below for feedback or queries</h3>
      </div>
      
      <form className="flex flex-col items-center  space-y-8 w-full">
      <TextField variant='filled' label="First Name" fullWidth/>
      <TextField variant='filled' label="Last Name" fullWidth/>
      <TextField variant='filled' label="Phone" fullWidth/>
      <TextField variant='filled' label="Email" fullWidth/>
     <button className="rounded-lg px-3 py-2 relative bg-blue-800 hover:bg-blue-600 transition-all duration-500 drop-shadow text-white z-10">Send Message</button>
      </form>

      </div>

 
    <div className='hidden lg:inline-flex justify-center  align-center'>
      <img src='./images/contact.webp' className="max-w-xl"/>
    </div>
    </div>


    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe className="gmap_iframe" height="400px" width="100%"  scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Cochin University&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">

        </iframe>
        <a href="https://kokagames.com/">FNF Mods</a>
      </div>
      
    </div>

  





  {/* Footer Section */}



  <div className='bg-gray-100 px-10 py-10 flex justify-between'>
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

  {Chatbot}

  <Chatbot/>



  

    </div>





  )
}

export default Home
