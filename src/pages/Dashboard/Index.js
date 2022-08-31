import React from "react";
import Breadcrumbs from "../../components/Common/Breadcrumb";
const index = () => {
  const breadcrumbItems = [{ title: "Dashboard", link: "#" }];
  return (
    <>
      <div className="page-navbar-title mb-4">
        <Breadcrumbs
          title="Job Pool"
          breadcrumbItems={breadcrumbItems}
          className="text-light"
        />
      </div>
      <div className="page-content"></div>
    </>
  );
};

export default index;
