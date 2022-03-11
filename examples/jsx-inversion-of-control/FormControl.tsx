import React from "react";

interface FormControlProps {
  children: React.ReactNode;
  label: React.ReactNode;
}

export default function FormControl({ children, label }: FormControlProps) {
  return (
    <div>
      <label>
        {label}: {children}
      </label>
    </div>
  );
}
