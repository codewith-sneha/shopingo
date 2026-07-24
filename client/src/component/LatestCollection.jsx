import React, { useContext, useEffect, useState } from 'react'
import ShopContext from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const {products} = useContext(ShopContext);
    const [latestProduct,setLatestProduct] = useState([]);

    useEffect(()=>{
        setLatestProduct(products.slice(0,10));
    },[products]);
  return (
    <div className='my-6'>

        {/* title  */}
        <div className='sm:text-3xl text-xl text-center mb-10 font-mono '>
            <Title title1="latest" title2="collections" />
            <p className='text-xs md:text-base  text-gray-700'>Your favorites, freshly added. Discover the newest arrivals just for you.</p>
        </div>

        {/* rendering latest products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4'>
            {latestProduct.map((product,index)=>(
                <ProductItem key={index} id={product._id} name={product.name} price={product.price} image={product.images} />
            ))}
        </div>
    </div>
  )
}

export default LatestCollection