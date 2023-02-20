import React, { useState } from 'react'

import Admin from './Admin'
import Chat from './Chat'
import Train from './Train'

const Home = () => {
    const [show,setShow]=useState(<Admin/>)

  return (
    <div className="text-black flex">
      
      <div className="flex flex-col gap-2  h-full p-2 bg-[#1f2936] text-black w-[210px]">
        <p className="text-center text-gray-400">Neuralmind</p>
        <div className="mt-5 h-screen">
        <p className="text-md cursor-pointer p-1  text-gray-400 hover:bg-[#0c6efd] hover:text-white text-center " onClick={()=>{setShow(<Train/>)}}>Train</p>
        <p className="text-md cursor-pointer my-4 p-1 text-gray-400  hover:bg-[#0c6efd] hover:text-white  text-center " onClick={()=>{setShow(<Chat/>)}}>Chat</p>
        <p className="text-md cursor-pointer p-1 text-gray-400 hover:bg-[#0c6efd] hover:text-white  text-center " onClick={()=>{setShow(<Admin/>)}}>Admin</p>
        </div>


    </div>
    <div className="w-full m-4" >{show}</div>
    </div>
  )
}

export default Home