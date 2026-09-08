// useProductDetail.js
import { useEffect, useState } from "react";
import { getProductById } from "../services/productService";

const useProductDetail = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    const fetchProduct = async () => {
      if (!productId) {
        setProduct(null);
        setError(null);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const fetchedProduct = await getProductById(productId);
        if (!ignore) setProduct(fetchedProduct.data);
      } catch (err) {
        if (!ignore) {
          setError(err);
          setProduct(null);
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    fetchProduct();

    return () => {
      ignore = true;
    };
  }, [productId]);

  return { product, loading, error };
};

export default useProductDetail;
