import React from "react";
import Header from "../layouts/Header";

function NoPage() {
  return (
    <>
      <Header
        title="No Page"
        position="top-page-header"
        description="Oops! You have taken a wrong turn somewhere. This page does not exist."
      />
    </>
  );
}

export default NoPage;
