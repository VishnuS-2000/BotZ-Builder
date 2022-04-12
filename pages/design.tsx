import React, { useEffect, useState } from "react"
import SideMenu from "../components/DashBoard/Menu"

import {setDoc,doc} from "firebase/firestore"
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





  const handleSubmit =() => {

  }


  const addPattern=()=>{
    setPatterns([...patterns,patternContent])
    setPatternContent("")
    console.log(patterns)
  }



  const addResponse=()=>{
    setResponses([...responses,responseContent])
    setResponseContent("")
    console.log(responses)
  }

  useEffect(()=>{

      const unsub=onSnapshot(docRef,(doc)=>{

        console.log('doc.exists()', doc.exists())
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
          {bot?<div className="flex w-11/12 h-full">
            <div className="flex-1 flex flex-col p-8">
              <div className="flex-[1]">
                <h1 className="text-center text-2xl font-semibold">Bot Name</h1>
              </div>
              <div className="flex flex-col flex-[3] justify-around">
                <h1 className="text-2xl font-semibold">Training Data</h1>

                <TextField name="tag" value={tag} label="Tag" onChange={({target}) => setTag(target.value)} />

                <div className="flex flex-wrap">
                  {
                    patterns.map((pattern)=>{
                      return <Badge content={pattern}/>
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
              
              
                
              <div className="flex flex-wrap">
                {responses.map((response)=>{
                    return <Badge content={response}/>
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
                <button type="submit" onClick={handleSubmit} className="bg-blue-800 hover:bg-blue-600 transition-all duration-500 px-3 py-2 text-white rounded-lg">Add Intent</button>
              </div>
            </div>
            {/* table */}
            <div className="flex-1 border-l-[1px] border-gray-400 p-8">
              <div>
                <div className="flex font-medium bg-blue-200 py-4 rounded-md px-8 w-full justify-around">
                  <p>Tag</p>
                  <p>Patterns</p>
                  <p>Responses</p>
                  <p>Actions</p>
                </div>
                <div className="max-h-[600px] overflow-auto">
                
                </div>
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



    const Badge=({content})=>{

      return <div className="drop-shadow mr-4 mb-4 flex items-center justify-center py-1 bg-green-300 rounded-lg w-fit px-4">
        <p>{content}</p></div>
    }