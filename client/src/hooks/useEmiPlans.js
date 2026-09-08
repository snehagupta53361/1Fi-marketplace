// useEmiPlans.js
import { useEffect, useState } from "react";
import { getEmiPlans } from "../services/productService";

const useEmiPlans = (productId, variantId) => {
  const [emiPlans, setEmiPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    const fetchEmiPlans = async () => {
      if (!productId || !variantId) {
        setEmiPlans([]);
        setError(null);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const fetchedEmiPlans = await getEmiPlans(productId, variantId);
        if (!ignore) setEmiPlans(fetchedEmiPlans);
      } catch (err) {
        if (!ignore) {
          setError(err);
          setEmiPlans([]);
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    fetchEmiPlans();

    return () => {
      ignore = true;
    };
  }, [productId, variantId]);

  return { emiPlans, loading, error };
};

export default useEmiPlans;
