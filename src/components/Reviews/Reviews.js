import React from 'react';
import useReview from '../../custom hook/useReview';
import Reviewitem from './Reviewitem';

const Reviews = () => {

    const [reviews, setReview] = useReview();

    return (
        <div>
            <h1>This is reviews page : {reviews.length}</h1>
            {
                reviews.map(review => <Reviewitem></Reviewitem>)
            }
        </div>
    );
};

export default Reviews;