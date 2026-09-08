// ShopLayout.jsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PillTabs from "./components/PillTabs.jsx";
import TopBrands from "./TopBrands.jsx";
import NearbyStores from "./NearbyStores.jsx";
import MarketPlaceHome from "../marketplace/MarketplaceHome.jsx";

const TABS = [
  { name: "Top Brands", component: TopBrands },
  { name: "Nearby Stores", component: NearbyStores },
  { name: "Market Place", component: MarketPlaceHome },
];

const ShopLayout = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].name);

  const ActiveComponent = TABS.find((tab) => tab.name === activeTab)?.component;

  return (
    <div className="min-h-screen w-full">
      <section>
        <img
          src="https://cdn.1fi.in/banners/shop-page%201536x1024.webp"
          alt="Shop now, pay later"
          width={1536}
          height={1024}
          className="w-full"
        />
      </section>

      <div className="space-y-2">
        <div className="relative z-[2] -mt-7 px-4 py-2">
          <PillTabs
            tabs={TABS}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {ActiveComponent && <ActiveComponent />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ShopLayout;
