import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useProductDetail from "../../hooks/useProductDetail";
import Spinner from "../../components/Spinner";
import EmptyState from "../../components/EmptyState";
const Header = ({ title }) => {
  return (
    <div className="flex gap-2 items-center">
      <Link
        to="/shop"
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white"
      >
        <ArrowLeft size={18} />
      </Link>
      <h2 className="font-semibold text-lg">{title}</h2>
    </div>
  );
};
const ProductDetail = () => {
  const { productId } = useParams();
  const { product, loading, error } = useProductDetail(productId);

  console.log(product);

  const renderProductDetail = () => {
    if (loading) return <Spinner />;
    if (!product) return <EmptyState />;

    return (
      <main>
        <div>
          <h2>{product.productName}</h2>
        </div>
      </main>
    );
  };

  return (
    <div className="w-[480px] border-2">
      {<Header title={product.brandName} />}
      {renderProductDetail()}
    </div>
  );
};

export default ProductDetail;
