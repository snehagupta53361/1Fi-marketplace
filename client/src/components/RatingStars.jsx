import { memo } from "react";
import { Star } from "lucide-react";

const RatingStars = ({ rating }) => {
  if (rating == null) return null;

  return (
    <div className="border-2 border-black/30 px-1 rounded-lg flex gap-1 items-center">
      <p className="text-xs text-black/70 font-semibold">
        {Number(rating).toFixed(1)}
      </p>
      <Star
        size={13}
        strokeWidth={2}
        className="fill-yellow-400 text-yellow-400"
      />
    </div>
  );
};

export default memo(RatingStars);
