import { useState, useRef } from "react";

const ImageCarousel = ({ images = [], rating, cashbackLabel }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  if (!images || images.length === 0) return null;

  const maxVisibleThumbnails = 5;
  const showMoreOverlay = images.length > maxVisibleThumbnails;
  const visibleThumbnails = images.slice(0, maxVisibleThumbnails);
  const remainingCount = images.length - maxVisibleThumbnails;

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: scrollWidth * index,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    }
  };

  const StarIcon = () => (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="#FBBF24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );

  return (
    <div className="w-full block">
      {/* Desktop Layout */}
      <div className="hidden md:flex flex-col gap-4">
        <div className="w-full relative rounded-2xl bg-white flex items-center justify-center overflow-hidden aspect-[4/5] md:aspect-square">
          <img
            src={images[activeIndex]?.src}
            alt={images[activeIndex]?.alt || "Main product image"}
            className="w-full h-full object-contain transition-opacity duration-300"
          />
          {rating && (
            <div className="absolute bottom-3 right-3 bg-white rounded px-1.5 py-1 flex items-center gap-1 text-[9px] font-semibold text-[#151E29] shadow-sm z-10">
              <span>{rating}</span>
              <StarIcon />
            </div>
          )}
          {cashbackLabel && (
            <div className="absolute bottom-3 left-0 bg-[#1AB759] text-white text-xs font-semibold px-2 py-1 rounded-r-md z-10">
              {cashbackLabel}
            </div>
          )}
        </div>

        <div className="w-full flex justify-center gap-3">
          {visibleThumbnails.map((img, idx) => {
            const isLastVisible = idx === maxVisibleThumbnails - 1;
            return (
              <div
                key={idx}
                className={`w-[54px] h-[54px] border-[1.5px] rounded-xl overflow-hidden cursor-pointer relative transition-colors duration-200 shrink-0 flex items-center justify-center bg-white ${
                  activeIndex === idx ? "border-brand" : "border-[#D1D5DB]"
                }`}
                onClick={() => handleThumbnailClick(idx)}
              >
                <img
                  src={img.src}
                  alt={img.alt || `Thumbnail ${idx}`}
                  className="w-full h-full object-contain"
                />
                {isLastVisible && showMoreOverlay && (
                  <div className="absolute inset-0 bg-black/40 text-white flex items-center justify-center text-sm font-semibold">
                    +{remainingCount + 1}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col w-full md:hidden">
        <div className="relative w-full">
          <div
            className="flex overflow-x-auto snap-x snap-mandatory w-full"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            ref={scrollRef}
            onScroll={handleScroll}
          >
            {/* inline styles to hide scrollbar for webkit */}
            <style>{`
              .flex.overflow-x-auto::-webkit-scrollbar { display: none; }
            `}</style>

            {images.map((img, idx) => (
              <div
                className="min-w-full w-full snap-center relative aspect-square bg-white flex items-center justify-center"
                key={idx}
              >
                <img
                  src={img.src}
                  alt={img.alt || `Slide ${idx}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Overlay elements over the slider */}
          {rating && (
            <div className="absolute bottom-3 right-3 bg-white rounded px-1.5 py-1 flex items-center gap-1 text-[9px] font-semibold text-[#151E29] shadow-sm z-10">
              <span>{rating}</span>
              <StarIcon />
            </div>
          )}
          {cashbackLabel && (
            <div className="absolute bottom-3 left-0 bg-[#1AB759] text-white text-xs font-semibold px-2 py-1 rounded-r-md z-10">
              {cashbackLabel}
            </div>
          )}
        </div>

        <div className="flex justify-center items-center gap-1.5 mt-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? "w-[21px] h-1 bg-[#1AB759] rounded-[2px]"
                  : "w-1 h-1 bg-[#D1D5DB] rounded-full"
              }`}
              onClick={() => handleThumbnailClick(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
