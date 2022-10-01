import React from 'react'
import Home from "./Assets/Home.png"
import Heart from "./Assets/Heart.png"
import Basket from "./Assets/Basket.png"
import ListView from "./Assets/List View.png"
import Search from "./Assets/Search.png"


function ShoppingCartFooter() {
  let active = `bg-white rounded-full relative bottom-8 cursor-pointer`


  return (
    <div className='bg-[#0D8D39] flex rounded-md justify-around p-2 fixed bottom-0 w-full'>
      <img src={Home} alt="icon" />
      <img src={Search} alt="icon" />
      <img src={Basket} alt="icon" className={active} />
      <img src={ListView} alt="icon" />
      <img src={Heart} alt="icon" />
    </div>
  )
}

export default ShoppingCartFooter