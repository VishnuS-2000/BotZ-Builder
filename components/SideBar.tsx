import React from "react"
import Link from "next/link";

import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InfoIcon from '@mui/icons-material/Info';



export default function SideBar(){


    return <div  className="grid grid-cols-2 grid-rows-3 gap-3 w-full px-10 py-4  text-xl  font-medium md:hidden">
            
        <h1><HomeIcon/>Home</h1>
        <h1><ListIcon/>Features</h1>
        <h1><InfoIcon/>About</h1>
        <h1><SupportAgentIcon/>Contact</h1>

      <Link href="/login">
      <button className="px-2 py-1 drop-shadow bg-gradient-to-r from-blue-800 to-indigo-800 rounded-full text-white">Sign In</button>
      </Link>
    
      <Link href="/signup">
      <button className="px-2 py-1 rounded-full border text-blue-700 border-blue-800">Get Started</button>
      </Link>

    </div>


}
