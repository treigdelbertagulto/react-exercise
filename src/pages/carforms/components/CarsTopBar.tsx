import { H4 } from "@/components/ui/typography.tsx";
import { Button } from "@/components/ui/button.tsx";
import { AddTwoTone, LaunchTwoTone } from "@mui/icons-material";
import { cn } from "@/lib/utils.ts";

interface Props {
  className?: string;
  onAdd: () => void;
  onOpenModal: () => void;
}

export default function CarsTopBar({ className, onAdd, onOpenModal }: Props) {
  return (
    <div
      className={cn("flex items-center w-full p-4 gap-2 bg-white", className)}
    >
      <H4 className="w-full">Cars</H4>
      <Button variant="outline" size="icon" onClick={onOpenModal}>
        <LaunchTwoTone />
      </Button>
      <Button variant="default" size="icon" onClick={onAdd}>
        <AddTwoTone />
      </Button>
    </div>
  );
}
