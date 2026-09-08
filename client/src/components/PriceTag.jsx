const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const PriceTag = ({ mrp, price, textSize = "large" }) => {
  const hasDiscount = mrp > price;
  const discountPercent = hasDiscount
    ? Math.round(((mrp - price) / mrp) * 100)
    : 0;

  return (
    <div
      className={`flex gap-2 items-center ${
        textSize === "small" ? "text-sm" : "text-lg"
      } text-gray-500`}
    >
      {hasDiscount ? (
        <div className="space-x-1">
          <span>{currencyFormatter.format(price)}</span>
          <span className="line-through">{currencyFormatter.format(mrp)}</span>
        </div>
      ) : (
        <span>{currencyFormatter.format(price)}</span>
      )}

      {hasDiscount && (
        <div className="border-2 px-2 py-0.5 rounded-lg">
          <p className="text-xs">{discountPercent}% off</p>
        </div>
      )}
    </div>
  );
};

export default PriceTag;
