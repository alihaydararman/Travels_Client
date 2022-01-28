import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div id='contact '>
            <div className='main-container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className='footer-container m-2 text-muted'>
                                <h5 className='mb-5 text-warning'>
                                    <img src='' width='50' className='' alt='' />
                                    <i className='name'>TRAVEL </i>
                                    WORLD
                                </h5>
                                <p>
                                    If you want to get good service then be sure to book our room
                                    The way we serve you you won't find anywhere else, So come to
                                    Chola without delay
                                </p>
                                <span>
                                    Visit us to have a fun time, book a room from my website now
                                </span>
                            </div>
                        </div>

                        <div className='col-lg-3'>
                            <div className='m-2 footer-container text-muted'>
                                <h5>CONTACT INFO</h5>
                                <h6 className='text-white'> Address </h6>
                                <span>Feni Dell Center</span>
                                <br />
                                <span>Feni,Chittagong, Bangladesh</span>
                                <h6 className='text-white'> Phone Number </h6>
                                <span> 01854*****</span>
                                <br />
                                <span> 0130******</span>
                                <h6 className='text-white'>Email Address</h6>
                                <span>ali3@dti.ac</span>
                            </div>
                        </div>

                        <div className='col-lg-3'>
                            <div className='m-2 footer-container'>
                                <h5>PAGES</h5>
                                <li>
                                    <a href='#home'>Home</a>
                                </li>
                                <li>
                                    <a href='#home'>Service</a>
                                </li>

                                <li>
                                    <a href='#home'>Abount us</a>
                                </li>
                                <li>
                                    <a href='#home'>User profile</a>
                                </li>
                                <li>
                                    <a href='#home'>Orders</a>
                                </li>
                            </div>
                        </div>

                        <div className='col-lg-3'>
                            <div className='m-2 footer-container'>
                                <h5 className='mb-3'>FOLLOW US</h5>
                                <ul>
                                    <li>
                                        <i className='fab fa-facebook-square'></i>
                                    </li>
                                    <li>
                                        <i className='fab fa-twitter-square'></i>
                                    </li>
                                    <li>
                                        <i className='fab fa-linkedin-in'></i>
                                    </li>
                                    <li>
                                        <i className='fab fa-google-plus-square'></i>
                                    </li>
                                    <li>
                                        <i className='fab fa-youtube-square'></i>
                                    </li>
                                </ul>
                                <h5 className='mb-4'>MAILING LIST</h5>
                                <span className='text-muted me-2'>
                                    Sign up for our mailing ist to get updates and offers
                                </span>
                                <input
                                    className='p-2 mt-3 rounded'
                                    type='text'
                                    placeholder='Your E-mail'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center fot'>
                <p className="text-muted">
                    &copy; Copyright 2022| Developed by <span className="fs-5 text-light"> ALI HAYDAR</span>
                </p>
            </div>
        </div>
    );
};

export default Footer;