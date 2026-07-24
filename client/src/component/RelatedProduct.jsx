import React, { useContext, useEffect, useState } from 'react'
import ShopContext from '../context/ShopContext';
import ProductItem from './ProductItem';
import Title from './Title';

const RelatedProduct = (props) => {
    const {products} = useContext(ShopContext);
    const [relatedProducts, setRelatedProducts] = useState([])
    useEffect(()=>{
        let productCopy = products.slice();
        productCopy = productCopy.filter((prev)=>prev.category === props.category);
        productCopy = productCopy.filter((prev)=>prev.subCategory === props.subCategory);
        setRelatedProducts(productCopy.slice(0,8));
    },[]);
  return (
    <div className='mt-20'>
         {/* title  */}
        <div className='sm:text-3xl text-xl text-center mb-10 font-mono '>
            <Title title1="Related" title2="Products" />
            <p className='text-xs md:text-base  text-gray-700'>Explore more related products right here.</p>
        </div>

        {/* rendering latest products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4'>
            {relatedProducts.map((product,index)=>(
                <ProductItem key={index} id={product._id} name={product.name} price={product.price} image={product.images} />
            ))}
        </div>
    </div>
  )
}

export default RelatedProduct