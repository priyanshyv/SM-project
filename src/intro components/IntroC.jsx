import React, { useState } from 'react'
import Card from './Card';
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';


const Intro = (props) => {
  const navigate = useNavigate();
    let data = props.data;
    const [index,setIndex] = useState(0);
    function leftShiftHandler(){
        if(index-1<0){
            setIndex(data.length-1);
        }
        else{
            setIndex(index-1);
        }
    }

    function rightShiftHandler(){
        if(index+1>=data.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }

    function homeHandler(){
      navigate('/');
    }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
    <Card data={data[index]}></Card>

    <div className='flex text-3xl mt-7 gap-3  font-bold mx-auto' style={{ color: 'rgb(212, 206, 206)' }}>
      <button onClick={leftShiftHandler} className='cursor-pointer hover:text-violet-500'>
          <FiChevronLeft></FiChevronLeft>
      </button>
      <button onClick={rightShiftHandler} className='cursor-pointer hover:text-violet-500'>
          <FiChevronRight></FiChevronRight>
      </button>
    </div>


    <div className='mt-6'>
      <button 
      onClick={homeHandler}
      className=' hover:bg-slate-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg bg-slate-400'  >Home For Homies cuz they already know</button>
    </div>

  </div>
  )
}

export default Intro
