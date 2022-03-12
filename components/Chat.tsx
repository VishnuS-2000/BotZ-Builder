import React from"react";


export default function Chat({content,bot}:{content:string,bot:boolean}){



    return <div className={bot?"flex bg-gradient-to-r from-blue-500 to-indigo-800 p-3 my-2 rounded-tl-xl rounded-tr-xl rounded-br-xl self-start":"flex flex-col bg-gray-200 drop-shadow rounded-tl-xl rounded-tr-xl rounded-bl-xl p-3 self-end my-2"}>

        <p className=" font-bold">{content}</p>
    </div>



}