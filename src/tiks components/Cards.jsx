import Card from "./Card";

import { useState } from "react";
const Cards = (props)=>{
    let courses = props.courses;
    let category = props.category;
    const [likedCourses,setLikedCourses] = useState([]);
    
    //returns you a list of all courses received from the api response
    function getCourses() {
        if(category === "All"){
            let allCourses = [];
            Object.values(courses).forEach(array =>{
                array.forEach(courseData=>{
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else{
            //mai sirf specific category ka hi data array paas karunga
            return courses[category];
        }
       
    }

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
            getCourses().map( (course) => {
               return <Card course = {course} key={course.id} likedCourses= {likedCourses} setLikedCourses={setLikedCourses} > </Card>
            })
        }
        </div>
    )
}

export default Cards;