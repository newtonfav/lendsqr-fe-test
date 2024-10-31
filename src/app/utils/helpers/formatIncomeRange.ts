export default function formatIncomeRange(incomeRange: number[]): string {
  const [low, high] = incomeRange.sort((a, b) => a - b);
  return `₦${low.toLocaleString()} - ₦${high.toLocaleString()}`;
}
