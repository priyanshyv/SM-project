import React from "react";
import { toast } from "react-toastify";
import { GiBroadsword ,GiSpinningSword } from "react-icons/gi";


const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        //logic
        if(likedCourses.includes(course.id)){
            //pahle sey liked hua pada hai
            setLikedCourses( (prev) => prev.filter((cid)=>(cid !== course.id)));
            toast.warning("Remove from Wishlist")
        }
        else{
            //pahle sey like nahi hai ye course
            //insert karna hai yei course liked course mei 
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                //non-empty pahle sey
                setLikedCourses((prev) => [...prev,course.id])
            }
            toast.success("Wishlist added")
        }
    }
    return (
        
        <div className="w-[300px] bg-white bg-opacity-80 rounded-md overflow-hidden">   
            <div className="relative">
                <img src={course.image.url} alt={course.image.alt}></img>
                <div className="w-[40px] h-[40px] bg-slate-100 rounded-full absolute right-2 bottom-[-12px] grid place-items-center shadow-2xl">
                    <button onClick={clickHandler}>
                        {
                           likedCourses.includes(course.id) ? ( <GiSpinningSword fontSize="1.75rem"/>) : ( <GiBroadsword fontSize="1.75rem" />)
                        }
                    </button>
                </div>
            </div>
            <div className="p-4">
                <p className="text-black font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-black mt-2">
                        {
                            course.description.length > 100 ? (course.description.substr(0,100)) + "..." : (course.description)
                        }
                </p>
            </div>
        </div>
    )
}

export default Card;