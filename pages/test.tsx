import React,{useState,useEffect} from "react"
import SideMenu from "../components/DashBoard/Menu"
import {TestBot} from "../components/Widgets/Chatbot"
import {db} from "../firebase"
import {useAuth} from "../auth"



import {onSnapshot,doc,updateDoc} from "firebase/firestore"

import Link from "next/link"
import { IconButton, TextField,InputAdornment } from "@mui/material"
import AddBoxIcon from '@mui/icons-material/AddBox';

import Head from "next/head"
import Script from "next/script"

import {XYPlot, XAxis, YAxis,VerticalBarSeries} from 'react-vis';



export default function Test(){
    const [bot,setBot]=useState(null)

    const {user}=useAuth()
    const docRef=doc(db,"users",user.userId)


    useEffect(()=>{

      const unsub=onSnapshot(docRef,(doc)=>{

          if(doc.exists()){
      
            setBot(doc.data().bot)
            
          }


      })

    

    },[])



    const Themes=()=>{
  
      const [currentTheme,setCurrentTheme]=useState()

      const data=[
        {
          start:"from-blue-500",
          end:"to-indigo-800",
    
        },
        {
          start:"from-black",
          end:"to-gray-800",
    
        }
        ,
        {
          start:"from-yellow-500",
          end:"to-green-800"
    
        },{
          start:"from-red-500",
          end:"to-yellow-800"
        }
      ]
    
    
    
      useEffect(()=>{
    
        setCurrentTheme(bot.theme)
    
      },[])

      const updateTheme=async(e)=>{
        e.preventDefault()

        const status=await updateDoc(docRef,{bot:{...bot,theme:currentTheme}})

      }
    
      return <>
      
      {currentTheme&&<div className="w-full space-y-2"><h1 className="">Current Theme</h1>
    
    
    
    
        <button className={`bg-gradient-to-tl ${currentTheme.start} ${currentTheme.end} px-8 py-4 rounded-lg`} >
        &nbsp;
          </button>
          </div>}
          <h1 className="">Available</h1>
      <div className="flex justify-between">
        
        {
        
       
        
        
        data.map((theme)=>{
    
    
        return <button className={`bg-gradient-to-tl ${theme.start} ${theme.end} px-8 py-4 rounded-lg`} onClick={()=>{setCurrentTheme(theme)}}>
        &nbsp;
          </button>
      
    
    
    
      })
      
      }
    
    
      </div>
    
      <button className="bg-blue-800 hover:bg-blue-600 transition-all duration-500 px-3 py-2 rounded-lg duration-700 text-white w-1/4 mt-4" onClick={updateTheme}>Save Theme</button>
      </>
    
    
    }













   return <>
    <SideMenu/>


    {bot?<div className="flex flex-col w-screen h-screen p-20">

  <div class="chatbot" appId={user.userId}></div>

      <div className="flex-col flex w-11/12 px-10 py-2 space-y-4">

      <h1 className="text-3xl font-medium text-left">Test {bot.name}</h1>
      <p className="text-xl text-gray-600">You can test the bot here by clicking the 'Z' Icon at bottom right of the page</p>

      <div className="w-full h-full py-10 flex space-y-6">
            <h1 className="text-2xl font-medium">Intents</h1>

            <div className="flex w-full justify-center py-10">
            <div className="space-y-5">
            <p className="font-medium">Patterns</p>
            <PatternChart data={bot.intents}/>
            </div>

            <div className="space-y-5">
            <p className="font-medium">Responses</p>
            <ResponseChart data={bot.intents}/>
            </div>
            </div>
        </div>

      <div className="w-full h-full py-2 ">
            <h1 className="text-2xl font-medium">Themes</h1>
        </div>

        <div className="flex w-1/2 justify-evenly flex-col space-y-4">     

        <Themes/>
          </div>

      </div>
    <link
  href="https://vishnus-2000.github.io/BotZ-Widget/index.css"
  rel="stylesheet"
/>
<Script  src="https://vishnus-2000.github.io/BotZ-Widget/index.js"  strategy="lazyOnload"/>

</div>
:
<div className="flex flex-col w-screen h-screen justify-center items-center space-y-5">
                  <h1 className="text-2xl font-medium text-gray-700 font-sans">Oho! No Bot Available ,Start Creating</h1>
                  <Link href="/home">
                  <IconButton ><AddBoxIcon style={{fontSize:"2.3rem"}}/></IconButton>
                  </Link>

          </div> 

    }
      


    
  </>


}





const PatternChart=({data})=>{


  const[patterns,setPatterns]=useState([])
  

  

  useEffect(()=>{

    console.log(data)
    setPatterns(data.map((e)=>{

        return {x:e.tag,y:e.patterns.length}


    }))



  },[])

  return <XYPlot width={800} height={200}  xType="ordinal">
  <XAxis/>
  <YAxis/>
  <VerticalBarSeries
                    color="#4700D8"
                    barWidth={0.4}
                    data={patterns}/>
  
  
  </XYPlot>


}

const ResponseChart=({data})=>{



  const[responses,setResponses]=useState([]) 

  

  useEffect(()=>{

    console.log(data)
    setResponses(data.map((e)=>{

        return {x:e.tag,y:e.responses.length}


    }))



  },[])

  return <XYPlot width={800} height={200}  xType="ordinal">
  <XAxis/>
  <YAxis/>
  <VerticalBarSeries  
                      color="#4700D8"
                      barWidth={0.4}
                    data={responses}/>
  
  
  </XYPlot>


}

