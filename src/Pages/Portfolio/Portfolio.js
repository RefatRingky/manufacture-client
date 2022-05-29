import React from 'react';
import { Link } from 'react-router-dom';
import me from '../../Assests/me.JPG';

const Portfolio = () => {
    return (
        <>
            <h3 className='text-4xl text-center font-bold my-8'><span className=' text-orange-400 text-4xl'>My Short Portfolio</span></h3>

            <div>
                <div class="avatar flex justify-center">
                    <div class="w-40 ">
                        <img src={me} alt='' />
                    </div>
                </div>
                <div className=''>
                    <h3 className='text-2xl text-center text-orange-400t bg-clip-text bg-gradient-to-br from-accent to-secondary mt-3'>Refat Tamanna Ringky</h3>
                    <div className='flex flex-col justify-center items-center mb-6'>
                        <h3 className='text-lg text-ornage-500'>rifatsourav43@gmail.com</h3>
                        
                    </div>
                    <div className='flex justify-center items-center mb-10'>
                        <div class="card w-full md:w-2/4 lg:w-2/5 bg-gradient-to-r from-orange-500 to-orange-400 text-primary-content">
                            <div class="card-body">
                                <h2 class="card-title"> Here Is My Skills</h2>
                                <div className='flex'>
                                    <p> <span className='text-md font-bold'>I'am Expert On  This</span> <br />
                                        1. JavaScript <br />
                                        2. ES6 <br />
                                        3. React <br />
                                        4. HTML5 <br />
                                        5. CSS3 <br />
                                        6. Bootstrap <br />
                                        7. Tailwind
                                    </p>
                                    <p> <span className='text-md font-bold'>I'am ComfortableWith This</span> <br />
                                        1. Node.js <br />
                                        2. MongoDB <br />
                                        3. Firebase <br />
                                        4. Daisy-UI
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mb-10'>
                        <div class="card w-full md:w-2/4 lg:w-2/5  bg-gradient-to-r from-orange-500 to-orange-400 text-primary-content">
                            <div class="card-body">
                                <h2 class="card-title"> Here You See My Own Developing Projects</h2>
                                <div className='grid grid-cols-1'>
                                    <p> <span className='text-md font-bold'>1. Rinrav's Achar Service</span> <br />
                                        <Link className='btn-link btn-active' to=' https://assignment-10-6a7db.web.app/' >My Live Site Link</Link> <br />
                                       
                                      
                                    </p>
                                    <p> <span className='text-md font-bold'>2. Rinrav Laptop House</span> <br />
                                        <Link className='btn-link btn-active' to='https://glistening-basbousa-6ad99b.netlify.app/' >My Live Site Link</Link> <br />
                                        
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;