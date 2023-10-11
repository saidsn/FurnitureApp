import React, { useState } from "react";
import "./Search.scss";
import Title from "../title/Title";
import ProductCard from "../productcard/ProductCard";
import { useLocation } from "react-router-dom";
// import Pagination from "../paginate/Paginate";
import Pagination from "react-js-pagination";
import { useTranslation } from "react-i18next";

const Search = ({ products }) => {
  const { t } = useTranslation();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get("search");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 4;

  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <section className="search section">
      <div className="container">
        <Title>
          <h3 className="title__head">{t("title.searchresults")}</h3>
        </Title>
        <p className="sarch__title">
          {t("shoppingcart.yoursearchresult")} “{searchValue}”.
        </p>

        {filteredProducts.length > 0 ? (
          <>
            <div className="search__content">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} props={product} />
              ))}
            </div>
            <div className="paginate">
              <Pagination
                activePage={activePage}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={filteredProducts.length}
                pageRangeDisplayed={3}
                onChange={handlePageChange}
                prevPageText=""
                nextPageText=""
              />
            </div>
          </>
        ) : (
          <p className="search__content--notfound">
            {t("shoppingcart.notproduct")}
          </p>
        )}
      </div>
    </section>
  );
};

export default Search;
