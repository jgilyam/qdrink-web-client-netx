import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { AddCustomerForm } from "../components/customers/AddCustomerForm";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import React from "react";
import { Stack } from "@mui/material";
import DeleteModal from "../components/customers/DeleteComponent";
import QrModal from "../components/customers/QrComponent";
import EditModal from "../components/customers/EditComponent";
import ViewModal from "../components/customers/ViewComponent";
import AddMoneyModal from "../components/customers/AddMoneyComponent";
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
  }];








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
      <Box sx={{ bgcolor: "red" }}>clients</Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ bgcolor: "gray" }}>
              <TableCell>Nombre y Apellido</TableCell>
              <TableCell>DNI</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Dinero</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                hover={true}
                key={user.mail}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{user.nombre + " " + user.apellido}</TableCell>
                <TableCell>{user.dni}</TableCell>
                <TableCell>{user.mail}</TableCell>
                <TableCell>{user.dinero}</TableCell>
                <TableCell>
                  <Stack direction="row" justifyContent="center" alignItems="center">
                    <QrModal {...user}></QrModal>
                    <AddMoneyModal {...user}></AddMoneyModal>
                    <ViewModal {...user}></ViewModal>
                    <EditModal {...user}></EditModal>
                    <DeleteModal></DeleteModal>
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

