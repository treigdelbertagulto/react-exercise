import {
  useFieldArray,
  UseFieldArrayReturn,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import CarForms from "./components/CarForms.tsx";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import CarsTopBar from "./components/CarsTopBar.tsx";
import CarsModal from "./components/CarsModal.tsx";
import CarsContainer from "./models/CarsContainer.ts";
import { emptyCar } from "@/pages/carforms/models/Car.ts";

export const CarsFormContext = createContext<
  UseFormReturn<CarsContainer> | undefined
>(undefined);

export const CarsFieldArrayContext = createContext<
  UseFieldArrayReturn<CarsContainer> | undefined
>(undefined);

export const ModalOpenContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>] | undefined
>(undefined);

export default function CarFormsPage() {
  const modalOpenState = useState(false);

  const carsForm = useForm<CarsContainer>({
    defaultValues: {
      cars: [emptyCar],
    },
  });

  const carsFieldArray = useFieldArray<CarsContainer>({
    name: "cars",
    control: carsForm.control,
  });

  return (
    <CarsFormContext.Provider value={carsForm}>
      <CarsFieldArrayContext.Provider value={carsFieldArray}>
        <ModalOpenContext.Provider value={modalOpenState}>
          <div className="flex flex-col">
            <CarsTopBar className="sticky top-0" />
            <CarForms />
          </div>
          <CarsModal />
        </ModalOpenContext.Provider>
      </CarsFieldArrayContext.Provider>
    </CarsFormContext.Provider>
  );
}
