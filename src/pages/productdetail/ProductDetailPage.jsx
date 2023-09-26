import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ProductDetail from '../../components/productdetail/ProductDetail'
import ProductService from "../../APIs/services/ProductService";


const ProductDetailPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    try {
      const data = await ProductService.getProduct(id);
      setProduct(data);
    } catch (error) {
      console.error("An error occurred while retrieving the product:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);
  return (
    product && (
      <ProductDetail product={product}>
        <img src={product?.image} alt="" />
        <img src={product?.image} alt="" />
        <img src={product?.image} alt="" />
        <img src={product?.image} alt="" />
      </ProductDetail>
    )
  );
}

export default ProductDetailPage;