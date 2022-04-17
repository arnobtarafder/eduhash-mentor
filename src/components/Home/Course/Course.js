import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Course.css';

const Course = ({ courses }) => {
    const { id, name, img, description, price } = courses;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/course/${id}`)
    }
    return (
        <div className='course position-relative my-5'>
            <img className='w-100' src={img} alt="" />
            <div className='p-3'>
                <h2>{name}</h2>
                <p>Price: {price}</p>
                <p className='pb-5 fs-5'><small>{
                    description.length < 378
                        ? description
                        :
                        <div>
                            {description.slice(0, 278)}<span className=''><button onClick={() => navigateToServiceDetail(id)} className='btn btn-link text-decoration-none ps-0'>...read more</button></span> 
                        </div>
                    }</small></p>
                <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary position-absolute top-auto bottom-0'>Book Now</button>
            </div>
        </div>
    );
};

export default Course;