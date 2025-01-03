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
 <></>
  );
}

export default ProductsContent;
