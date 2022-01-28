import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='mx-auto'>
            <Carousel className='carousel'>
                <Carousel.Item >
                    <img
                        className='d-block w-100'
                        src='https://media.istockphoto.com/photos/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-picture-id1285301614?b=1&k=20&m=1285301614&s=170667a&w=0&h=tDEC2-p91cZiNU5C19sVhB9L08PmaH5wIijCvRDalCI='
                        alt='First slide'
                        style={{ height: '600px' }}
                    />
                    <Carousel.Caption>
                        <h1 className='fw-bold text-uppercase'>Get Wonderfull Travels World</h1>
                        <p className='text-white-50'>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </p>

                        <Link to='/travels' className='btn btn-warning mb-4'>
                            TRAVELS
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src="https://media.istockphoto.com/photos/woman-walking-on-a-path-by-the-sea-holding-a-friends-hand-picture-id1288078486?b=1&k=20&m=1288078486&s=170667a&w=0&h=_Hh6hjBsu4hxPhphKow6kk8YHaqtqYFCRRsadwnvRRY="
                        alt='Second slide'
                        style={{ height: '600px' }}
                    />
                    <Carousel.Caption>
                        <h1 className='fw-bold text-uppercase'>Get Wonderfull Travels World</h1>
                        <p className='text-white-50'>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </p>

                        <Link to='/travels' className='btn btn-warning mb-4'>
                            TRAVELS
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src="https://media.istockphoto.com/photos/mountain-biker-following-family-on-single-track-forest-trail-picture-id1273812424?b=1&k=20&m=1273812424&s=170667a&w=0&h=JUvLNJAKpU7FjLfyELs_o2JTeCT1xBeWGV-DvluURCg="
                        alt='Third slide'
                        style={{ height: '600px' }}
                    />
                    <Carousel.Caption>
                        <h1 className='fw-bold text-uppercase'>Get Wonderfull Travels World</h1>
                        <p className='text-white-50'>
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </p>

                        <Link to='/travels' className='btn btn-warning text-light mb-4'>
                            TRAVELS
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;