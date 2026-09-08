import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useProductDetail from "../../hooks/useProductDetail";
import useEmiPlans from "../../hooks/useEmiPlans";
import ImageCarousel from "./components/ImageCarousel";
import ColorVariantSelector from "./components/ColorVariantSelector";
import EmiPlan from "./components/EmiPlan";
import ProductDetails from "./components/ProductDetails";
import RatingReviews from "./components/RatingReviews";
import Spinner from "../../components/Spinner";

// ─── SVG Icons ────────────────────────────────────────────────────
const FireIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-brand"
    width="14"
    height="14"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 11.367C14 8.407 12 4.367 11 3.367C11 6.405 9.227 8.108 8 9.367C6.774 10.627 6 12.607 6 14.367C6 15.958 6.632 17.484 7.757 18.609C8.883 19.735 10.409 20.367 12 20.367C13.591 20.367 15.117 19.735 16.243 18.609C17.368 17.484 18 15.958 18 14.367C18 12.835 16.944 10.427 16 9.367C14.214 12.367 13.209 12.367 12 11.367Z" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.29 6.71a.996.996 0 000 1.41L13.17 12l-3.88 3.88a.996.996 0 101.41 1.41l4.59-4.59a.996.996 0 000-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"
      fill="currentColor"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="#38A169"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L3 7V12C3 17.55 6.84 22.74 12 24C17.16 22.74 21 17.55 21 12V7L12 2ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" />
  </svg>
);

const TruckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="#3182CE"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 8H17V4H3C1.9 4 1 4.9 1 6V17H3C3 18.66 4.34 20 6 20S9 18.66 9 17H15C15 18.66 16.34 20 18 20S21 18.66 21 17H23V12L20 8ZM6 18.5C5.17 18.5 4.5 17.83 4.5 17S5.17 15.5 6 15.5S7.5 16.17 7.5 17S6.83 18.5 6 18.5ZM19.5 9.5L21.46 12H17V9.5H19.5ZM18 18.5C17.17 18.5 16.5 17.83 16.5 17S17.17 15.5 18 15.5S19.5 16.17 19.5 17S18.83 18.5 18 18.5Z" />
  </svg>
);

const StarBadgeIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="#DD6B20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const ReplacementIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1a6.875 6.875 0 000 9.79 7.02 7.02 0 009.88 0C18.32 15.65 19 14.08 19 12.1h2c0 2.08-.73 4.15-2.19 5.65a8.98 8.98 0 01-12.72 0 8.98 8.98 0 010-12.72 8.98 8.98 0 0112.72 0L21 2.88v7.24z"
      fill="#E53E3E"
    />
  </svg>
);

// ─── Default Fallback Data ───────────────────────────────────────
const defaultProductData = {
  name: "Apple iPhone 17 Pro",
  subtitle: "(Silver, 256 GB)",
  variantLabel: "(Storage: 256 GB, Color: Silver)",
  price: "₹1,34,900",
  soldCount: "70+",
  rating: 4.2,
  images: [
    {
      src: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-model-unselect-gallery-1-202504?wid=5120&hei=2880&fmt=webp&qlt=70&.v=UXAxbkRTVjVCYVdaUTVoL1BBVW5FYTVuaFBxSjhPVU1kN2tSZGdqdVZXZUpIMWRsSjlSU0F3YjRFcng3M0FlQS9WUkVsZUJqejBFVjcwdFVLT2VEdnFVWnROdGc1QnkvUFFsYjgvUFN2b0duZkxKZkNEN3duYUtxdkF3TDRDTG8&traceId=1",
      alt: "iPhone 17 Pro Front View",
    },
  ],
  colors: ["Silver", "Cosmic Orange", "Deep Blue"],
  variants: ["Storage: 256 GB, RAM: null"],
  emiPlans: [
    { months: 6, emi: "₹19111", label: "0% EMI" },
    { months: 9, emi: "₹12741", label: "0% EMI" },
    { months: 12, emi: "₹9555", label: "0% EMI" },
  ],
  details: [
    { label: "Storage", value: "256 GB" },
    { label: "Color", value: "Silver" },
    { label: "Front Camera", value: "18MP" },
    { label: "Screen Size", value: "6.3 inch" },
  ],
  description: "",
  reviews: [],
  shopConfidence: [
    { icon: "replacement", label: "2 Days Service Centre Replacement" },
    { icon: "warranty", label: "1 year Warranty" },
    { icon: "brand", label: "Top Brand" },
    { icon: "delivery", label: "Free Delivery" },
  ],
};

const ProductDetail = () => {
  const { productId } = useParams();
  const { product, loading, error } = useProductDetail(productId);

  const [selectedColor, setSelectedColor] = useState("Silver");
  const [selectedVariant, setSelectedVariant] = useState(
    "Storage: 256 GB, RAM: null",
  );
  const [selectedEmiPlan, setSelectedEmiPlan] = useState(6);
  const [showAllDetails, setShowAllDetails] = useState(false);

  useEffect(() => {
    if (
      product &&
      product.configurations &&
      product.configurations.length > 0
    ) {
      const firstConfig = product.configurations[0];
      if (firstConfig.color) setSelectedColor(firstConfig.color.name);
      if (firstConfig.variant) setSelectedVariant(firstConfig.variant.value);
    }
  }, [product]);

  // Determine current config (safe to do before hooks)
  let currentConfig = null;
  if (product && product.configurations && product.configurations.length > 0) {
    currentConfig =
      product.configurations.find(
        (c) =>
          (!c.color || c.color.name === selectedColor) &&
          (!c.variant || c.variant.value === selectedVariant),
      ) || product.configurations[0];
  }

  // Fetch EMI plans for current variant
  const { emiPlans: emiApiRes, loading: emiLoading } = useEmiPlans(
    productId,
    currentConfig?.variantId,
  );

  // Dynamic mapping of product data
  const mergedData = { ...defaultProductData };

  if (product) {
    if (product.productName) mergedData.name = product.productName;
    if (product.brandName) mergedData.subtitle = `(${product.brandName})`;

    // Map JSON data details if available
    if (product.details?.specifications) {
      mergedData.details = Object.entries(product.details.specifications).map(
        ([k, v]) => ({
          label: k.charAt(0).toUpperCase() + k.slice(1),
          value: v,
        }),
      );
    }
    if (product.details?.description) {
      mergedData.description = product.details.description;
    }

    // Parse configurations for variants, colors, and images
    if (product.configurations && product.configurations.length > 0) {
      const uniqueColors = [
        ...new Set(
          product.configurations
            .filter((c) => c.color)
            .map((c) => c.color.name),
        ),
      ];
      const uniqueVariants = [
        ...new Set(
          product.configurations
            .filter((c) => c.variant)
            .map((c) => c.variant.value),
        ),
      ];

      if (uniqueColors.length > 0) mergedData.colors = uniqueColors;
      if (uniqueVariants.length > 0) mergedData.variants = uniqueVariants;

      if (currentConfig) {
        if (currentConfig.images && currentConfig.images.length > 0) {
          mergedData.images = currentConfig.images.map((img) => ({
            src: img,
            alt: product.productName,
          }));
        }
        if (currentConfig.price) {
          mergedData.price = `₹${currentConfig.price.toLocaleString("en-IN")}`;
        }

        // Build a dynamic variant label
        const labels = [];
        if (currentConfig.variant)
          labels.push(
            `${currentConfig.variant.name}: ${currentConfig.variant.value}`,
          );
        if (currentConfig.color)
          labels.push(`Color: ${currentConfig.color.name}`);
        if (labels.length > 0) {
          mergedData.variantLabel = `(${labels.join(", ")})`;
        } else {
          mergedData.variantLabel = "";
        }
      }
    }

    // Map EMI plans if API returned them
    if (emiApiRes?.data?.emiOptions) {
      mergedData.emiPlans = emiApiRes.data.emiOptions.map((opt) => ({
        months: opt.tenureMonths,
        emi: `₹${opt.monthlyAmount.toLocaleString("en-IN")}`,
        label: opt.interestRate === 0 ? "0% EMI" : `${opt.interestRate}% Int.`,
      }));
    }
  }

  const getConfidenceIcon = (iconType) => {
    switch (iconType) {
      case "replacement":
        return <ReplacementIcon />;
      case "warranty":
        return <ShieldIcon />;
      case "brand":
        return <StarBadgeIcon />;
      case "delivery":
        return <TruckIcon />;
      default:
        return <ShieldIcon />;
    }
  };

  if (loading || emiLoading) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] pb-20 md:pb-0 font-['Inter',sans-serif]">
      {/* ─── Header ───────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#E2E6EB]">
        <div className="flex items-center justify-between p-3 md:px-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <Link
              to="/shop"
              className="md:hidden cursor-pointer flex-shrink-0 text-[#334255]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24"
                height="24"
              >
                <path d="M10.72 4.72a.75.75 0 011.06 1.06L6.31 11.25H19.5a.75.75 0 010 1.5H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75z" />
              </svg>
            </Link>
            <div className="cursor-pointer">
              <span className="text-xl font-extrabold text-brand tracking-tight">
                shop
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <svg
              className="cursor-pointer"
              viewBox="0 0 24 24"
              fill="#334255"
              width="22"
              height="22"
            >
              <path d="M17.25 10.5a6.75 6.75 0 10-1.97 4.77l5.19 5.2a.75.75 0 101.06-1.07l-5.19-5.19A6.72 6.72 0 0017.25 10.5zM10.5 15.75a5.25 5.25 0 110-10.5 5.25 5.25 0 010 10.5z" />
            </svg>
          </div>
        </div>
      </header>

      {/* ─── Main Content ─────────────────────────────────── */}
      <main className="max-w-7xl mx-auto">
        {/* ── Breadcrumb (Desktop) ───────── */}
        <nav className="hidden md:flex items-center gap-1.5 flex-wrap px-6 py-3 bg-[#F9FAFB]">
          <Link
            to="/shop"
            className="text-xs font-medium text-[#718096] hover:underline"
          >
            Shop on EMI
          </Link>
          <span className="text-[#718096]">
            <ChevronRightIcon />
          </span>
          <a
            href="#"
            className="text-xs font-medium text-[#718096] hover:underline"
          >
            Smart Phones
          </a>
          <span className="text-[#718096]">
            <ChevronRightIcon />
          </span>
          <span className="text-xs font-semibold text-[#1A202C]">
            {mergedData.name} {mergedData.subtitle}
          </span>
        </nav>

        <div className="flex flex-col gap-4 px-4 pb-4 md:gap-6 md:px-6 md:pb-10 max-w-2xl mx-auto">
          {/* ── Top Section: Images & Selectors ─────── */}
          <div className="relative bg-white rounded-2xl md:p-4">
            <div className="flex flex-col gap-1 py-3 md:hidden">
              <h1 className="text-lg font-semibold text-[#1A202C] m-0 leading-snug">
                {mergedData.name} {mergedData.subtitle}
              </h1>
              <span className="text-xs font-medium text-[#718096]">
                {mergedData.variantLabel}
              </span>
              <div className="flex items-center gap-1 h-5 text-xs font-semibold text-[#718096]">
                <FireIcon />
                <span>{mergedData.soldCount} sold</span>
              </div>
            </div>

            <ImageCarousel
              images={mergedData.images}
              rating={mergedData.rating}
              cashbackLabel={mergedData.cashbackLabel}
            />

            <div className="mt-4 w-full">
              <ColorVariantSelector
                colors={mergedData.colors}
                selectedColor={selectedColor}
                onColorChange={setSelectedColor}
                variants={mergedData.variants}
                selectedVariant={selectedVariant}
                onVariantChange={setSelectedVariant}
              />
            </div>
          </div>

          {/* ── Right Column: Details & EMI ─────── */}
          <div className="flex flex-col gap-4">
            <div className="hidden md:flex flex-col gap-1.5">
              <h1 className="text-xl font-bold text-[#1A202C] m-0 leading-snug">
                {mergedData.name} {mergedData.subtitle}
              </h1>
              <span className="text-sm font-medium text-[#4A5568]">
                {mergedData.variantLabel}
              </span>
              <div className="flex items-center gap-1 h-5 text-xs font-semibold text-[#718096]">
                <FireIcon />
                <span>{mergedData.soldCount} sold</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold text-[#1A202C]">
                {mergedData.price}
              </span>
            </div>

            {/* EMI Plans Component */}
            <div className="py-4 border-t border-[#E2E6EB] md:py-5">
              <EmiPlan
                plans={mergedData.emiPlans}
                selectedPlan={selectedEmiPlan}
                onPlanSelect={setSelectedEmiPlan}
                payNowAmount="₹20235"
                startingDate="3rd Oct"
                cashbackAmount="₹1349"
              />
            </div>

            {/* Shop with Confidence */}
            <div className="py-4 border-t border-[#E2E6EB] md:py-5 flex flex-col gap-2.5">
              <h3 className="text-base font-bold text-[#1A202C] m-0">
                Shop with Confidence
              </h3>
              <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                {mergedData.shopConfidence.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 min-w-0">
                    {getConfidenceIcon(item.icon)}
                    <span className="text-xs font-medium text-[#4A5568] leading-snug">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              <button className="text-brand border-none bg-transparent pt-3 cursor-pointer flex items-center gap-1 text-sm font-semibold w-fit">
                View More{" "}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>

            {/* Product Details */}
            <div className="py-4 border-t border-[#E2E6EB] md:py-5">
              <ProductDetails
                details={mergedData.details}
                description={mergedData.description}
                showAll={showAllDetails}
                onToggleShowAll={() => setShowAllDetails(!showAllDetails)}
              />
            </div>

            {/* Rating & Reviews */}
            <div className="py-4 border-t border-[#E2E6EB] md:py-5">
              <RatingReviews
                rating={mergedData.rating}
                totalReviews={3}
                ratingLabel="Excellent"
                reviews={mergedData.reviews}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
