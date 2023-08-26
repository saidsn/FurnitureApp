import React from 'react';
import './Product.scss';
import ProductCart from '../productcard/ProductCard';
import Title from '../title/Title';


const Product = () => {
  return (
    <div className='container'>
      <Title title="PRODUCTS" />
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