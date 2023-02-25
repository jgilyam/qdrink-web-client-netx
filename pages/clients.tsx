import React from "react";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { AddCustomerForm } from "../components/customers/AddCustomerForm";
import CustomersTable from "../components/customers/CustomersTable";

export default function ClientsPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        color="primary"
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleOpen}
      >
        Agregar usuario
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Agregar nuevo usuario</DialogTitle>
        <DialogContent>
          <AddCustomerForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Guardar</Button>
        </DialogActions>
      </Dialog>

      <CustomersTable></CustomersTable>
    </>
  );
}
