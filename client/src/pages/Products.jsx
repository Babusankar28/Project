import React from "react";
import ProductsSideBar from "../components/Products/ProductsSideBar";
import ProductsContent from "../components/Products/ProductsContent";

function Products() {
  return (
    <div className="p-4 py-10 md:flex gap-5">
      <ProductsSideBar />
      <ProductsContent />
    </div>
  );
}

export default Products;
