import { memo } from "react";
import {
  House,
  Store,
  ReceiptIndianRupee,
  ChartNoAxesCombined,
  UserRound,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Home", path: "/home", icon: House },
  { label: "Shop", path: "/shop", icon: Store },
  { label: "EMI Dues", path: "/emi-dues", icon: ReceiptIndianRupee },
  { label: "Limit", path: "/limit", icon: ChartNoAxesCombined },
  { label: "Profile", path: "/profile", icon: UserRound },
];

const linkClassName = ({ isActive }) =>
  `relative flex flex-1 flex-col items-center justify-center gap-1 text-xs transition-colors hover:text-gray-700 ${
    isActive ? "text-brand" : "text-gray-500"
  }`;

const NavItem = ({ label, path, icon: Icon }) => (
  <NavLink to={path} className={linkClassName}>
    {({ isActive }) => (
      <>
        <span
          aria-hidden="true"
          className={`absolute top-0 h-0.5 w-10 rounded-full bg-brand transition-opacity duration-200 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        />
        <Icon size={22} strokeWidth={2} />
        <span>{label}</span>
      </>
    )}
  </NavLink>
);

const BottomNav = () => (
  <nav className="fixed bottom-0 left-1/2 w-full max-w-[480px] -translate-x-1/2 rounded-2xl border-t bg-surface">
    <div className="flex h-16 items-stretch jusstify-around">
      {NAV_ITEMS.map((item) => (
        <NavItem key={item.path} {...item} />
      ))}
    </div>
  </nav>
);

export default memo(BottomNav);
