import React from 'react'
import './UI.css'

const Header = ({inputValue,inputFunction,options,search}) => {
  return (
    <div className='flex gap-10 top-20 absolute items-center pt-3 px-5 w-full justify-center'>
        <h1 className='text-2xl'><span className='font-bold  '>3D</span> Horizon</h1>
        <div className='w-full'>
        <div class="w-[42%] flex border-2 shadow-lg items-center  focus:border-2 border-gray-300 pl-10 py-3 rounded-3xl h-[60px] bg-white">
        <input
            placeholder="Search Location"
            class="w-[90%] input  transition-all  outline-none"
            value={inputValue}
            onChange={(e)=>inputFunction(e.target.value)}
            name="search"
            type="search"
        />
        <svg
            class="size-8 text-gray-500 cursor-pointer"
            onClick={()=>{search(inputValue);inputFunction("")}}
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            stroke-linejoin="round"
            stroke-linecap="round"
            ></path>
        </svg>
        </div>
        </div>

        

    </div>
  )
}

export default Header