import { memo } from "react";
import { PackageOpen } from "lucide-react";

const EmptyState = ({ message = "Nothing to show here" }) => (
  <div className="w-fit mx-auto min-h-[150px] flex flex-col items-center justify-center gap-3">
    <PackageOpen className="text-gray-700" size={50} strokeWidth={2} />
    <p className="text-gray-700">{message}</p>
  </div>
);

export default memo(EmptyState);
