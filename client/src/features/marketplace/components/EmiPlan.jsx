const EmiPlan = ({
  plans = [],
  selectedPlan,
  onPlanSelect,
  payNowAmount,
  startingDate,
  cashbackAmount,
}) => {
  if (!plans || plans.length === 0) return null;

  const currentPlan = plans.find((p) => p.months === selectedPlan) || plans[0];

  return (
    <div className="flex flex-col border border-[#E2E6EB] rounded-xl bg-white overflow-hidden">
      <div className="flex items-center gap-2 p-4 border-b border-[#E2E6EB]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-brand"
        >
          <rect
            x="2"
            y="5"
            width="20"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="12"
            cy="12"
            r="3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M2 9h20" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span className="text-base font-bold text-[#1F2937]">
          Pay only {payNowAmount} now
        </span>
      </div>

      <div className="flex justify-between items-center px-4 pt-4 pb-2">
        <span className="text-sm font-bold text-[#1F2937]">
          Choose EMI Tenure
        </span>
        {startingDate && (
          <span className="text-[11px] text-[#9CA3AF]">
            EMIs starting {startingDate}
          </span>
        )}
      </div>

      <div className="flex flex-col px-4">
        {plans.map((plan, idx) => {
          const isSelected = plan.months === selectedPlan;
          return (
            <div
              key={plan.months}
              className="flex justify-between items-center py-3.5 border-b border-[#F3F4F6] cursor-pointer last:border-b-0"
              onClick={() => onPlanSelect(plan.months)}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded-full border-[1.5px] flex items-center justify-center ${
                    isSelected ? "border-brand" : "border-[#D1D5DB]"
                  }`}
                >
                  {isSelected && (
                    <div className="w-2.5 h-2.5 rounded-full bg-brand" />
                  )}
                </div>
                <span className="text-sm font-semibold text-[#1F2937]">
                  {plan.emi} x {plan.months} months
                </span>
              </div>
              {plan.label && (
                <div className="bg-brand text-white text-[11px] font-bold px-2 py-1 rounded">
                  {plan.label}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="text-[11px] text-[#6B7280] px-4 pb-4 pt-2">
        *Total extra payment per month/order value
      </div>

      <button className="bg-brand hover:bg-brand-dark text-white border-none p-3 mx-4 mb-4 rounded-lg cursor-pointer flex flex-col items-center gap-0.5 transition-colors duration-200">
        <div className="text-base font-bold">
          Buy on {currentPlan.months} months EMI
        </div>
        {cashbackAmount && (
          <div className="text-[11px] font-medium opacity-90">
            Earn {cashbackAmount} cashback on this order
          </div>
        )}
      </button>
    </div>
  );
};

export default EmiPlan;
