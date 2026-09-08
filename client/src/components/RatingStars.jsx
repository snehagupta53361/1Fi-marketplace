import { memo } from "react";
import { Star } from "lucide-react";

const RatingStars = ({ rating }) => {
  if (rating == null) return null;

  return (
    <div className="bg-white rounded px-1.5 py-1 flex items-center gap-1 text-[9px] font-semibold text-[#151E29] shadow-sm z-10">
      <p className="">{Number(rating).toFixed(1)}</p>
      <Star
        size={10}
        strokeWidth={2}
        className="fill-yellow-400 text-yellow-400"
      />
    </div>
  );
};

export default memo(RatingStars);
