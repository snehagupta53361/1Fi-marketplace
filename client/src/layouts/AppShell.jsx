import { Outlet } from "react-router-dom";
import BottomNav from "../components/BottomNav";

const AppShell = () => {
  return (
    <div className="pb-20">
      <Outlet />
      <BottomNav />
    </div>
  );
};

export default AppShell;
