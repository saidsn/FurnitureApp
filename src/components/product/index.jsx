import React from 'react';
import './Product.scss';
import ProductCart from '../productcart';


const Product = () => {
  return (
    <div className='container'>
      <div className="product__content">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
    </div>
  )
}

export default Product;