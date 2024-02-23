import { IconButton, Stack, Typography } from "@mui/material";
import { AddTwoTone, LaunchTwoTone } from "@mui/icons-material";

interface Props {
  onAdd: () => void;
  onOpenModal: () => void;
}

export default function CarsTopBar({ onAdd, onOpenModal }: Props) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      width="1"
      padding={2}
      boxSizing="border-box"
    >
      <Typography variant="h6" sx={{ width: 1 }}>
        Cars
      </Typography>
      <IconButton onClick={onOpenModal}>
        <LaunchTwoTone />
      </IconButton>
      <IconButton onClick={onAdd}>
        <AddTwoTone />
      </IconButton>
    </Stack>
  );
}
