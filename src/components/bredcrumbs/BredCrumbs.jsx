import React from "react";
import "./BredCrumbs.scss";
import { NavLink, useParams } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const BredCrumbs = () => {
  const params = useParams();

  const customBreadcrumbs = [
    {
      path: "/account",
      breadcrumb: "My account",
    },
    {
      path: "/shoppingcart",
      breadcrumb: "Shopping cart",
    },
    {
      path: "/productdetail",
      breadcrumb:"products"
    },
    {
      path: "/productdetail/:id",
      breadcrumb: null
    },
    {
      path: "/productdetail/:id/:title",
      breadcrumb: params.title,
    },
  ];
  const breadcrumbs = useBreadcrumbs(customBreadcrumbs);

  return (
    <section id="bread__crumbs">
      <div className="container">
        {breadcrumbs.map(({ match, breadcrumb }) => (
            <NavLink
              key={match.pathname}
              className="link"
              to={
                match.pathname === "/productdetail"
                  ? (match.pathname = "/products")
                  : match.pathname
              }
            >
              {breadcrumb}
            </NavLink>
        ))}
      </div>
    </section>
  );
};

export default BredCrumbs;
