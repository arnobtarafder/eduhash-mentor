import React from 'react';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    return (
        <div>
            <div className="card w-50 mx-auto my-5 text-center">
                <div className="card-header text-success">
                    Enrollment Confirmation
                </div>
                <div className="card-body">
                    <h5 className="fw-lighter text-warning">Thanks for looking my course. we are working to make this page more beautiful. This page is now closed for some days</h5><hr />
                    <p className="card-text">I will contact you within 24 hours.</p><hr />
                    <a href="https://github.com/arnobtarafder" target="_blank" className="btn btn-outline-dark">Contact With Me</a>
                    <Link to='/'><button className="btn btn-outline-dark ms-5">Back to Home</button></Link>

                </div>
            </div>
        </div>
    );
};

export default CheckOut;