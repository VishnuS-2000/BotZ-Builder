import React from "react";
import ChatBot from "../components/Chatbot";
import BuildIcon from '@mui/icons-material/Build';
import BugReportIcon from '@mui/icons-material/BugReport';
import CodeIcon from '@mui/icons-material/Code';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { Tooltip } from "@mui/material";
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';


export default function DashBoard(){


    return <div className="flex  bg-gray-200 w-screen h-screen">
        <div className="flex flex-col justify-center text-white bg-gradient-to-tl from-blue-500 to-indigo-800 border-gray-200 bg-white drop-shadow px-3 py-3 lg:space-y-8">


        <div>
        <div className="flex w-full px-3 py-3 cursor-pointer">
                    
                    <Tooltip title="Home" placement="right" TransitionComponent={Fade} TransitionProps={{timeout:800}} > 
                    <Button>
               

                    <HomeIcon style={{fontSize:"2.5rem",color:"white"}}/>
                    </Button>
                    </Tooltip>

                    </div>
                

                  
                
                
                 <div className="flex w-full px-3 py-3 cursor-pointer">
                 <Tooltip title="Build" placement="right" TransitionComponent={Fade} TransitionProps={{timeout:800}}> 
                    <Button className="text-center font-bold">

                    <BuildIcon style={{fontSize:"2.5rem",color:"white"}}/>

                    </Button>
                    </Tooltip>
                    </div>




                    <div className="flex w-full px-3 py-3 cursor-pointer">
                    <Tooltip title="Testing" placement="right" TransitionComponent={Fade} TransitionProps={{timeout:800}}> 
                
                    <Button className="text-xl text-center font-bold">
                    <BugReportIcon style={{fontSize:"2.5rem",color:"white"}}/>      
                
                </Button>
                  </Tooltip>
                    </div>
            
                    <div className="flex w-full px-3 py-3 cursor-pointer">


<Tooltip title="Integrate" placement="right" TransitionComponent={Fade} TransitionProps={{timeout:800}}> 
<Button className="text-xl text-center font-bold">
<CodeIcon style={{fontSize:"2.5rem",color:"white"}}/>
</Button>
</Tooltip>

</div>

              <div className="flex w-full px-3 py-3 cursor-pointer absolute bottom-0 ">
             
              <Tooltip title="Logout" placement="right" TransitionComponent={Fade} TransitionProps={{timeout:800}}>   
              <Button className="text-xl text-center font-bold">
                    <LogoutIcon style={{fontSize:"2.5rem",color:"white"}}/>      
                </Button>
                   </Tooltip>
                
                </div>

            


    </div>
       

    </div>
    </div>
}