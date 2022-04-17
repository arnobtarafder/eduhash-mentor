import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './CourseDetail.css';

const CourseDetail = () => {
    const { courseId } = useParams();
    const [course, setCourse] = useState([]);

    const AllServices = `https://raw.githubusercontent.com/arnobtarafder/genius-servicesData/main/services.json`;

    useEffect(() => {
        fetch(AllServices)
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [courseId])
    // console.log(service[serviceId-1]?.id);


    return (
        <div>
            <h1 className='my-5 ms-5 border-start border-primary ps-4 py-2'>Product Id: {courseId}</h1>
            
          <div style={{margin:"0px auto"}} className='service rounded w-100 px-auto pt-5 text-center'>

           <div id='image'>
           <img className='border-start w-100 border-top border-primary p-5' src={course[courseId-1]?.img} alt="" />
           </div>
            
            <div className=''>
                <h2>{course[courseId-1]?.name}</h2>
                <h4 className='text-sans fw-normal pb-3'>Price: {course[courseId-1]?.price}</h4>

                <p id='description' style={{textAlign: "justify"}} className='pb-5 w-50 lh-base fs-4 mx-auto'><small>{course[courseId-1]?.description}</small></p>
            </div>
          </div>     

            <div className='text-center'>

                <Link to="/checkout">
                    <button className='btn btn-primary px-5 py-3'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default CourseDetail;