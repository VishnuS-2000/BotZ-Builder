import React, { useEffect } from "react"

const IntentCard = ({tag, input, response}: {tag: String, input: String, response: String}) => {
    return <div className="flex py-4 px-8 rounded-md my-8 w-full justify-around shadow-lg">
        <p>{tag}</p>
        <p>{input}</p>
        <p>{response}</p>
        <div className="flex items-center justify-center">
            <div className="rounded-full h-8 w-8 flex items-center justify-center cursor-pointer bg-white hover:bg-[#1e90ff33]">
                <svg className="text-[#1e90ff]" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
            </div>
            <div className="rounded-full h-8 w-8 flex items-center justify-center cursor-pointer bg-white hover:bg-[#FF634733]">
                <svg className="text-[#FF6347]" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
            </div>
        </div>
    </div>
}

export default IntentCard;
