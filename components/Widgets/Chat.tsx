import React from"react";


export default function Chat({content,bot}:{content:string,bot:boolean}){



    return <div className={bot?"flex flex-wrap  text-gray-100  p-3 max-w-xs m-2 bg-gradient-to-r from-blue-500 to-indigo-800 rounded-tl-2xl rounded-br-2xl rounded-tr-2xl self-start":"flex flex-wrap max-w-xs p-5 m-2 bg-gray-200 border rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl self-end"}>
        
        <p className="text-sm font-bold lg:text-lg">{content}</p>
    </div>



}