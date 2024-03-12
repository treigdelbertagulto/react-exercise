import { H4 } from "@/components/ui/typography.tsx";
import { Button } from "@/components/ui/button.tsx";
import { AddTwoTone, LaunchTwoTone } from "@mui/icons-material";
import { cn } from "@/lib/utils.ts";
import { useContext } from "react";
import {
  CarsFieldArrayContext,
  ModalOpenContext,
} from "@/pages/carforms/CarFormsPage.tsx";
import { emptyCar } from "@/pages/carforms/models/Car.ts";

interface Props {
  className?: string;
}

export default function CarsTopBar({ className }: Props) {
  const { append } = useContext(CarsFieldArrayContext)!;
  const setModalOpen = useContext(ModalOpenContext)![1];

  const openModal = () => setModalOpen(true);
  const onAdd = () => append(emptyCar);

  return (
    <div
      className={cn("flex items-center w-full p-4 gap-2 bg-white", className)}
    >
      <H4 className="w-full">Cars</H4>
      <Button variant="outline" size="icon" onClick={openModal}>
        <LaunchTwoTone />
      </Button>
      <Button variant="default" size="icon" onClick={onAdd}>
        <AddTwoTone />
      </Button>
    </div>
  );
}
