import React from 'react';
import useReview from '../../custom hook/useReview';
import Reviewitem from './Reviewitem';

const Reviews = () => {

    const [reviews, setReview] = useReview();

    return (
        <div className='grid grid-cols-3 ml-16'>
            {
                reviews.map(review => <Reviewitem key={review.id} review={review}></Reviewitem>)
            }
        </div>
    );
};

export default Reviews;