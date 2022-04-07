import React,{useEffect} from "react"
import {useAuth} from "./auth"
import {useRouter} from "next/router"

export default function ProtectedRoute({children}){


    const {user}=useAuth()
    const router=useRouter()


    useEffect(()=>{
        console.log(user)
        if(!user){

            router.push("/login")
        }
    },[router,user])

    return <>{user?children:null}</>


}