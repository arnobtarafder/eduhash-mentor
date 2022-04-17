import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
                <p className='fs-5'><small>{
                    description.length < 378
                        ? description
                        :
                        <div>
                            {description.slice(0, 178)}<span className=''><button onClick={() => navigateToServiceDetail(id)} className='btn btn-link text-decoration-none ps-0'>...read more</button></span> 
                        </div>
                    }</small></p>

                    <h5 className='pb-5 fw-light text-primary'>Instructor: Mr.Arnob Tarafder</h5>
                <Link to="/checkout" className='btn btn-primary position-absolute top-auto bottom-0'>Book Now</Link>
            </div>
        </div>
    );
};

export default Course;