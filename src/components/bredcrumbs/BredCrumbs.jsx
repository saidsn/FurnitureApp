import React from "react";
import "./BredCrumbs.scss";
import { NavLink } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const BredCrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <section id="bred__crumbs">
      <div className="container">
        {breadcrumbs.map(({ match, breadcrumb }) => (
          <span key={match.pathname}>
            <NavLink className="link" to={match.pathname}>
              {breadcrumb}
            </NavLink>
          </span>
        ))}
      </div>
    </section>
  );
};

export default BredCrumbs;
