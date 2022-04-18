import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <>
        <div className='blogs'>
            <div className='blogs-info'>
            <h1 className='text-decoration-underline fs-1 text-center mb-5'>Frequently Asked Questions</h1>
            <h3 className='text-2xl font-mono font-bold'>1. What is the Differences between `authorization` and "authentication"?</h3><br />
                <p><strong>Authentication</strong> is the process of verifying who someone really is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. For example, the process of verifying and confirming employees ID and passwords in an organization is called authentication, On the other hand which employee has access to which floor is called authorization. </p><br />

            <h3 className='text-2xl font-mono font-bolder'>2. Why are you using `firebase`? <br /></h3><br />
                <p>
                I am using <strong className='fw-bolder'>Firebase</strong> to make easier the process of authentication and authorization. With the help of firebase, We can make it easily in a few minutes whereas if I going to make a new authentication/authorization system it will take more than a month and it is so tough to make the security better where firebase is a free service and highly secured property. We also use firebase to host our website easily without any hustle. And the main thing is that firebase is a property of <strong>Google</strong> which inspires us to use firebase too. <br />

                </p><br />

                
            <h3 className='text-2xl font-mono font-bold'>3. What other options do you have to implement authentication?</h3><br />
                <p>
                If there was no firebase, then I think I would go with one of the authentication library like Supabase, Amazon Web Security, Auth0, AuthRocket, Amazon Cognito, Parse, Kuzzle.
                </p><br />

            <h3 className='text-2xl font-mono font-bold'>4. What other services does `firebase` provide other than authentication</h3><br />
                <p className='font-thin'>
                <strong>Firebase</strong> provides different kinds of services that help you to develop high-quality mobile and web applications to grow your business. It is compatible with Web, iOS, Android, and OS X clients. With Firebase, developers don’t need to worry about the backend programming, Authentication, API development, database (real-time cloud-hosted NoSQL database and cloud firestore), File storage, etc. Firebase provides all the services with very efficient and fast performance.

                Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency. Now, let’s look at some of the services and use of it. <br /><br />

                <p className='fw-bolder mb-2 text-decoration-underline'>The list of services what firebase provides: </p><ul>
                    <li> Cloud Firestore </li>
                    <li> Cloud Functions </li>
                    <li> Hosting </li>
                    <li> Cloud Storage </li>
                    <li> Google Analytics </li>
                    <li> Predictions </li>
                    <li> Cloud Messaging </li>
                    <li> Dynamic Links </li>
                    <li> Remote Config </li>
                </ul>

                </p>
            </div>
        </div>
        </>
    );
};

export default Blogs;