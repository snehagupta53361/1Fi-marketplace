import { Search } from "lucide-react";
import { useEffect, useState } from "react";

const SearchBar = ({
  placeholder = "Search...",
  onSearch,
  debounceMs = 300,
  initialValue = "",
}) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(value);
    }, debounceMs);

    return () => clearTimeout(handler);
  }, [value, debounceMs, onSearch]);

  return (
    <div className="flex items-center gap-3 rounded-3xl bg-surface px-4 py-3">
      <Search className="shrink-0 text-gray-500" size={15} strokeWidth={2} />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full bg-transparent text-sm outline-none placeholder:text-sm"
      />
    </div>
  );
};

export default SearchBar;
