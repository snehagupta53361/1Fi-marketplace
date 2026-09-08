import { useCallback, useState } from "react";
import SearchBar from "./components/SearchBar";
import Spinner from "../../components/Spinner";
import EmptyState from "../../components/EmptyState";

const TopBrands = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [onlineStores, setOnlineStores] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
    // TODO: trigger fetch/filter of online stores using `term`
  }, []);

  return (
    <div className="w-full space-y-4">
      <div className="px-4">
        <SearchBar
          placeholder="Search online stores..."
          onSearch={handleSearch}
        />
      </div>

      <h3 className="text-xl font-semibold text-gray-900">Top Brands</h3>

      <div className="w-full">
        {isLoading ? (
          <Spinner />
        ) : onlineStores.length === 0 ? (
          <EmptyState message="Add new online store" />
        ) : (
          onlineStores.map((store) => <div key={store.id}>{store.name}</div>)
        )}
      </div>
    </div>
  );
};

export default TopBrands;
