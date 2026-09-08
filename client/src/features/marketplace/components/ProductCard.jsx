import PriceTag from "../../../components/PriceTag";
import RatingStars from "../../../components/RatingStars";

const ProductCard = ({ product }) => {
  return (
    <div className="flex gap-4 p-4 bg-surface rounded-2xl cursor-pointer">
      <div>
        <img
          src={product.defaultImages[0]}
          alt={product.name}
          className="w-20 h-20 object-contain rounded-2xl"
        />
      </div>
      <div className="flex flex-col justify-center relative w-full">
        <h4 className="text-gray-900 font-semibold">{product.brandName}</h4>
        <p className="text-gray-700 text-sm line-clamp-1">
          {product.productName}
        </p>
        <PriceTag mrp={product.mrp} price={product.price} textSize="small" />
        <div className="absolute top-0 right-0">
          <RatingStars rating={product.rating} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
