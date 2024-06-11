import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'
const Card = (props) => {
let data = props.data;
  return (
    <div>
      <div className='flex flex-col md:relative'>
      <div className='absolute top-[-7rem] z-[10] mx-auto'>
        <img className='aspect-square rounded-full w-[140px] h-[140px] z-[25]' src={data.image} alt="" />
        <div className='w-[140px] h-[140px] bg-slate-700 rounded-full absolute top-[-6px] z-[-20] left-[10px]'></div>
      </div>
      <div className='text-center mt-7'>
        <p className='font-bold text-2xl capitalize'>{data.name}</p>
        <p className='uppercase text-sm' style={{ color: 'rgb(212, 206, 206)' }}>{data.job}</p>
      </div>


      <div className=' mx-auto mt-5 text-slate-500' >
        <FaQuoteLeft/>
      </div>

      <div className='text-center mt-4 text-slate-500'>
        {data.text}
      </div>

      <div className=' mx-auto mt-5 text-slate-500' >
        <FaQuoteRight/>
      </div>


      


    </div>
    </div>
  )
}

export default Card
