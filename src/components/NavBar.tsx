import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { IoIosHome } from "react-icons/io";
function NavBar() {
  return (
    <header className="shadow-md p-2 flex flex-row">
 <div className=" p-2 flex flex-row justify-between items-center w-1/2 ">
       <h2 className="text-semibold text-xl ">welcome board</h2>
       <div className="bg-blue-400  p-1 rounded-sm">
        <FaRegStar size={32}/>
        </div>
        <div className="bg-blue-400  p-3 rounded-sm hover:cursor-pointer hover:px-5 transition-all duration-200 ease-in-out hover:bg-green-500 "> Personal</div>
        <div className="bg-blue-400  p-3 rounded-sm flex flex-row items-center gap-2"> 
        <IoIosLock />
        <span>Private</span>
        </div>
       
        </div>
        <div className="flex flex-row items-center justify-end w-1/2 gap-2">
        <div className="bg-blue-400  p-3 rounded-sm flex flex-row items-center gap-2"> 
        <IoIosHome /><span>Home</span></div>
        <div className="bg-blue-400  p-3 rounded-sm hover:cursor-pointer hover:pl-5 transition-all duration-200 ease-in-out hover:bg-green-500"> 
         Show Menu</div>
        </div>
    </header>
   
  )
}

export default NavBar