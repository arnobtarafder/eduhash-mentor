import React from 'react';
import './Promotion.css'

const Promotion  = () => {
    return (
        <div className='mt-5 '>
            <div className='offerBanner mt-5'>
                <div className= "row container ">
                <div className="col-md-5">
                        <img className='img-fluid ' src="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg" alt="" />
                    </div>
                    <div className="col-md-7 pb-5">
                        <p className='promotiomText'> Only I will take the classes. In this Courses, you will learn so many things. I keep the prices of the courses also affordable, so that everyone can buy. I think you should taste our demo classes. It will make you comfortable to join our course. </p>
                        <span className='qutes'>__ Arnob Tarafder</span>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Promotion ;