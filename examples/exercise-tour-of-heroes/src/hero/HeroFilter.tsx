import classNames from "classnames";

interface HeroFilterProps {
  className?: string;
  filter: string;
  onChange(filter: string): void;
}

export default function HeroFilter({
  filter,
  onChange,
  className
}: HeroFilterProps) {
  return (
    <label className={classNames("flex items-baseline", className)}>
      Filter:
      <input
        type="text"
        className="ml-3 px-3 py-2 w-full border rounded"
        value={filter}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
