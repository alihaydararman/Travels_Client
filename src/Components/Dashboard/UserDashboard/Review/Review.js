import React, { useState } from 'react';
import { Alert, Button, } from '@mui/material';


import useAuth from '../../../Hooks/useAuth';
import { Form } from 'react-bootstrap';



const Review = () => {
    const { user } = useAuth();
    const [ratingData, setRatingData] = useState({});
    const [success, setSuccess] = useState();

    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserInfo = { ...ratingData };
        newUserInfo[field] = value;
        setRatingData(newUserInfo);
    };

    const handleRating = (e) => {
        const userdata = { name: `${user.displayName}`, email: `${user.email}` };

        const ratingInfo = ratingData;
        ratingInfo.users = userdata;
        ratingInfo.img = ratingInfo.img ? ratingInfo.img : user.photoURL;
        console.log(ratingInfo);
        fetch('https://intense-plateau-36885.herokuapp.com/reviews', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(ratingInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    setSuccess(true);
                    setTimeout(() => {
                        setSuccess(false);
                    }, 5000);
                }
            });
        e.preventDefault();
    };

    return (
        <div className='row  d-flex justify-content-center mt-5'>
            <div className='col-12 col-md-10 col-lg-9 '>
                <div className='add-product box-shadow bg-white p-4 '>
                    <Form onSubmit={handleRating}>
                        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='name@example.com'
                                defaultValue={user.email}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Your name'
                                defaultValue={user.displayName}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                            <Form.Label>Image Link</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                name='img'
                                type='url'
                                placeholder='Your image url'
                            />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                            <Form.Label>Star's</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                name='stars'
                                type='number'
                                placeholder='Rate Out of 5'
                                min='1'
                                max='5'
                                step='0.1'
                                required
                            />
                        </Form.Group>
                        <Form.Group
                            className='mb-3'
                            controlId='exampleForm.ControlTextarea1'
                        >
                            <Form.Label>Explain Your feedback</Form.Label>
                            <Form.Control
                                onChange={handleChange}
                                name='Feedback'
                                as='textarea'
                                rows={3}
                            />
                        </Form.Group>
                        <Button type='submit' className='btn btn-warning'>
                            Submit Reveiw
                        </Button>
                    </Form>
                    {success && (
                        <Alert variant='success' className='mt-2 py-2'>
                            Your Review added . thanks for staying with us
                        </Alert>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Review;