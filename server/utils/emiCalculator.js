const DEFAULT_TENURES = [
  { tenureMonths: 3, interestRate: 0 },
  { tenureMonths: 6, interestRate: 10 },
  { tenureMonths: 9, interestRate: 13 },
  { tenureMonths: 12, interestRate: 15 },
];

const computeMonthlyEmi = (principal, annualRatePercent, months) => {
  if (annualRatePercent === 0) {
    const monthlyAmount = Math.round(principal / months);
    return { monthlyAmount, totalPayable: monthlyAmount * months };
  }

  const monthlyRate = annualRatePercent / 12 / 100;
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const monthlyAmount = Math.round(emi);
  return { monthlyAmount, totalPayable: monthlyAmount * months };
};

const buildEmiOptions = (price, tenures = DEFAULT_TENURES) => {
  return tenures.map(({ tenureMonths, interestRate }) => {
    const { monthlyAmount, totalPayable } = computeMonthlyEmi(
      price,
      interestRate,
      tenureMonths,
    );
    return { tenureMonths, interestRate, monthlyAmount, totalPayable };
  });
};

export { buildEmiOptions, computeMonthlyEmi };
