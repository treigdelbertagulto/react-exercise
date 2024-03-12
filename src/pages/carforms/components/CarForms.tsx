import CarForm from "./CarForm.tsx";
import { useContext } from "react";
import {
  CarsFieldArrayContext,
  CarsFormContext,
} from "@/pages/carforms/CarFormsPage.tsx";

export default function CarForms() {
  const { register } = useContext(CarsFormContext)!;
  const { fields } = useContext(CarsFieldArrayContext)!;

  return (
    <div className="flex flex-col p-2 gap-2 w-full items-center">
      {fields.map((field, index) => (
        <CarForm key={field.id} index={index} register={register} />
      ))}
    </div>
  );
}
