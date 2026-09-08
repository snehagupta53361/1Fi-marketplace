import { memo } from "react";

const Spinner = ({ size = "size-7", className = "" }) => {
  return (
    <div className={`w-fit mx-auto ${className}`}>
      <div
        className={`${size} animate-spin rounded-full border-4 border-gray-200/30 border-t-brand`}
        role="status"
        aria-label="Loading"
      />
    </div>
  );
};

export default memo(Spinner);
