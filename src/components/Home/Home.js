import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../custom hook/useReview';
import bannerImage from '../images/sedan.jpg'
import Reviewitem from '../Reviews/Reviewitem';

const Home = () => {

    const [reviews, setReview] = useReview();

    return (
        <>
            <div className='my-10 mx-5 grid grid-cols-2'>
                <div className="text-section flex justify-center items-center">
                    <div className=" my-auto">
                        <div className='text-6xl my-5'>Buy Your <span className='text-blue-700'>Dream</span> Car</div>
                        <div className='text-3xl my-5'>Choose Your car from our amazing Collection</div>
                        <div className="text-white text-2xl ">
                            <Link className='m-2 bg-emerald-600 px-3 py-1 rounded-md hover:text-white hover:bg-blue-600 ' to='/about'>Explore About Us</Link>
                        </div>
                    </div>
                </div>
                <div className="image-section">
                    <img src={bannerImage} alt="Sedan" />
                </div>
            </div>

            <div className="my-10">
                <h1 className='text-6xl text-center my-12'>Customer Review (3)</h1>

                <div className='grid grid-cols-3 mx-16 gap-6'>
                    {
                        reviews.slice(0, 3).map(review => <Reviewitem key={review.id} review={review}
                        ></Reviewitem>)
                    }
                </div>

                <div className=" my-20 text-center text-white text-2xl ">
                    <Link className='m-2 bg-emerald-600 p-3 rounded-md hover:text-white hover:bg-blue-600 ' to='/reviews'>See All Reviews</Link>
                </div>
            </div>
        </>
    );
};

export default Home;