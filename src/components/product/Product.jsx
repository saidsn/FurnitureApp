import React from 'react';
import './Product.scss';
import ProductCart from '../productcart/ProductCart';

const Product = () => {
  return (
    <div className='container'>
      <h3 className='title'>PRODUCTS</h3>
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