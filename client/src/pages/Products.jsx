import React from "react";
import ProductsSideBar from "../components/Products/ProductsSideBar";
import ProductsContent from "../components/Products/ProductsContent";

function Products() {
  return (
    <div className="p-4">
      <ProductsSideBar />
      <ProductsContent />
    </div>
  );
}

export default Products;
