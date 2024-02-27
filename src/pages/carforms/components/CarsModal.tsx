import Car, { isBlank } from "../models/Car.ts";
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

interface Props {
  cars: Car[];
  open: boolean;
  onModalOpenChange: (newOpen: boolean) => void;
}

export default function CarsModal({ cars, open, onModalOpenChange }: Props) {
  console.log(cars.filter((car) => !isBlank(car)));

  return (
    <AlertDialog open={open} onOpenChange={onModalOpenChange}>
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
          <AlertDialogAction onClick={() => onModalOpenChange(false)}>
            Close
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
