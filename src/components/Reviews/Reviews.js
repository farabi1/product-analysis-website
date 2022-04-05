import React from 'react';
import useReview from '../../custom hook/useReview';
import Reviewitem from './Reviewitem';

const Reviews = () => {

    const [reviews, setReview] = useReview();

    return (
        <div className='grid grid-cols-3 gap-6 mx-7'>
            {
                reviews.map(review => <Reviewitem key={review.id} review={review}></Reviewitem>)
            }
        </div>
    );
};

export default Reviews;