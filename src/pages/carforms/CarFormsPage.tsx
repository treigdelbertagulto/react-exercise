import { useFieldArray, useForm } from "react-hook-form";
import CarForms from "./components/CarForms.tsx";
import { useState } from "react";
import CarsTopBar from "./components/CarsTopBar.tsx";
import CarsModal from "./components/CarsModal.tsx";
import CarsContainer from "./models/CarsContainer.ts";

export default function CarFormsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const emptyCar = {
    brand: "",
    make: "",
    year: "",
  };

  const { control, watch, register } = useForm<CarsContainer>({
    defaultValues: {
      cars: [emptyCar],
    },
  });
  const { fields, append } = useFieldArray<CarsContainer>({
    name: "cars",
    control: control,
  });

  return (
    <>
      <div className="flex flex-col">
        <CarsTopBar
          className="sticky top-0"
          onAdd={() => append(emptyCar)}
          onOpenModal={() => setModalOpen(true)}
        />
        <CarForms fields={fields} register={register} />
      </div>
      <CarsModal
        cars={watch("cars")}
        open={modalOpen}
        onModalOpenChange={setModalOpen}
      />
    </>
  );
}
