import React from 'react'
import ProductCard from './ProductCard'
import Chili from "./Assets/Chili Pepper.png"
import Watermelon from "./Assets/Watermelon.png"
import Kiwi from "./Assets/Kiwi.png"
import CheckOut from './CheckOut'

function ProductCards() {
  return (
    <div className="px-1 py-6 lg:px-6 lg:flex lg:w-[90%] mx-auto lg:justify-between bg-gray-50">
      <div className='lg:w-full bg-white lg:mr-2 lg:p-4'>
        <ProductCard
          imgSrc={Kiwi}
          title="Apple"
          price="1:40"
          category="vegetable"
        />
        <ProductCard
          imgSrc={Chili}
          title="Orange"
          price="3:10"
          category="vegetable"
        />

        <ProductCard
          imgSrc={Watermelon}
          title="Bell Pepper"
          price="3:60"
          category="vegetable"
        />
      </div>

      {/* check out */}
      <CheckOut />
    </div>
  )
}

export default ProductCards