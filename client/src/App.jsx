import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppShell from "./layouts/AppShell.jsx";
import ShopLayout from "./features/shop/ShopLayout.jsx";
import HomeLayout from "./features/home/HomeLayout.jsx";
import EmiDues from "./features/emiDues/EmiDues.jsx";
import Limit from "./features/limit/Limit.jsx";
import Profile from "./features/profile/Profile.jsx";
import ProductDetail from "./features/marketplace/ProductDetail.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/" element={<ShopLayout />} />
          <Route path="/home" element={<HomeLayout />} />
          <Route path="/shop" element={<ShopLayout />} />
          <Route path="/emi-dues" element={<EmiDues />} />
          <Route path="/limit" element={<Limit />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
