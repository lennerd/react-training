interface HeroPowerRangeProps {
  label: string;
  value: number;
  onChange(value: number): void;
}

export default function HeroPowerRange({
  onChange,
  value,
  label
}: HeroPowerRangeProps) {
  return (
    <label className="pt-3 flex items-center">
      {label}
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        className="mx-3 w-full"
        onChange={(event) => onChange(Number(event.target.value))}
      />
      {value}
    </label>
  );
}
