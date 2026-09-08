const ColorVariantSelector = ({
  colors,
  selectedColor,
  onColorChange,
  variants,
  selectedVariant,
  onVariantChange,
}) => {
  const hasColors = colors && colors.length > 0;
  const hasVariants = variants && variants.length > 0;

  if (!hasColors && !hasVariants) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {hasColors && (
        <div className="flex-1 flex flex-col gap-1.5">
          <label className="text-sm font-bold text-[#1A202C]">Color</label>
          <div className="relative w-full">
            <select
              value={selectedColor || ""}
              onChange={(e) => onColorChange && onColorChange(e.target.value)}
              className="w-full h-[45px] border border-[#D1D5DB] rounded-lg px-3.5 py-2 text-sm font-medium text-[#4A5568] appearance-none bg-white cursor-pointer transition-colors duration-200 focus:outline-none focus:border-brand hover:border-brand"
            >
              <option value="" disabled>
                Select color
              </option>
              {colors.map((color, index) => (
                <option key={index} value={color}>
                  {color}
                </option>
              ))}
            </select>
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#718096] pointer-events-none flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      )}

      {hasVariants && (
        <div className="flex-1 flex flex-col gap-1.5">
          <label className="text-sm font-bold text-[#1A202C]">Variant</label>
          <div className="relative w-full">
            <select
              value={selectedVariant || ""}
              onChange={(e) =>
                onVariantChange && onVariantChange(e.target.value)
              }
              className="w-full h-[45px] border border-[#D1D5DB] rounded-lg px-3.5 py-2 text-sm font-medium text-[#4A5568] appearance-none bg-white cursor-pointer transition-colors duration-200 focus:outline-none focus:border-brand hover:border-brand"
            >
              <option value="" disabled>
                Select variant
              </option>
              {variants.map((variant, index) => (
                <option key={index} value={variant}>
                  {variant}
                </option>
              ))}
            </select>
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#718096] pointer-events-none flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorVariantSelector;
