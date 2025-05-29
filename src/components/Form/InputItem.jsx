import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function InputItem({
  id,
  placeholder,
  label,
  disabled = false,
  onChange,
  value = "",
  min = 0,
  max 
}) {

  const onChangeHoras = (horas) => {
    const horasNumber = parseFloat(horas);
    if (!isNaN(horasNumber) && horasNumber >= 0) {
      onChange(id, horasNumber);
    }
  }

  return (
    <div className="grid  w-[150px] max-w-sm items-center space-x-2  gap-1">
      <Label htmlFor="custom-input">{label}</Label>
      <Input
        id="custom-input"
        type="number"
        placeholder={placeholder}
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChangeHoras(e.target.value)}
        disabled={disabled}
      />
    </div>
  );
}
