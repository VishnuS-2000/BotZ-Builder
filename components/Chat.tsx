import React from"react";


export default function Chat({content,bot}:{content:string,bot:boolean}){



    return <div className={bot?"flex flex-wrap  text-gray-100  p-5 m-2 bg-gradient-to-r from-blue-500 to-indigo-800 rounded-tl-xl rounded tr-xl rounded-br-xl self-start":"flex flex-wrap  p-5 m-2 bg-gray-200 border rounded-tl-xl rounded-tr-xl rounded-bl-xl self-end"}>
        
        <p className="text-lg font-bold">{content}</p>
    </div>



}