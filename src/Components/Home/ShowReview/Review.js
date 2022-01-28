import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';
import './Review.css';
import Rating from 'react-rating';
// install Swiper modules
SwiperCore.use([Pagination]);

const Review = () => {
    const [reviews, setreviews] = useState([]);

    useEffect(() => {
        fetch('https://intense-plateau-36885.herokuapp.com/reviews')
            .then((res) => res.json())
            .then((data) => {
                setreviews(data);
            });
    }, []);

    return (
        <Container className='my-5 text-center py-4'>
            <h3 className='heading-main'>What our customer says!</h3>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                className='mySwiper'
            >
                {reviews.slice(3).map((review) => (
                    <SwiperSlide
                        key={review._id}
                        className='shadow-sm rounded-2 h-100 bg-white p-2 p-md-3 mb-3'
                    >
                        <div className=''>
                            <div className=''>
                                <i className='fas fa-quote-left fs-4 opacity-75'></i>
                                <p className='text-secondary'>
                                    {review.Feedback.slice(0, 120)}"
                                </p>
                            </div>

                            <div className=''>
                                {review.img ? (
                                    <img src={review.img} alt='' className=' mt-4' />
                                ) : (
                                    <div
                                        className='mt-3 bg-dark d-flex align-items-center justify-content-center rounded-circle mx-auto'
                                        style={{ width: '50px', height: '50px' }}
                                    >
                                        {' '}
                                        <i
                                            className='fas fa-user text-white'
                                            style={{ fontSize: '25px' }}
                                        ></i>
                                    </div>
                                )}
                                <h6 className='mt-2'>{review.users.name}</h6>
                                <Rating
                                    className='text-warning d-block mb-3 fs-6'
                                    readonly
                                    initialRating={review.stars}
                                    emptySymbol='far fa-star '
                                    fullSymbol='fas fa-star '
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    );
};

export default Review;