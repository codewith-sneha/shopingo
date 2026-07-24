import React, { useEffect, useState } from 'react'
import {assets} from '../assets/frontend_assets/assets'
import {useNavigate} from 'react-router-dom';

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate()
    const slides =[
        {
            id:1,
            image:assets.banner1
        },
        {
            id:2,
            image:assets.banner2
        },
        {
            id:3,
            image:assets.banner3
        }
    ]
    useEffect(()=>{
        const timeout = setTimeout(() => {
            setCurrent((prev)=>(prev+1)%slides.length)
        }, 4000);

        return ()=>clearTimeout(timeout);
    },[current]);

    const HandleSliderClick = ()=>{
    
        navigate("/collections");
    }

  return (
    <div className='h-[70vh] w-full overflow-hidden relative my-4'>
        
            {slides.map((slide,index)=>(
                <div onClick={HandleSliderClick} key={index} className={`absolute  h-full w-full transition-all duration-1000 ease-in-out ${index === current ? "translate-x-0 scale-100 z-10 opacity-100":"z-0 opacity-0 scale-97"} `}>
                    <img src={slide.image} alt="image" className={`h-full w-full object-cover`} />
                </div>   
            ))}

        {/* dot of navigation */}
            <div className='absolute bottom-5 flex justify-center z-20 left-1/2 -translate-x-1/2 gap-3 '>
                {slides.map((slide , index)=>(
                    <div onClick={()=>setCurrent(index)} key={index} className={`transition-all duration-500 rounded-full  cursor-pointer h-2 ${index === current ? "bg-white scale-125 w-7" : "bg-gray-500 scale-105 w-5"} `} />

                ))}

            </div>
    </div>
  )
}

export default HeroSlider