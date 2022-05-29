import React from 'react';
import slide from '../../Assests/Slide/slide .jpg';
import slide1 from '../../Assests/Slide/slide1.jpg';
import slide2 from '../../Assests/Slide/slide2.jpg';
import slide3 from '../../Assests/Slide/slide3.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section >
            <div>
                <div className="carousel w-full ">
                    <div id="item1" className="carousel-item w-full">
                        <div className="hero min-h-screen bg-base-200">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={slide2} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                                <div>
                                    <h1 className="text-5xl font-bold">This Is The Most Beautiful Design In Our Shop</h1>
                                    <p className="py-6">We provide best qualitis products. An ever, We ar most trusted in this world Provident cupiditate voluptatem et in. exercitationem quasi.</p>
                                    <Link to='/products' className="btn btn-primary">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <div className="hero min-h-screen bg-base-200">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={slide} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                                <div>
                                    <h1 className="text-5xl font-bold">This Is One Of The Best Feature In Our Shop</h1>
                                    <p className="py-6">We provide best qualitis products. An ever, We ar most trusted in this world Provident cupiditate voluptatem et in. exercitationem quasi.</p>
                                    <Link to='/products' className="btn btn-primary">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <div className="hero min-h-screen bg-base-200">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={slide3} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                                <div>
                                    <h1 className="text-5xl font-bold">You Can Purchase From Here Without ANy Doubt</h1>
                                    <p className="py-6">We provide best qualitis products. An ever, We ar most trusted in this world Provident cupiditate voluptatem et in. exercitationem quasi.</p>
                                    <Link to='/products' className="btn btn-primary">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <div className="hero min-h-screen bg-base-200">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={slide1} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                                <div>
                                    <h1 className="text-5xl font-bold">You Can Purchase From Here Without ANy Doubt</h1>
                                    <p className="py-6">We provide best qualitis products. An ever, We ar most trusted in this world Provident cupiditate voluptatem et in. exercitationem quasi.</p>
                                    <Link to='/products' className="btn btn-primary">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
          
        </section>
    );
};

export default Banner;