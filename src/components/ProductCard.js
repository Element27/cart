import React from 'react'
import Minus from "./Assets/Minus.png"
import Plus from "./Assets/Plus.png"

// green = #0D8D39
// red = #E91010

function ProductCard({ imgSrc, title, price, category }) {
  return (
    <div className='flex gap-1 justify-center items-center border-b p-4 text-lg mb-7 md:mb-10'>
      <img
        className='w-3/12 md:w-44 h-auto rounded-full shadow-lg border lg:w-24'
        src={imgSrc} alt="product" />
      <div className=' w-5/12 flex flex-col justify-center items-center'>
        <div className='mb-4 text-center'>
          <h3 className='text-xl font-bold text-[#0D8D39]  md:text-2xl'>{title}</h3>
          <span className='font-semibold text-gray-300'>{category}</span>
        </div>

        <div className='flex w-full  justify-center items-center'>
          <div className='flex'>
            <img
              src={Minus}
              className='cursor-pointer'
              alt="minus"
            />
            <p
              className='font-bold mx-2 md:mx-4 md:text-xl'
            ><span id='itemCount'>2</span></p>
            <img
              src={Plus}
              className='cursor-pointer'
              alt="plus"
            />
          </div>
        </div>
      </div>
      <div className='w-3/12 text-[#E91010] text-center font-bold border shadow-md mix-blend-darken rounded-lg p-1 mt-auto mb-0 md:text-xl lg:mb-auto lg:w-2/12'>
        <p>$: <span>{price}</span></p>
      </div>
    </div>
  )
}

export default ProductCard