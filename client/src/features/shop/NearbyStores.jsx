import { useCallback, useState } from "react";
import SearchBar from "./components/SearchBar";
import Spinner from "../../components/Spinner";
import EmptyState from "../../components/EmptyState";

const NearbyStores = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [nearbyStores, setNearbyStores] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
    // TODO: trigger fetch/filter of nearby stores using `term`
  }, []);

  return (
    <div className="space-y-4">
      <div className="px-4">
        <SearchBar
          placeholder="Search Nearby Stores..."
          onSearch={handleSearch}
        />
      </div>

      <h3 className="text-xl font-semibold text-gray-900">Nearby Stores</h3>

      <div>
        {loading ? (
          <Spinner />
        ) : nearbyStores.length === 0 ? (
          <EmptyState message="Add nearby Store" />
        ) : (
          nearbyStores.map((store) => <div key={store.id}>{store.name}</div>)
        )}
      </div>
    </div>
  );
};

export default NearbyStores;
