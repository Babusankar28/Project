const ProductsModel = require("../models/ProductsModel");

const getProducts = async (req, res) => {
  try {
    
    const page = parseInt(req.query.page) || 1;
    const search = req.query.search || "";
    const limit = 8;
    const products = await ProductsModel.find();
    if (!products.length) {
      return res
        .status(404)
        .json({ message: "No products found", success: false });
    }
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase()) ||
        product.brand.toLowerCase().includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredProducts.length / limit);

    if (totalPages < page) {
      page = totalPages;
    }

    const productData = filteredProducts.slice(startIndex, endIndex);

    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      page,
      totalPages,
      products: productData,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getProducts };
