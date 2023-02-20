import Box from "@mui/material/Box";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import React from "react";
import { Grid } from "@mui/material";
import DeleteModal from "../components/customers/DeleteModal";
import QrModal from "../components/customers/QrModal";
import EditModal from "../components/customers/EditModal";
import ViewModal from "../components/customers/ViewModal";
import AddMoneyModal from "../components/customers/AddMoneyModal";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface User {
  nombre: string;
  apellido: string;
  dni: string;
  mail: string;
  cel: string;
  pais: string;
  provincia: string;
  dinero: string;
  nacimiento: string;
}

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

  return (
    <>
      <Box sx={{ bgcolor: "red" }}>clients</Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
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
                key={user.mail}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{user.nombre + " " + user.apellido}</TableCell>
                <TableCell>{user.dni}</TableCell>
                <TableCell>{user.mail}</TableCell>
                <TableCell>{user.dinero}</TableCell>
                <TableCell>
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">

                    <DeleteModal></DeleteModal>
                    <QrModal></QrModal>
                    <EditModal></EditModal>
                    <ViewModal></ViewModal>
                    <AddMoneyModal></AddMoneyModal>

                  </Grid>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

