import React,{useState,createContext,useContext} from "react"
import Link from "next/link"



import BuildIcon from '@mui/icons-material/Build';
import BugReportIcon from '@mui/icons-material/BugReport';
import CodeIcon from '@mui/icons-material/Code';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import {Avatar } from "@mui/material";
import Button from '@mui/material/Button';

import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';





import {useAuth} from "../../auth"



export default function SideMenu(){
   
   const {logOut,user}=useAuth()

   const [expanded,setExpanded]=useState(true)


    return <div className="flex flex-col h-full justify-evenly text-white bg-gradient-to-tl from-blue-500 to-indigo-800 border-gray-200 bg-white drop-shadow rounded-br-2xl rounded-tr-2xl font-sans fixed top-0 bottom-0 left-0">


    <div className="space-y-4">
       <IconButton className="text-lg font-medium" style={{color:"#fff",position:"absolute",top:0,right:5}} onClick={()=>{setExpanded(!expanded)}}>{expanded?<CloseIcon/>:<OpenInFullIcon/>}</IconButton>
    
       <div className="flex w-full px-2 py-2  space-x-5 cursor-pointer">
                
               <Link href="/account">
                <Button>
         
                <Avatar src={user.photoURL} style={{fontSize:"1rem"}}/>
                {expanded&&<h1 className="text-white font-bold ml-5">{user.displayName}</h1>}
                </Button>
                </Link>
 

                </div>





    
    
    
    <div className="flex w-full px-2 py-2  space-x-5 cursor-pointer">
                

         <Link href={{pathname:"/home",query:{id:user.userid}}}>
                <Button>
         
                <HomeIcon style={{fontSize:"2rem",color:"white"}}/>
                {expanded&&<h1 className="text-white font-bold ml-5">Home</h1>}
                </Button>

                </Link>
 

                </div>
            

              
            
            
             <div className="flex w-full px-2 py-2 cursor-pointer">

               <Link href={{pathname:"/design",query:{id:user.userid}}}>
                <Button className="text-center font-bold">

                <BuildIcon style={{fontSize:"2rem",color:"white"}}/>
                {expanded&&<h1 className="text-white font-bold ml-5">Build</h1>}
                </Button>

                </Link>
         
                </div>




                <div className="flex w-full px-2 py-2 cursor-pointer">
              

               <Link href={{pathname:"/test",query:{id:user.userid}}}>
                <Button className="text-xl text-center font-bold">
                <BugReportIcon style={{fontSize:"2rem",color:"white"}}/>      
                {expanded&&<h1 className="text-white font-bold ml-5">Test</h1>}
            </Button>

            </Link>

                </div>
        
<div className="flex w-full px-2 py-2 cursor-pointer">


<Link href={{pathname:"/integrate",query:{id:user.userid}}}>
<Button className="text-xl text-center font-bold">
<CodeIcon style={{fontSize:"2rem",color:"white"}}/>
{expanded&&<h1 className="text-white font-bold ml-5">Integrate</h1>}
</Button>

</Link>

</div>

</div>
          <div className="flex w-full px-2 py-3 cursor-pointer self-end">
         
        
          <Button className="text-xl text-center font-bold" onClick={logOut}>
                <LogoutIcon style={{fontSize:"2rem",color:"white"}}/>    
                {expanded&&<h1 className="text-white font-bold ml-5">Logout</h1>}
            </Button>
           
         
         
            </div>

        



   

</div>


}



