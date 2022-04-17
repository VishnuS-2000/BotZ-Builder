import React, { useEffect,useState} from "react"
import { IconButton, TextField,InputAdornment } from "@mui/material"
import AddBoxIcon from '@mui/icons-material/AddBox';

const IntentCard = ({tagData, patternsData, responsesData,actions,id}: {tag: String, patterns: Array, responses: Array}) => {



    const [showModal,setShowModal]=useState(false)

    // Edit modal


    const Modal=()=>{


        const [tag,setTag]=useState(tagData)
        const [patternContent,setPatternContent]=useState("")
        
        const [responseContent,setResponseContent]=useState("")
    
        const [patterns,setPatterns]=useState(patternsData)
        const [responses,setResponses]=useState(responsesData)
    
      
    
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
    
    
          const handleSubmit=async(e)=>{
            
            e.preventDefault()
    
    
            const newIntent={
                tag,patterns,responses
            }
    
            console.log(newIntent)
    
    
            const status=await actions.edit(id,newIntent)
    
    
            setShowModal(false)
    
    
    
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
    
    
    
    
    
        return <div className="flex justify-center items-center fixed bg-black/50 bg-blur-3xl w-screen h-screen top-0 bottom-0 left-0 right-0">
        <div className="flex flex-col p-8 w-1/2 bg-white">
          <div className="flex-[1]">
      
          </div>
          <div className="flex flex-col flex-[3] justify-around space-y-4">
    
    
            <TextField name="tag" value={tag} label="Tag" defaultValue={tag} onChange={({target}) => setTag(target.value)} />
    
            <div className="flex flex-wrap p-1">
              {
                patterns.map((pattern,index)=>{
                  return <Badge id={index} type="pattern" content={pattern} actions={{delete:handleDelete}}/>
          })
    
              }
    
    
            </div>
            <TextField name="input" value={patternContent} label="Patterns" value={patternContent} onChange={({target}) => setPatternContent(target.value)}   InputProps={{
              
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
            <TextField name="response" value={responseContent} label="Responses" value={responseContent} onChange={({target}) => setResponseContent(target.value)} InputProps={{
              endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" color="primary"  onClick={addResponse}>
              <AddBoxIcon /> 
            </IconButton>
          </InputAdornment>
           )
          }}/>
            <button type="submit" onClick={handleSubmit} className="bg-yellow-500 hover:bg-blue-600 transition-all duration-500 px-3 py-2 text-white rounded-lg" >Save Changes</button>
            
          </div>
        </div>
    
        </div>
    }
    












    return( 
    <>
    <div className="flex py-4 px-8 rounded-md my-8 w-full justify-around shadow-lg border">
        <p>{tagData}</p>
        <p>{patternsData.length}</p>
        <p>{responsesData.length}</p>

        <div className="flex items-center justify-center">
            <div className="rounded-full h-8 w-8 flex items-center justify-center cursor-pointer bg-white hover:bg-[#1e90ff33]" onClick={()=>{setShowModal(true)}}>
                <svg className="text-[#1e90ff]" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
            </div>
            <div className="rounded-full h-8 w-8 flex items-center justify-center cursor-pointer bg-white hover:bg-[#FF634733]" onClick={()=>{actions.delete(id)}}>
                <svg className="text-[#FF6347]" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            </div>
        </div>
    </div>
    

    {showModal&&<Modal  />}
    </>);




}




export default IntentCard;




const Badge=({id,type,content,actions})=>{

    return <div className="mr-4 mb-4 relative flex items-center justify-center py-1 bg-blue-100 rounded-lg w-fit px-4">
      <p>{content}</p>
      <button className="rounded-full bg-black absolute -top-1 -right-1" onClick={()=>{actions.delete(id,type)}}>
        <p className="text-white text-xs m-0 w-fit px-[0.3rem] py-[0.1rem] flex items-center">x</p></button>
      </div>
  }