import React from"react";


export default function Chat({content,bot}:{content:string,bot:boolean}){



    return <div className={bot?"flex flex-wrap text-gray-100 max-w-32 p-3 m-2 bg-gradient-to-r from-blue-500 to-indigo-800 rounded-tl-lg rounded tr-lg rounded-br-lg self-start":"flex flex-wrap max-w-max p-2 m-2 bg-gray-200 border rounded-tl-lg rounded-tr-lg rounded-bl-lg self-end"}>

        <p className="text-md font-bold">{content}</p>
    </div>



}