import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProducts from '../Hooks/useProducts';
import Loading from '../Shared/Loading';
import { BsArrowRightCircleFill } from 'react-icons/bs';

const Products = () => {
    const [products, isLoading, error] = useProducts();

    if (isLoading) {
        return <Loading />
    }
    if (error) {
        toast.error(error.massage)
    }

    return (
        <>
            <h3 className='text-5xl text-center  border-b-2 border-primary text-orange-500 font-bold my-4'><span className=' '>Our Featured Products</span></h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 pl-6 bg-black'>
                {
                    products?.slice(0, 6)?.map(({ _id, name, img, description, minOrder, stock, unitPrice }) => (
                        <div key={_id} className="card w-80 bg-orange-400 shadow-xl my-10">
                            <figure><img className='h-36' src={img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{name}</h2>
                                <h4 className='text-sm font-bold'>Unit Price: ${unitPrice}</h4>
                                <p className='text-xs font-bold'>Stock: {stock}</p>
                                <p className='text-xs font-bold'>Minimum Order: {minOrder}</p>
                                <p>{description}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/purcess/${_id}`} className="btn btn-primary">Order Now</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Link className='flex justify-center items-center text-xl font-bold mb-6' to='/products' ><BsArrowRightCircleFill className='mr-3' />  See All</Link>
        </>
    );
};

export default Products;