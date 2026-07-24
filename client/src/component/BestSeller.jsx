import React, { useContext, useEffect } from 'react'
import Title from './Title'
import ShopContext from '../context/ShopContext'
import { useState } from 'react';
import Slider from 'react-slick';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestProduct, setBestProduct] = useState([]);

    const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute flex justify-center items-center right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-black hover:text-white text-black p-2 w-8 h-8 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      ➡
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute flex justify-center items-center left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-black hover:text-white  w-8 h-8 text-black p-2 rounded-full cursor-pointer z-10"
      onClick={onClick}
    >
      ⬅
    </div>
  );
};

  const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1280,
      settings: { slidesToShow: 3, slidesToScroll: 1 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1, slidesToScroll: 1 },
    },
  ],
};



    useEffect(()=>{
        setBestProduct(products.filter((item)=>item.bestseller));
    },[products])
  return (
    <div className='my-4 mb-10'>
        
        <div className='sm:text-3xl text-xl text-center mb-10 font-mono '>
            <Title title1="BEST" title2="SELLER" />
            <p className='text-xs md:text-base  text-gray-700'>Explore the top-rated items that have won the hearts of our shoppers.</p>
        </div>

        {/* product listing  */}
         <div className="slider-container relative w-full overflow-hidden ">
      <Slider {...settings}>
        {bestProduct.map((item , index)=>(
 <div key={index} className="p-2"> 
            <ProductItem key={index} name={item.name} image={item.images} id={item._id} price={item.price}  />
            </div>
        ))}
        
      </Slider>
    </div>
    </div>
  )
}

export default BestSeller