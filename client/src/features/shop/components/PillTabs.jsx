import { memo } from "react";

const PillTabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div
      role="tablist"
      className="flex gap-2 rounded-full border border-[#ece5ff] bg-[#f5f0ff] p-1.5 shadow-[0_1px_3px_rgba(113,44,220,0.06)]"
    >
      {tabs.map((tab) => {
        const isActive = tab.name === activeTab;

        return (
          <button
            key={tab.id ?? tab.name}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => setActiveTab(tab.name)}
            className={`relative flex flex-1 flex-col items-center gap-1.5 rounded-full py-[11px] text-center text-sm font-semibold tracking-[-0.005em] transition-all duration-300 ease-out ${
              isActive
                ? "bg-surface text-[#712CDC] shadow-[0_1px_3px_rgba(20,14,50,0.10),0_0_0_1px_rgba(113,44,220,0.08)]"
                : "bg-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.name}
            <div
              className={`h-0.5 w-5 rounded-full bg-brand transition-all duration-300 ease-out ${
                isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default memo(PillTabs);
