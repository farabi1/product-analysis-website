import React from 'react';
import './Reviewitem.css'

const Reviewitem = (props) => {
    const { name, img, text, rate } = props.review;
    return (
        <div className='reviewitem my-6 bg-emerald-100 flex'>
            
            <img src={img} alt="" />
            
            <div className="">
                <h1 className='text-2xl'>Name: {name}</h1>
                <h1>{text}</h1>
                <h1>Rating : {rate}</h1>
            </div>

        </div>
    );
};

export default Reviewitem;