import React from 'react';

const About = () => {
    return (
        <div className="card container w-75 mx-auto my-5">
            <div className="row g-0">
                <div className="col-md-4 col-lg-4 col-sm-12">
                    <img className='w-100 h-100' src="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg" alt="" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title text-center">Rafid Mahmud Tarafder (Arnob)</h5>
                        <h6 className="card-title text-center fw-light">Student, Engineering University School and College (EUSC)</h6>

                        <p className="card-text mt-5 px-3"> Hi <span><img style={{height: "25px"}} src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/72/facebook/65/waving-hand-sign_1f44b.png" alt="" /></span> I am Arnob. I would love to say the truth about myself. I think, I am still in a flow and going with course without any problem just because of the facebook group which is made for batch-5 by programming hero authority and a messenger group which is made by a student to solve problems together and discuss about programming. <br /><br />
                         After finishing the course, my target is to open a web based business and I have already planned about the business. I want to be a full stack web developer. I can feel web development from heart. Some People say that, nobody can earn this type of skill with the tension or thinking of earning money but in my opinion this is totally wrong, The money is the biggest inspiration to learn web development to me. I have also a plan to do an internship about web development to make my skill stronger and be confident to stand my own business.
                         <br /><br />
                         Sorry to say that, I couldn't give my original photo for some personal reason.
                         </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
