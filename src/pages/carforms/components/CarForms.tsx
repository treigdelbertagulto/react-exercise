import CarForm from "./CarForm.tsx";
import { FieldArrayWithId, UseFormRegister } from "react-hook-form";
import CarsContainer from "../models/CarsContainer.ts";

interface Props {
  fields: FieldArrayWithId<CarsContainer, "cars">[];
  register: UseFormRegister<CarsContainer>;
}

export default function CarForms({ fields, register }: Props) {
  return (
    <div className="flex flex-col p-2 gap-2 w-full items-center">
      {fields.map((field, index) => (
        <CarForm key={field.id} index={index} register={register} />
      ))}
    </div>
  );
}
