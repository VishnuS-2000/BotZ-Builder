import React from 'react'
import SideMenu from "../components/DashBoard/Menu"
import {useAuth }from "../auth"




import {db} from "../firebase"

import {doc,getDoc} from "firebase/firestore"


import {useRouter} from "next/router"

export default function Home(props) {

  const {user}=useAuth()

  return (
    <div className="w-full flex flex-col items-center h-screen py-20">
      <SideMenu/>


    <div className="drop-shadow rounded-xl space-y-3 bg-white p-5 w-3/4 md:w-1/4">
      <h1 className="text-3xl  font-bold font-sans">Welcome Back,{user.displayName}</h1>
      <p>You are currently at the Design Stage of the Bot</p>
      </div>


      <div className="">
        <h1 className="text-xl font-bold">Bot In Progress</h1>
        <div className="">
        
        </div>
      </div>



    </div>



  )
}



