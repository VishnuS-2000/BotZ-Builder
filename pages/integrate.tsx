import React,{useState} from "react"
import SideMenu from "../components/DashBoard/Menu"


import {useAuth} from "../auth"

import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function Integrate(){

  

  const {user}=useAuth()


  const data=[`<div class="chatbot" appId="${user.userId}"></div>`,
  `<link rel="stylesheet" src="https://vishnus-2000.github.io/BotZ-Widget/docs/index.css"/>`,
  `<script type="text/javascript" src="https://vishnus-2000.github.io/BotZ-Widget/docs/index.js"/>`
  
]

const [copied,setCopied]=useState(false)


    return (
        <div className="w-full flex justify-center p-20">
        <SideMenu/>


        <div className="w-11/12 flex flex-col p-10 justify-between space-y-12 ">
          
          <div className="space-y-5">
          <h1 className="text-3xl font-medium ">Integrate</h1>
          <p className="text-xl text-gray-600 font-medium">Copy the code and paste it to webapp/website</p>

          </div>

          <code className="w-1/3 bg-gray-50 self-center border p-10 rounded-xl relative">
              {copied?
              <p className="absolute right-5 top-5 font-bold">Copied!</p>:
              
              <CopyToClipboard text={data[0]+data[1]+data[2]} onCopy={()=>setCopied(true)} >
              <button className="absolute right-5 top-5">
                <IntegrationInstructionsIcon/>
              </button>
        </CopyToClipboard>
              }

         
              {data.map((line)=>{

                return <p>{line}</p>
              })}

        
              

          </code>

        </div>
  
      </div>
  
    
    
      )


}