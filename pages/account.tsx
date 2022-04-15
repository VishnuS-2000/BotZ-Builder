import React,{useState} from "react"
import SideMenu from "../components/DashBoard/Menu"
import { Avatar,TextField} from '@mui/material';
import {useAuth} from "../auth"


import {db} from "../firebase"
import {updateDoc,doc} from "firebase/firestore"






export default function Account(){


    const [profileMode,setProfileMode]=useState(true)
    const {user,setUser}=useAuth()


    const docRef=doc(db,"users",user.userId)
    const [account,setAccount]=useState({
      photoURL:user.photoURL,
      displayName:user.displayName,
      email:user.email,
      firstName:user.firstName,
      lastName:user.lastName,
      organizationName:user.organizationName

    })

    


    const handleSubmit=async(e)=>{
      e.preventDefault()

      const status=await updateDoc(docRef,{photoURL:account.photoURL,
        displayName:account.displayName,
        email:account.email,
        firstName:account.firstName,
        lastName:account.lastName,
        organizationName:account.organizationName})


  


  }




    return (
      <div className="w-full h-screen flex flex-col items-center  py-20 text-left">
      <SideMenu/>
      <div className="space-y-8 lg:w-1/3">
     <h1 className="text-2xl font-bold">App Settings</h1>
     <div className="flex space-x-5">
       <button className="drop-shadow font-medium bg-gray-100 p-2 rounded-lg hover:text-blue-400" onClick={()=>setProfileMode(true)}>
         Profile
       </button>

       <button className="drop-shadow p-2 rounded-lg hover:text-blue-400" onClick={()=>setProfileMode(false)}>
         Appearance
         </button>
      


     </div>

     {profileMode&&<div className="flex flex-col space-y-6 md:lg-space-y-8 lg:space-y-10">

      <div className="flex space-x-5 items-center">
      <Avatar src={account.photoURL} style={{width:"60px",height:"60px"}}></Avatar>
      <p className="cursor-pointer font-medium">Change Picture</p>
      </div>

      <div className="">
        <TextField label="Display Name" defaultValue={user.displayName} value={account.displayName} onChange={(e)=>setAccount({...account,displayName:e.target.value})} variant="filled"/>
      </div>

      <div className="flex flex-col space-y-4 md:flex-row space-y-0 lg:space-x-4 space-y-0" >
      <TextField label="First Name" defaultValue={user.firstName}  value={account.firstName} variant="filled" onChange={(e)=>setAccount({...account,firstName:e.target.value})} />
      <TextField label="Last Name" defaultValue={user.lastName} value={account.lastName} variant="filled" onChange={(e)=>setAccount({...account,lastName:e.target.value})} />
      </div>

      <div className="">
        <TextField label="Organization Name" fullWidth defaultValue={user.organizationName} value={account.organizationName} variant="filled" onChange={(e)=>setAccount({...account,organizationName:e.target.value})} />
      </div>

      <div className="">
        <TextField label="Email" fullWidth defaultValue={user.email} value={account.email} variant="filled" onChange={(e)=>setAccount({...account,email:e.target.value})} />
      </div>

   

      <button className="bg-blue-800 hover:bg-blue-600 transition-all duration-500 px-3 py-2 rounded-lg text-white font-bold" onClick={handleSubmit}>Save Changes</button>
    </div>}

    {!profileMode&&<div className="">
      <h1>Font Size</h1>
      <h1>Dark Mode</h1>
      </div>
      }

     
     </div>
    </div>
    
    
      )
}