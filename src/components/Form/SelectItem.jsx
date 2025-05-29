import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@simulador/components/ui/select";
import { Label } from "../ui/label";

export default function CustomSelect({
  id,
  options,
  title = "Seleccionar",
  placeholder = "Seleccione...",
  onValueChange,
  disabled = false,
  value = undefined,
}) {
  function handleSelectChange(value) {
    const selectedOption = options.find((option) => option.id === value);
    onValueChange(id, selectedOption);
  }

  return (
    <div className="grid items-center gap-1">
      <Label htmlFor="select">{title}</Label>
      <Select
        onValueChange={(value) => handleSelectChange(value)}
        disabled={disabled}
        value={value}
        id="select"
      >
        <SelectTrigger className="w-[180px] cursor-pointer">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{title}</SelectLabel>
            {options.map((option, index) => (
              <SelectItem key={index} value={option.id}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
