import { TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

type Props = {
  label?: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: Props) {
  return (
    <div className="w-full">
      <label>{label}</label>
      <TextField.Root>
        <TextField.Input
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
        />
      </TextField.Root>
    </div>
  );
}
