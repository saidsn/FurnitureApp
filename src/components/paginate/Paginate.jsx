// import React, { useState } from "react";
// import Pagination from "react-js-pagination";
// // import "bootstrap/less/bootstrap.less";

// const Paginate = ({ filteredProducts }) => {
//   const [activePage, setActivePage] = useState(1);
//   const itemsPerPage = 4;

//     const startIndex = (activePage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

//   const handlePageChange = (pageNumber) => {
//     setActivePage(pageNumber);
//   };
//   return (
//     <div>
//       <Pagination
//         activePage={activePage}
//         itemsCountPerPage={itemsPerPage}
//         totalItemsCount={12}
//         pageRangeDisplayed={5}
//         onChange={handlePageChange}
//       />
//     </div>
//   );
// };

// export default Paginate;
