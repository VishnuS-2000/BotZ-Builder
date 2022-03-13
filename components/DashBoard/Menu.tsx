import React from "react"
import BuildIcon from '@mui/icons-material/Build';
import BugReportIcon from '@mui/icons-material/BugReport';
import CodeIcon from '@mui/icons-material/Code';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { Tooltip,Avatar } from "@mui/material";
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import NotificationsIcon from '@mui/icons-material/Notifications';

export  function SideMenu(){

    return <div className="flex flex-col h-full justify-evenly text-white bg-gradient-to-tl from-blue-500 to-indigo-800 border-gray-200 bg-white drop-shadow rounded-br-2xl rounded-tr-2xl fixed top-0 left-0">


    <div className="space-y-4 lg:space-y-8">
    <div className="flex w-full px-2 py-2 cursor-pointer">
                
                <Tooltip title="Home" placement="right" TransitionComponent={Fade} TransitionProps={{timeout:800}} > 
                <Button>
           

                <HomeIcon style={{fontSize:"2rem",color:"white"}}/>
                </Button>
                </Tooltip>

                </div>
            

              
            
            
             <div className="flex w-full px-2 py-2 cursor-pointer">
             <Tooltip title="Build" placement="right" TransitionComponent={Fade} TransitionProps={{timeout:800}}> 
                <Button className="text-center font-bold">

                <BuildIcon style={{fontSize:"2rem",color:"white"}}/>

                </Button>
                </Tooltip>
                </div>




                <div className="flex w-full px-2 py-2 cursor-pointer">
                <Tooltip title="Testing" placement="right" TransitionComponent={Fade} TransitionProps={{timeout:800}}> 
            
                <Button className="text-xl text-center font-bold">
                <BugReportIcon style={{fontSize:"2rem",color:"white"}}/>      
            
            </Button>
              </Tooltip>
                </div>
        
                <div className="flex w-full px-2 py-2 cursor-pointer">


<Tooltip title="Integrate" placement="right" TransitionComponent={Fade} TransitionProps={{timeout:800}}> 
<Button className="text-xl text-center font-bold">
<CodeIcon style={{fontSize:"2rem",color:"white"}}/>
</Button>
</Tooltip>

</div>

</div>
          <div className="flex w-full px-2 py-3 cursor-pointer self-end">
         
          <Tooltip title="Logout" placement="right" TransitionComponent={Fade} TransitionProps={{timeout:800}}>   
          <Button className="text-xl text-center font-bold">
                <LogoutIcon style={{fontSize:"2rem",color:"white"}}/>      
            </Button>
               </Tooltip>
            
            </div>

        



   

</div>


}



export function TopMenu(){

return <div className="hidden w-full justify-between md:inline-flex p-5 drop-shadow  fixed z-50 top-0 right-0 left-0 bg-white">

<h1>Top Bar</h1>

<div className="flex items-center">

<button className="cursor-pointer ">
<NotificationsIcon style={{fontSize:"2rem"}}/>
</button>

<Avatar src=""/>

<div className="">
<h1 className="font-bold text-xl">Username</h1>
<h3 className="text-md">Edit Profile</h3>

</div>

</div>



</div>




}