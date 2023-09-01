import React, { useState, useEffect } from "react";
import ProductService from "../../APIs/services/ProductService";
import BredCrumbs from "../../components/bredcrumbs/BredCrumbs";
import Title from "../../components/title/Title";
import Head from "../../components/head/Head";
import ProductList from "../../components/productlist/ProductList";
import InputElement from "../../components/inputElement/InputElement";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCollections, setSelectedCollections] = useState([]);
  const queryParams = new URLSearchParams(window.location.search);

  const [products, setProducts] = useState([]);
  const [showTitle, setShowTitle] = useState(true);


  const GetAllProduct = async () => {
    setProducts(await ProductService.GetAll());
  };

  const options = [
    { title: "kitchen", id: 1 },
    { title: "bedroom", id: 2 },
    { title: "bathroom", id: 3 },
    { title: "living room", id: 4 },
  ];
  useEffect(() => {
    GetAllProduct();

    const categoriesIds = queryParams.getAll("categoriesIds")[0]
      ? queryParams
          .getAll("categoriesIds")[0]
          .split(",")
          .map((categoryId) => Number(categoryId))
      : [];
    if (categoriesIds.length > 0) {
      setSelectedCategories(categoriesIds);
    }

    const collectionsIds = queryParams.getAll("collectionsIds")[0]
      ? queryParams
          .getAll("collectionsIds")[0]
          .split(",")
          .map((collectionId) => Number(collectionId))
      : [];
    if (collectionsIds.length > 0) {
      setSelectedCollections(collectionsIds);
    }

  }, []);
  const onFilterClick = (filterId, filterType) => {
    if (
      (filterType === "category" && !selectedCategories.includes(filterId)) ||
      (filterType === "collections" && !selectedCollections.includes(filterId))
    ) {
      let updatedCategories = [...selectedCategories];
      let updatedCollections = [...selectedCollections];
      if (filterType === "category") {
        updatedCategories = [...selectedCategories, filterId];
      } else if (filterType === "collections") {
        updatedCollections = [...selectedCollections, filterId];
      }

      setSelectedCategories(updatedCategories);
      setSelectedCollections(updatedCollections);
      const updatedCategoryIds = updatedCategories.join(",");
      const updatedCollectionsIds = updatedCollections.join(",");

      navigate(
        `/products?categoriesIds=${updatedCategoryIds}&collectionsIds=${updatedCollectionsIds}`
      );
    }
  };

  const removeFilterClick = (filterId, filterType) => {
    let removedCategories = [];
    let removedCollections = [];
    let updatedCategoryIds = selectedCategories;
    let updatedCollectionsIds = selectedCollections;

    if (filterType === "category") {
      removedCategories = selectedCategories.filter(
        (category) => category !== filterId
      );
      setSelectedCategories(removedCategories);
      updatedCategoryIds = removedCategories.join(",");
    } else if (filterType === "collections") {
      removedCollections = selectedCollections.filter(
        (collection) => collection !== filterId
      );
      setSelectedCollections(removedCollections);
      updatedCollectionsIds = removedCollections.join(",");
    }

    navigate(
      `/products?categoriesIds=${updatedCategoryIds}&collectionsIds=${updatedCollectionsIds}`
    );
  };

  return (
    <>
      <BredCrumbs />
      {showTitle ? (
        <Title>
          <h3 className="title__head container">PRODUCTS</h3>
        </Title>
      ) : null}
      <Head>
        <p className="header--text">
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero
          tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          minus id quod maxime.
        </p>
        <div class="dropdown">
          <button class="dropbtn btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 16L13 16"
                stroke="#B8926A"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M6 11H13"
                stroke="#B8926A"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M8 6L13 6"
                stroke="#B8926A"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M17 4L17 20L20 16"
                stroke="#B8926A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            SORT BY
          </button>
          <div class="dropdown-content">
            <a href="#">POPULAR FIRST</a>
            <a href="#">CHEAPEST FIRST</a>
            <a href="#">EXPENSIVE FIRST</a>
          </div>
        </div>
      </Head>
      <div className="container">
        <div style={{ display: "flex" }}>
          <aside style={{ maxWidth: "32rem", width: "100%" }}>
            <InputElement
              filterType="category"
              setFilters={setSelectedCategories}
              removeFilterClick={removeFilterClick}
              onFilterClick={onFilterClick}
              filterItems={selectedCategories}
              options={options}
            />
          </aside>
          {products && <ProductList showTitle={true} products={products} />}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
