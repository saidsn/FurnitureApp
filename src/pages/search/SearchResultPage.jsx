import React, { useState, useEffect } from "react";
import Search from "../../components/search/Search";
import ProductService from "../../APIs/services/ProductService";

const SearchResult = () => {

  const [products, setProducts] = useState([]);
  
  const getAllProducts = async () => {
    setProducts(await ProductService.getAllProduct());
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return <Search products = {products}/>;
};

export default SearchResult;
