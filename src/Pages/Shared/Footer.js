import React from 'react';

import payment from '../../Assests/payments.png'

const Footer = () => {
    return (
        <footer className='pt-20 bg-black text-orange'>
            <footer className="footer p-10 bg-orange-400 text-black-500 font-bold">
                <div>
                    <span className="footer-title">Services</span>
                    <a href='/#' className="link link-hover">Branding</a>
                    <a href='/#' className="link link-hover">Design</a>
                    <a href='/#' className="link link-hover">Marketing</a>
                    <a href='/#' className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href='/#' className="link link-hover">About us</a>
                    <a href='/#' className="link link-hover">Contact</a>
                    <a href='/#' className="link link-hover">Jobs</a>
                    <a href='/#' className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href='/#' className="link link-hover">Terms of use</a>
                    <a href='/#' className="link link-hover">Privacy policy</a>
                    <a href='/#' className="link link-hover">Cookie policy</a>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
            
            <footer className="footer p-10 bg-black text-orange-500">
                <div>
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <img src={payment} alt="" />
                    </div>
                </div>
            </footer>
        </footer>
    );
};

export default Footer;