import React,{useState,useEffect} from "react"
import SideMenu from "../components/DashBoard/Menu"
import { Avatar,TextField} from '@mui/material';
import {useAuth} from "../auth"

import VerifiedIcon from '@mui/icons-material/Verified';




import {db,storage} from "../firebase"
import {updateDoc,doc,getDoc} from "firebase/firestore"
import {ref,uploadBytes,getDownloadURL} from "firebase/storage"
import {getAuth,updateProfile} from "firebase/auth"


import router from "next/router"


export default function Account(){



    const {user}=useAuth()

    const[showModal,setShowModal]=useState(false)

    const[profile,setProfile]=useState(null)




    const docRef=doc(db,"users",user.userId)
    const storageRef=ref(storage,`/files/${user.userId}.png`)

    const [account,setAccount]=useState(null)



    useEffect(()=>{

      if(user){


            const fetchUser=async()=>{

              const loggedProfile=await getAuth()
              const data=await getDoc(docRef)
              
              setProfile(loggedProfile.currentUser)

              
              if(data.exists()){


             

              if(loggedProfile){
              setAccount(
                { 
                  displayName:loggedProfile.currentUser.displayName,
                  email:loggedProfile.currentUser.email,
                  photoURL:loggedProfile.currentUser.photoURL,
                  firstName:data.data().firstName,
                  lastName:data.data().lastName,
                  organizationName:data.data().organizationName

                }


        

              )


              }
              
            }
         
        }

        fetchUser()
      }
  

    },[])
    


    const handleSubmit=async(e)=>{
      e.preventDefault()

      const status=await updateDoc(docRef,{
        firstName:account.firstName,
        lastName:account.lastName,
        organizationName:account.organizationName})

      const auth=getAuth()

      const profileStatus=updateProfile(auth.currentUser,{displayName:account.displayName,email:account.email})


  }



  const PictureModal=()=>{

    const [image,setImage]=useState(null)

    const [preview,setPreview]=useState(account.photoURL)

    const[progress,setProgress]=useState(0)
    
  const uploadImage=(e)=>{

    const object=URL.createObjectURL(e.target.files[0])
    setImage(e.target.files[0]) 
    setPreview(object)




  }

  const saveImage=async(e)=>{

    e.preventDefault()
    if(!image){
      return 
    }

    
    const uploadTask=uploadBytes(storageRef,image)



    const url=await getDownloadURL(storageRef)
    const auth=getAuth()
    const status=updateProfile(auth.currentUser,{photoURL:url})

    setShowModal(false)
    router.push("/home")

  
}








    return <div className='flex justify-center items-center z-40 fixed bg-black/50 bg-blur-3xl w-screen h-screen top-0 bottom-0 left-0 right-0'>
  

  
  <div className='bg-gray-50 p-10 rounded-lg'>

      <form className='space-y-5'>
      <h1 className='text-xl font-bold'>Add a File</h1>

      <div className="flex w-full space-x-8">
        <div className="self-center">

      <Avatar src={preview} style={{width:80,height:80}}/>
      </div>
      <div className="space-y-4">
      <p className='text-medium text-gray-500 font-medium'>Supported Types: png,jpg,jpeg</p>
      <input type="file" accept=".png" onChange={uploadImage}/>
      </div>
      
      </div>
      <button className='w-1/3 bg-gray-200 p-2 rounded-lg' onClick={()=>{setShowModal(false)}}>Cancel</button>
      
      <button type="submit" className='w-1/3 bg-green-600 hover:bg-blue-600 transition-all duration-500 rounded-lg p-2 ml-3 text-white font-medium' onClick={saveImage} >Save</button>
      
     
      </form>
  </div>
  
  </div>
  
  
  }



    return (<>
        <SideMenu/>
          {account?<div className="w-full h-screen flex flex-col items-center  py-20 text-left">
      
      <div className="space-y-8 lg:w-1/3">
     <h1 className="text-2xl font-bold">App Settings</h1>
     <div className="flex space-x-5">
       <button className="drop-shadow font-medium bg-gray-100 p-2 rounded-lg hover:text-blue-400" onClick={()=>setProfileMode(true)}>
         Profile
       </button>

     
      


     </div>

     <div className="flex flex-col space-y-6 md:lg-space-y-8 lg:space-y-10">

      <div className="flex space-x-5 items-center">
      <Avatar src={account.photoURL} style={{width:"60px",height:"60px"}}></Avatar>
      <p className="cursor-pointer font-medium" onClick={()=>setShowModal(true)}>Change Picture</p>
      </div>

      <div className="">
        <TextField label="Display Name" defaultValue={profile.displayName} value={account.displayName} onChange={(e)=>setAccount({...account,displayName:e.target.value})} variant="filled"/>
      </div>

      <div className="flex flex-col space-y-4 md:flex-row space-y-0 lg:space-x-4 space-y-0" >
      <TextField label="First Name" defaultValue={account.firstName}  value={account.firstName} variant="filled" onChange={(e)=>setAccount({...account,firstName:e.target.value})} />
      <TextField label="Last Name" defaultValue={account.lastName} value={account.lastName} variant="filled" onChange={(e)=>setAccount({...account,lastName:e.target.value})} />
      </div>

      <div className="">
        <TextField label="Organization Name" fullWidth defaultValue={account.organizationName} value={account.organizationName} variant="filled" onChange={(e)=>setAccount({...account,organizationName:e.target.value})} />
      </div>

      <div className="flex space-x-5 items-center ">
        <TextField label="Email" fullWidth defaultValue={profile.email} value={account.email} variant="filled"  disabled/>
        
            {profile.emailVerified?
            <div className="space-x-5">
        
           </div>:<div>
            
             </div>}
        

      </div>


      <button className="bg-blue-800 hover:bg-blue-600 transition-all duration-500 px-3 py-2 rounded-lg text-white font-bold" onClick={handleSubmit}>Save Changes</button>
    </div>

 
     
     </div>
    </div>:<div>Loading....</div>}
      
      {showModal&&<PictureModal/>}
    </>
    
      )
}





