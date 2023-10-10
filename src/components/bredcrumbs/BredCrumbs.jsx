import React from "react";
import "./BredCrumbs.scss";
import { NavLink, useParams } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { useTranslation } from "react-i18next";

const BredCrumbs = () => {

  const { t } = useTranslation();
  const params = useParams();

  const customBreadcrumbs = [
    {
      path: "/",
      breadcrumb: t("breadcrumbs.home"),
    },
    {
      path: "/about",
      breadcrumb: t("breadcrumbs.about"),
    },
    {
      path: "/products",
      breadcrumb: t("breadcrumbs.products"),
    },
    {
      path: "/collections",
      breadcrumb: t("breadcrumbs.collections"),
    },
    {
      path: "/contact",
      breadcrumb: t("breadcrumbs.contact"),
    },
    {
      path: "/account",
      breadcrumb: t("breadcrumbs.myaccount"),
    },
    {
      path: "/shoppingcart",
      breadcrumb: t("breadcrumbs.shoppingcart"),
    },
    {
      path: "/productdetail",
      breadcrumb: t("breadcrumbs.productdetail"),
    },
    {
      path: "/productdetail/:id",
      breadcrumb: null,
    },
    {
      path: "/productdetail/:id/:title",
      breadcrumb: params.title,
    },
    {
      path: "/searchresult",
      breadcrumb: t("breadcrumbs.searchresults"),
    },
    {
      path: "/account/wishlist",
      breadcrumb: t("breadcrumbs.wishlist"),
    },
    {
      path: "/account/info",
      breadcrumb: t("breadcrumbs.info"),
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
