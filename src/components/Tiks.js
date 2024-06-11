import React, { useEffect } from "react";
import {apiUrl,filterData} from "./data";
import Navbar from '../tiks components/Navbar';
import Cards from "../tiks components/Cards";
import Filter from "../tiks components/Filter";
import { toast } from "react-toastify";
import { useState } from "react";
import Spinner from "../tiks components/Spinner";



const Tiks = () => {
  const [courses,setCourses] = useState(null);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
      // Access data from the apiUrl object
      const output = apiUrl.data;
      //save the data
      setCourses(output);
    }
    catch(error){
      toast.error("Network mei koi dikkat hai");
    }
    setLoading(false);
  }
  

  useEffect(()=>{
    fetchData();
  },[]);


  return (
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'rgb(212, 206, 206)' }}>
        <div>
        <Navbar></Navbar>
        </div>
        <div  style={{ backgroundColor: 'rgb(212, 206, 206)' }}>
              <div>
              <Filter filterData = {filterData} category = {category} setCategory={setCategory}></Filter>
              </div>
              <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
              {
                loading ? (<Spinner/>)  : (<Cards courses={courses} category={category}></Cards>)
              }
              </div>
              </div>
      </div>
  );
}
export default Tiks;