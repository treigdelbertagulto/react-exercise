import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { Card, Stack, TextField } from "@mui/material";
import Car from "../models/Car.ts";
import CarsContainer from "../models/CarsContainer.ts";

interface CarFormTextFieldProps {
  label: string;
  register: UseFormRegisterReturn<string>;
  error?: string;
}

function CarFormTextField({ label, register, error }: CarFormTextFieldProps) {
  return (
    <TextField
      variant="filled"
      error={error != undefined}
      label={label}
      {...register}
      helperText={error}
    />
  );
}

interface CarFormProps {
  values: Car;
  index: number;
  register: UseFormRegister<CarsContainer>;
}

function CarForm({ values, index, register }: CarFormProps) {
  return (
    <Card variant="outlined" sx={{ padding: 2, maxWidth: 600, width: 1 }}>
      <Stack spacing={2}>
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
          error={
            !isNaN(parseInt(values.year)) || values.year === ""
              ? undefined
              : "Invalid year"
          }
        />
      </Stack>
    </Card>
  );
}

export default CarForm;
