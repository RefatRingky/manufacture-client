import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

    const { _id, name, img, description, minOrder, stock, unitPrice } = product;
    return (
        <div className="card w-80 bg-orange-400 shadow-xl">
            <figure><img className='h-36' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h4 className='text-sm font-bold'>Unit Price: ${unitPrice}</h4>
                <p className='text-xs font-bold'>Available Stock: {stock}</p>
                <p className='text-xs font-bold'>Minimum Order: {minOrder}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/purcess/${_id}`} className="btn btn-primary text-center">Order Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;