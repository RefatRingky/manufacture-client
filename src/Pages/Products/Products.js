import React from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import useProducts from '../Hooks/useProducts';
import Loading from '../Shared/Loading';
import Product from './Product';

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
            <Helmet>
                <title>Rinrav's Refrigator House</title>
            </Helmet>
            <h3 className='text-4xl text-center text-orange-500 font-bold my-8'><span >This is Our Product</span></h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 pl-6 bg-black'>
                {
                    products?.map(product => <Product key={product._id} product={product} />)
                }
            </div>
            <div class="btn-group grid grid-cols-2 my-6">
                <button class="btn btn-outline">Previous</button>
                <button class="btn btn-outline">Next</button>
            </div>
        </>
    );
};

export default Products;