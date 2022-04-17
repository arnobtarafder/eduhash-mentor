import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className='bg-color py-3'>
            <div className='container'>
                <div className='row footer-top py-5'>
                    <div className='col-md-6 mb-5'>
                        <img src="https://cdn-icons-png.flaticon.com/128/987/987748.png?ga=GA1.1.208812877.1649674070" alt="white-logo" />
                        <span className='fw-bold fs-4 ps-3 mt-5'>EduHash Mentor</span>
                    </div>
                    <div className='col-md-3'>
                        <ul className='list-unstyled'>
                            <li><Link to='/about'>About Us</Link></li>
                            <li><Link to='/blog'>Read Our Blog</Link></li>
                            <li><Link to='/registration'>Sign up</Link></li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <ul className="list-unstyled">
                            <li className='underline-none'><Link to='/help'>Get Help</Link></li>
                            <li className='underline-none'><Link to='/faq'>Read FAQ</Link></li>
                            <li className='underline-none'><Link to='/cities'>View All Cities</Link></li>
                        </ul>
                    </div>
                </div>

                <div className='footer-bottom d-flex justify-content-between'>
                    <small className='text-secondary'>&copy;<small>copyright @ {year} </small>
                     EduHash Mentor. Proudly created by <span>❤️</span>
                    
                        <span><a className='text-color' href="https://github.com/arnobtarafder"> Arnob Tarafder</a></span>
                    </small>
                    <ul className="list-inline">
                        <li className="list-inline-item ml-3"><Link to='/policy'>Privacy Policy</Link></li>
                        <li className="list-inline-item  ml-3"><Link to='/terms'>Terms of Use</Link></li>
                        <li className="list-inline-item  ml-3"><Link to='/pricing'>Pricing</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;