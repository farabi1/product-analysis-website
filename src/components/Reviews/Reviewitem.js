import React from 'react';
import './Reviewitem.css'

const Reviewitem = (props) => {
   const {name,img,text,rate}=props.review;
    return (
        <div className='reviewitem'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h1>{text}</h1>
            <h1>{rate}</h1>
           
        </div>
    );
};

export default Reviewitem;