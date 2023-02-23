import { useState } from "react";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
  Paper
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import { AddCustomerForm } from "../components/customers/AddCustomerForm";
import DeleteComponent from "../components/customers/DeleteComponent";
import QrComponent from "../components/customers/QrComponent";
import EditComponent from "../components/customers/EditComponent";
import ViewComponent from "../components/customers/ViewComponent";
import AddMoneyComponent from "../components/customers/AddMoneyComponent";

import { User } from "../interfaces/interfaces";

const users: User[] = [
  {
    nombre: "Jorge",
    apellido: "Garcia",
    dni: "34193612",
    mail: "jorge@gmail.com",
    cel: "155665964",
    pais: "Argentina",
    provincia: "San Juan",
    dinero: "100",
    nacimiento: "27/12/1988",
  },
  {
    nombre: "Lucas",
    apellido: "Garcia",
    dni: "36588230",
    mail: "lucas@gmail.com",
    cel: "155000000",
    pais: "Argentina",
    provincia: "San Juan",
    dinero: "200",
    nacimiento: "27/01/1992",
  },
];

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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: "gray" }}>
              <TableCell>Nombre y Apellido</TableCell>
              <TableCell>Celular</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Saldo</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                hover={true}
                key={user.mail}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.nombre + " " + user.apellido}
                </TableCell>
                <TableCell>{user.cel}</TableCell>
                <TableCell>{user.mail}</TableCell>
                <TableCell>{user.dinero}</TableCell>
                <TableCell>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <QrComponent {...user}></QrComponent>
                    <AddMoneyComponent {...user}></AddMoneyComponent>
                    {/* <ViewModal {...user}></ViewModal>
                    <EditModal {...user}></EditModal>
                    <DeleteModal></DeleteModal> */}
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
