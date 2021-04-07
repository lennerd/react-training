export default function formatNumber(value: number) {
  const [seconds, milliseconds = 0] = String(value).split(".");

  return `${seconds},${String(milliseconds).padEnd(3, "0")}`;
}
