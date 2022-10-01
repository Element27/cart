import React from 'react'
import ProductCards from './ProductCards'
import ShoppingCartFooter from './ShoppingCartFooter'
import ShoppingCartHeader from './ShoppingCartHeader'

function ShoppingCart() {
  return (
    <div className='mb-24'>
      <ShoppingCartHeader />
      <ProductCards />
      <ShoppingCartFooter />

    </div>
  )
}

export default ShoppingCart