// useProducts.js
import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const fetchedProducts = await getProducts();
        if (!ignore) setProducts(fetchedProducts.data);
      } catch (err) {
        if (!ignore) setError(err);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      ignore = true;
    };
  }, []);

  return { products, loading, error };
};

export default useProducts;
