import { isBlank } from "../models/Car.ts";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog.tsx";
import { P } from "@/components/ui/typography.tsx";
import { useContext } from "react";
import {
  CarsFormContext,
  ModalOpenContext,
} from "@/pages/carforms/CarFormsPage.tsx";

export default function CarsModal() {
  const { watch } = useContext(CarsFormContext)!;
  const [open, setOpen] = useContext(ModalOpenContext)!;
  const cars = watch("cars");
  const closeModal = () => setOpen(false);

  console.log(cars.filter((car) => !isBlank(car)));

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Registered cars</AlertDialogTitle>
          <AlertDialogDescription>
            <P>
              {cars.filter((car) => !isBlank(car)).length > 0 ? (
                cars.map((car) => (
                  <div>
                    {car.year} {car.brand} {car.make}
                  </div>
                ))
              ) : (
                <div>No registered cars</div>
              )}
            </P>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={closeModal}>Close</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
