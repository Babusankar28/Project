import { useEffect, useState } from "react";
import axios from "axios";
import speakerImage from "../../assets/Homepage/speaker.png";
import { Box, CircularProgress } from "@mui/material";
import { Empty } from "antd";
function ProductsContent() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState({
    products: [],
    totalPages: 0,
  });

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await axios
        .get(`/api/products?page=${page}&search=${search}`)
        .then((res) => res.data);
      setProducts({
        products: response.products,
        totalPages: response.totalPages,
      });
    } catch (err) {
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search]);
  return (
    <div className="w-full">
      <input
        type="search"
        placeholder="Search Products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-1/2 p-3 outline-none border rounded-md focus:ring-2 block mx-auto"
      />
      <hr className="my-5" />
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          height="500px"
          width="100%"
        >
          <CircularProgress />
          <p className="text-center font-base">Please wait...</p>
        </Box>
      ) : (
        <>
          <div className="grid grid-cols-4 gap-10">
            {products.products.length === 0 ? (
              <div className="col-span-4 h-96 flex my-20 items-center justify-center">
                <Empty description="No products found" />
              </div>
            ) : (
              products.products.map((product) => (
                <div
                  key={product._id}
                  className="shadow-lg rounded-lg hover:scale-105"
                >
                  <img
                    src={speakerImage}
                    alt="Product"
                    className="h-48 block object-cover mx-auto"
                  />
                  <div className="p-5">
                    <h2>{product.name}</h2>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="flex gap-2 my-10 justify-center ">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="w-16 h-8 bg-blue-400 hover:bg-blue-800 text-sm text-white rounded-md flex items-center justify-center disabled:bg-gray-300"
            >
              Prev
            </button>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page === products.totalPages || !products.totalPages}
              className="w-16 h-8 bg-blue-400 hover:bg-blue-800 text-sm text-white rounded-md flex items-center justify-center disabled:bg-gray-300"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductsContent;
