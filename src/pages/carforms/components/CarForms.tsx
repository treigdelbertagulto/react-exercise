import { Stack } from "@mui/material";
import CarForm from "./CarForm.tsx";
import {
  FieldArrayWithId,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import CarsContainer from "../models/CarsContainer.ts";

interface Props {
  fields: FieldArrayWithId<CarsContainer, "cars">[];
  watch: UseFormWatch<CarsContainer>;
  register: UseFormRegister<CarsContainer>;
}

export default function CarForms({ fields, watch, register }: Props) {
  return (
    <Stack
      direction="column"
      padding={2}
      gap={2}
      width={1}
      alignItems="center"
      boxSizing="border-box"
    >
      {fields.map((field, index) => (
        <CarForm
          key={field.id}
          values={watch(`cars.${index}`)}
          index={index}
          register={register}
        />
      ))}
    </Stack>
  );
}
