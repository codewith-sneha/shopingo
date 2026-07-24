import React from 'react'

const Title = (props) => {
  return (
    <div className='flex items-center p-4 text-center gap-2 justify-center capitalize mx-auto '>
        <p className='text-gray-500'>{props.title1}</p>
        
       <div className='flex items-center p-4 gap-2 bg-gradient-to-l to-gray-100 from-gray-400'>
         <p className='text-black'>{props.title2}</p>
       </div>
    </div>
  )
}

export default Title