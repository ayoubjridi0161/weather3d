import React from 'react'

const InfoElement = ({img,info,detail}) => {
  return (
    <div className='opacity-60 h-[135px] w-[135px]  bg-[#d9d9d9] space-y-4 rounded-[25%] px-5 py-5'>
        <div className='flex items-center justify-between '>
        <img src={img} className='w-[35%] mt-2'   alt="" />
        <h2 className='text-white text-[28px] '>{info}</h2>
        </div>
        <p className='text-center text-[#a3a3a3] text-xl'>{detail}</p>
    </div>
  )
}

export default InfoElement