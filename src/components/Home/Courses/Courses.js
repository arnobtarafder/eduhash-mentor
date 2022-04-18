import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    
    const [courses, setCourses] = useState([])
    useEffect( () => {
        fetch("courses.json")
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div id='services' className='container'>

            <div className="row">
            <h1 className='text-primary text-center mt-5 mb-0'>My Courses: {courses.length}</h1>
           <div className="courses-container">
           {
                courses.map(course => <Course
                    key={course.id}
                    courses={course}
                > 
                </Course>)
            }
           </div>
            </div>
        </div>
    );
};

export default Courses;