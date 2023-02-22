import {
  Button,
  Modal,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { AddCustomerForm } from "../components/customers/AddCustomerForm";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ClientsPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="outlined" startIcon={<AddIcon />} onClick={handleOpen}>
        Agregar usuario
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Agregar nuevo usuario</DialogTitle>
        <DialogContent>
          <AddCustomerForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
