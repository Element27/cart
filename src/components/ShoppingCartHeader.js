import back from "./Assets/Back.png"
import React from 'react'

function ShoppingCartHeader() {
  return (
    <div>
      <div className='flex items-center mb-2 bg-white lg:p-4'>
        <img
          className='mr-2'
          src={back} alt="#" />
        <h2 className='text-2xl text-[#0D8D39] font-bold'>My Basket</h2>
      </div>
    </div>
  )
}

export default ShoppingCartHeader