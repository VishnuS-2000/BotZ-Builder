import React, { useEffect, useState } from "react"
import SideMenu from "../components/DashBoard/Menu"

import {updateDoc,doc} from "firebase/firestore"
import { IconButton, TextField,InputAdornment } from "@mui/material"
import AddBoxIcon from '@mui/icons-material/AddBox';
import IntentCard from "../components/IntentCard"

import {db} from "../firebase"
import { onSnapshot } from "firebase/firestore"


import Link from "next/link"
import {useAuth} from "../auth"

export default function Design(){
  const [intentList, setIntentList] = useState<{tag: String, input: String, response: String}[]>([]);
  const [tag, setTag] = useState("");
  const [patternContent, setPatternContent] = useState("");
  const [responseContent, setResponseContent] = useState("");
  const [patterns, setPatterns] = useState([]);
  const [responses, setResponses] = useState([]);


  const [bot,setBot]=useState(null)
  const {user}=useAuth()

  const docRef=doc(db,"users",user.userId)






  const addPattern=()=>{

    if(patternContent){
    setPatterns([...patterns,patternContent])
    setPatternContent("")
    console.log(patterns)

    }
  }



  const addResponse=()=>{


    if(responseContent)
    {
    setResponses([...responses,responseContent])
    setResponseContent("")
    console.log(responses)
    }
  }


  const handleDelete=(index,type)=>{


    if(type=="pattern"){
      setPatterns(patterns.filter((e,i)=>{

        return i!==index
      }))
    }

    if(type=="response"){
      setResponses(responses.filter((e,i)=>{

        return i!==index
      }))
    }



  }



  const handleSubmit =async(e) => {

    e.preventDefault()

    if(patternContent){
      setPatterns([...patterns,patternContent])
      setPatternContent("")
    }

    if(responseContent){
      setResponses([...responses,responseContent])
      setResponseContent("")
    }

    if(patterns.length!=0&&responses!=0&&tag){
    const intents=[...bot.intents,{tag,patterns,responses}]
    const status=await updateDoc(docRef,{bot:{...bot,intents}})
    setTag("")
    setPatterns([])
    setResponses([])
  

    }

  }


  const deleteIntent=async(id)=>{

    console.log(id)
    const intents=bot.intents.filter((e,index)=>{
      
      return index!==id
    
    })

    const status=await updateDoc(docRef,{bot:{...bot,intents}})
  }


  const editIntent=async(id)=>{
    
    const status=await updateDoc()
  }


  useEffect(()=>{

      const unsub=onSnapshot(docRef,(doc)=>{

       
        if(doc.exists()){
            
          if(doc.data().bot){
            setBot(doc.data().bot)

            }

        }



      })
  


  },[])


 


  

   return (
         <div className="flex flex-col w-full h-screen items-center p-8">
          <SideMenu/>
          {bot?<div className="flex  w-11/12 h-full">
            <div className="flex-1 flex flex-col p-8">
              <div className="flex-[1]">
                <h1 className="text-center text-2xl font-semibold">{bot.name}</h1>
              </div>
              <div className="flex flex-col flex-[3] justify-around">
                <h1 className="text-2xl font-semibold">Training Data</h1>

                <TextField name="tag" value={tag} label="Tag" onChange={({target}) => setTag(target.value)} />

                <div className="flex flex-wrap p-1">
                  {
                    patterns.map((pattern,index)=>{
                      return <Badge id={index} type="pattern" content={pattern} actions={{delete:handleDelete}}/>
              })

                  }

 
                </div>
                <TextField name="input" value={patterns} label="Patterns" value={patternContent} onChange={({target}) => setPatternContent(target.value)}   InputProps={{
                  
                  endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" color="primary" onClick={addPattern} >
                  <AddBoxIcon /> 
                </IconButton>
              </InputAdornment>
               )
              }}/>
              
              
                
              <div className="flex flex-wrap py-1">
                {responses.map((response,index)=>{
                    return <Badge id={index} type="response" content={response} actions={{delete:handleDelete}} />
                })}


              </div>
                <TextField name="response" value={responses} label="Responses" value={responseContent} onChange={({target}) => setResponseContent(target.value)} InputProps={{
                  endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" color="primary"  onClick={addResponse}>
                  <AddBoxIcon /> 
                </IconButton>
              </InputAdornment>
               )
              }}/>
                <button type="submit" onClick={handleSubmit} className="bg-blue-800 hover:bg-blue-600 transition-all duration-500 px-3 py-2 text-white rounded-lg" >Add Intent</button>
              </div>
            </div>
            {/* table */}
            <div className="flex-1  border-l-[1px] border-gray-400 p-8">
    
                <div className="flex font-medium bg-blue-200 py-4 rounded-md px-8 w-full justify-around">
                  <p>Tag</p>
                  <p>Patterns</p>
                  <p>Responses</p>
                  <p>Actions</p>
                </div>
                <div className="max-h-[600px] overflow-auto">
                
                {bot.intents.map((intent,index)=>{
                  
                  return <IntentCard id={index} tag={intent.tag} pattern={intent.patterns.length} response={intent.responses.length} actions={{edit:editIntent,delete:deleteIntent}}/>


                })}

                </div>
     
            </div>
          </div>:<div className="flex flex-col w-11/12 h-full justify-center items-center space-y-5">
                  <h1 className="text-2xl font-medium text-gray-700 font-sans">Oho! No Bot Available ,Start Creating</h1>
                  <Link href="/home">
                  <IconButton ><AddBoxIcon style={{fontSize:"2.3rem"}}/></IconButton>
                  </Link>

          </div>}




      </div>
  
    
      )

    }



    const Badge=({id,type,content,actions})=>{

      return <div className="mr-4 mb-4 relative flex items-center justify-center py-1 bg-blue-100 rounded-lg w-fit px-4">
        <p>{content}</p>
        <button className="rounded-full bg-black absolute -top-1 -right-1" onClick={()=>{actions.delete(id,type)}}>
          <p className="text-white text-xs m-0 w-fit px-[0.3rem] py-[0.1rem] flex items-center">x</p></button>
        </div>
    }


    const Modal=()=>{

      return <div className="fixed top-0 bottom-0 left-0  bg-white">

        <h1>Hello</h1>
      </div>
    }