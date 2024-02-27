import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import CarsContainer from "../models/CarsContainer.ts";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Card } from "@/components/ui/card.tsx";

interface CarFormTextFieldProps {
  id?: string;
  label: string;
  register: UseFormRegisterReturn<string>;
}

function CarFormTextField({ id, label, register }: CarFormTextFieldProps) {
  const inputId = id ?? `input-${label}`;

  return (
    <div className="flex flex-col w-full gap-2">
      <Label htmlFor={inputId}>{label}</Label>
      <Input className="w-full" type={inputId} id="email" {...register} />
    </div>
  );
}

interface CarFormProps {
  index: number;
  register: UseFormRegister<CarsContainer>;
}

function CarForm({ index, register }: CarFormProps) {
  return (
    <Card className="p-4 max-w-sm w-full">
      <div className="flex flex-col gap-4">
        <CarFormTextField
          label="Brand"
          register={register(`cars.${index}.brand`)}
        />
        <CarFormTextField
          label="Make"
          register={register(`cars.${index}.make`)}
        />
        <CarFormTextField
          label="Year"
          register={register(`cars.${index}.year`)}
        />
      </div>
    </Card>
  );
}

export default CarForm;
