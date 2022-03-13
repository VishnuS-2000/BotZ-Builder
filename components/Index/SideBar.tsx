import React from "react"
import Link from "next/link";

import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InfoIcon from '@mui/icons-material/Info';



export default function SideBar(){


    return <div  className="grid grid-cols-2 grid-rows-3 gap-3 w-full px-10 py-4  text-xl  font-medium md:hidden">
            
        <h1 className="text-2xl text-center"><HomeIcon/>Home</h1>
        <h1 className="text-2xl  text-center"><ListIcon/>Features</h1>
        <h1 className="text-2xl text-center"><InfoIcon/>About</h1>
        <h1 className="text-2xl text-center"><SupportAgentIcon/>Contact</h1>

      <Link href="/login">
      <button className="px-1 py-1 drop-shadow bg-blue-800  hover:bg-blue-600 rounded-lg text-white transition-all duration-500">Sign In</button>
      </Link>
    
      <Link href="/signup">
      <button className="px-1 py-1 rounded-lg border text-blue-800 border-blue-800">Get Started</button>
      </Link>

    </div>


}
