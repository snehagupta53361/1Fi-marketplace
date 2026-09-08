import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import SearchBar from "../shop/components/SearchBar";
import EmptyState from "../../components/EmptyState";
import Spinner from "../../components/Spinner";
import useProducts from "../../hooks/useProducts";
import ProductCard from "./components/ProductCard";

const MarketplaceHome = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { products, loading, error } = useProducts();

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return products;

    return products.filter((product) =>
      product?.productName?.toLowerCase().includes(query),
    );
  }, [products, searchQuery]);

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  const renderProductList = () => {
    if (loading) return <Spinner />;
    if (products.length === 0) return <EmptyState message="Add new product" />;
    if (filteredProducts.length === 0) {
      return <EmptyState message={`No products found for "${searchQuery}"`} />;
    }

    return (
      <div className="flex flex-col gap-4">
        {filteredProducts.map((product) => (
          <Link
            key={product.productId}
            to={`/products/${product.productId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full space-y-4">
      <div className="px-4">
        <SearchBar
          placeholder="Search top products..."
          onSearch={setSearchQuery}
        />
      </div>

      <h3 className="px-4 text-xl font-semibold text-gray-900">Top Products</h3>

      <div className="w-full px-4">{renderProductList()}</div>
    </div>
  );
};

export default MarketplaceHome;
