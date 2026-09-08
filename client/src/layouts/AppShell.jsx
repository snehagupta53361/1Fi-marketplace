import { Outlet } from "react-router-dom";
import BottomNav from "../components/BottomNav";

const AppShell = () => {
  return (
    <div className="">
      <Outlet />
      <BottomNav />
    </div>
  );
};

export default AppShell;
