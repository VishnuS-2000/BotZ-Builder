import React, { useEffect, useState } from "react"
import SideMenu from "../components/DashBoard/Menu"

import {setDoc,doc} from "firebase/firestore"
import { TextField } from "@mui/material"
import IntentCard from "../components/IntentCard"

export default function Design(){
  const [intentList, setIntentList] = useState<{tag: String, input: String, response: String}[]>([]);
  const [tag, setTag] = useState("");
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");


  const handleSubmit =() => {
    if (tag && input && response) {
      // call api here with data = {tag, input, response}
      setIntentList((prev) => [...prev, {tag, input, response}])
      setTag("")
      setInput("")
      setResponse("")
    }1
  }


  

   return (
        <div className="flex flex-col w-full h-screen items-center p-8">
          <SideMenu/>
          <div className="flex w-11/12 h-full">
            <div className="flex-1 flex flex-col p-8">
              <div className="flex-[1]">
                <h1 className="text-center text-2xl font-semibold">Bot Name</h1>
              </div>
              <div className="flex flex-col flex-[3] justify-around">
                <h1 className="text-2xl font-semibold">Training Data</h1>

                <TextField name="tag" value={tag} label="Tag" onChange={({target}) => setTag(target.value)}/>
                <TextField name="input" value={input} label="Input" onChange={({target}) => setInput(target.value)}/>
                <TextField name="response" value={response} label="Responses" onChange={({target}) => setResponse(target.value)}/>
                <button type="submit" onClick={handleSubmit} className="bg-blue-800 hover:bg-blue-600 transition-all duration-500 px-3 py-2 text-white rounded-lg">Add Intent</button>
              </div>
            </div>
            {/* table */}
            <div className="flex-1 border-l-[1px] border-gray-400 p-8">
              <div>
                <div className="flex font-medium bg-blue-200 py-4 rounded-md px-8 w-full justify-around">
                  <p>Tag</p>
                  <p>Input</p>
                  <p>Response</p>
                  <p>Actions</p>
                </div>
                <div className="max-h-[600px] overflow-auto">
                  {intentList?.map((intent, i) => (
                    <IntentCard key={i} tag={intent.tag} input={intent.input} response={intent.response} />
                  ))}
                </div>
              </div>
            </div>
          </div>




      </div>
  
    
      )

    }
