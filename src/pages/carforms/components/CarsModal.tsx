import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import Car, { isBlank } from "../models/Car.ts";

interface Props {
  cars: Car[];
  open: boolean;
  onClose: () => void;
}

export default function CarsModal({ cars, open, onClose }: Props) {
  console.log(cars.filter((car) => !isBlank(car)));

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Registered Cars</DialogTitle>
      <DialogContent>
        {cars.filter((car) => !isBlank(car)).length > 0 ? (
          cars.map((car) => (
            <Typography>
              {car.year} {car.brand} {car.make}
            </Typography>
          ))
        ) : (
          <Typography>No registered cars</Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
