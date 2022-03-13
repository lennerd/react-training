import React from "react";

interface HeroPowerRangeProps {
  label: string;
  name: string;
  defaultValue: number;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const HeroPowerRange = React.forwardRef<HTMLInputElement, HeroPowerRangeProps>(
  ({ onChange, defaultValue, label, name }, ref) => {
    const [value, setValue] = React.useState<number>(defaultValue);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event);
      setValue(Number(event.target.value));
    };

    return (
      <label className="pt-3 flex items-center">
        {label}
        <input
          type="range"
          min={0}
          max={100}
          defaultValue={defaultValue}
          className="mx-3 w-full"
          onChange={handleChange}
          name={name}
          ref={ref}
        />
        {value}
      </label>
    );
  }
);

export default HeroPowerRange;
