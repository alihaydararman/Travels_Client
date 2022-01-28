import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import "./Review.css"

const SignleReview = ({ review }) => {
    console.log(review)
    return (
        <div div className='m-5'>

            <Card className="ms-5">
                <Card.Title> Review By  :<span className="text-success">  {review.users.name}</span></Card.Title>
                <div className="border border-info p-3">
                    <Card.Text> Feedback</Card.Text>
                    <Card.Text> {review.Feedback}</Card.Text>


                </div>
                <Rating
                    initialRating={review.stars}
                    emptySymbol="far fa-star "
                    fullSymbol="fas fa-star  icon-color "
                    readonly
                ></Rating>
            </Card>
        </div>

    );
};

export default SignleReview;