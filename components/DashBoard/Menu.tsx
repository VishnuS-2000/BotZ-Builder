import React,{useState,useEffect} from "react"
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


import {getAuth} from "firebase/auth"




import {useAuth} from "../../auth"



export default function SideMenu(){


const[profile,setProfile]=useState(null)





   
   const {logOut,user}=useAuth()

   const [expanded,setExpanded]=useState(false)


   useEffect(()=>{

    if(user){

        setProfile(getAuth().currentUser)

    }
    


},[])


    return <div className="flex flex-col h-full justify-evenly text-white bg-gradient-to-tl from-blue-500 to-indigo-800 border-gray-200 bg-white drop-shadow rounded-br-2xl rounded-tr-2xl font-sans fixed top-0 bottom-0 left-0 z-50">


    <div className="space-y-4">
       <IconButton className="text-lg font-medium" style={{color:"#fff",position:"absolute",top:0,right:5}} onClick={()=>{setExpanded(!expanded)}}>{expanded?<CloseIcon/>:<OpenInFullIcon/>}</IconButton>
    
       <div className="flex w-full px-2 py-2  space-x-5 cursor-pointer">
                
               <Link href="/account">
                <Button>
         
                <Avatar src={profile?.photoURL} style={{fontSize:"1rem"}}/>
                {expanded&&<h1 className="text-white font-medium ml-5">{profile?.displayName}</h1>}
                </Button>
                </Link>
 

                </div>





    
    
    
    <div className="flex w-full px-2 py-2  space-x-5 cursor-pointer">
                

         <Link href="/home">
                <Button>
         
                <HomeIcon style={{fontSize:"2rem",color:"white"}}/>
                {expanded&&<h1 className="text-white font-medium ml-5">Home</h1>}
                </Button>

                </Link>
 

                </div>
            

              
            
            
             <div className="flex w-full px-2 py-2 cursor-pointer">

               <Link  href="/design">
                <Button className="text-center">

                <BuildIcon style={{fontSize:"2rem",color:"white"}}/>
                {expanded&&<h1 className="text-white font-medium ml-5">Build</h1>}
                </Button>

                </Link>
         
                </div>




                <div className="flex w-full px-2 py-2 cursor-pointer">
              

               <Link  href="/test">
                <Button className="text-xl text-center">
                <BugReportIcon style={{fontSize:"2rem",color:"white"}}/>      
                {expanded&&<h1 className="text-white font-medium ml-5">Test</h1>}
            </Button>

            </Link>

                </div>
        
<div className="flex w-full px-2 py-2 cursor-pointer">


<Link  href="/integrate">
<Button className="text-xl text-center font-medium">
<CodeIcon style={{fontSize:"2rem",color:"white"}}/>
{expanded&&<h1 className="text-white font-medium ml-5">Integrate</h1>}
</Button>

</Link>

</div>

</div>
          <div className="flex w-full px-2 py-3 cursor-pointer self-end">
         
        
          <Button className="text-xl text-center font-bold" onClick={logOut}>
                <LogoutIcon style={{fontSize:"2rem",color:"white"}}/>    
                {expanded&&<h1 className="text-white font-medium ml-5">Logout</h1>}
            </Button>
           
         
         
            </div>

        



   

</div>


}



