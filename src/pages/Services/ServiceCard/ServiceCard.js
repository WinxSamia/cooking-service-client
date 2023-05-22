import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { img, Name, price, description, _id } = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl h-full">
                <figure><img src={img} className='w-full h-56 object-cover' /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{Name}</h2>
                    <h4 className='text-xl font-semibold'>Price: {price}</h4>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/cart/${_id}`}>  <button className="btn btn-primary">Add to cart</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;