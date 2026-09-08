const StarIcon = ({ filled }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={filled ? "#FFB800" : "#D1D5DB"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      stroke={filled ? "#FFB800" : "#D1D5DB"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckmarkIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 6L9 17L4 12"
      stroke="#38A169"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RatingReviews = ({
  rating = 0,
  totalReviews = 0,
  ratingLabel = "",
  reviews = [],
}) => {
  if (totalReviews === 0 && reviews.length === 0) return null;

  return (
    <div className="flex flex-col">
      <h2 className="text-base font-bold text-[#1A202C] mb-4">
        Review & Rating
      </h2>

      <div className="flex items-center gap-2 mb-1">
        <span className="text-lg font-bold text-[#1A202C]">
          {rating.toFixed(2)}
        </span>
        <StarIcon filled={true} />
        {ratingLabel && (
          <span className="bg-[#C6F6D5] text-[#22543D] text-xs font-semibold px-2 py-1 rounded-full ml-1">
            {ratingLabel}
          </span>
        )}
      </div>

      {totalReviews > 0 && (
        <div className="text-sm text-[#718096] mb-6">
          Based on {totalReviews} reviews
        </div>
      )}

      <div className="flex flex-col gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex items-center">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} filled={star <= review.rating} />
                ))}
                <span className="ml-2 text-sm font-semibold text-[#1A202C]">
                  {review.rating}
                </span>
              </div>
            </div>

            {review.variant && (
              <div className="text-xs text-[#A0AEC0]">{review.variant}</div>
            )}

            <p className="text-sm text-[#4A5568] m-0 leading-relaxed">
              {review.text}
            </p>

            <div className="text-sm font-medium text-[#1A202C] mt-1">
              {review.author}
            </div>

            <div className="flex items-center gap-2 text-xs text-[#718096]">
              {review.verified && (
                <div className="flex items-center gap-1 text-[#38A169] font-medium">
                  <CheckmarkIcon />
                  <span>Verified buyer</span>
                </div>
              )}
              {review.verified && review.timeAgo && (
                <span className="text-[#CBD5E0]">•</span>
              )}
              {review.timeAgo && <span className="">{review.timeAgo}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingReviews;
