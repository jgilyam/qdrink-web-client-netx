import { ChangeEventHandler, useState } from "react";

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
  Paper,
  Tooltip,
  IconButton,
  TablePagination,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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
  {
    nombre: "Renzo",
    apellido: "Masiero",
    dni: "34193613",
    mail: "renzo@gmail.com",
    cel: "155555555",
    pais: "Argentina",
    provincia: "San Juan",
    dinero: "200",
    nacimiento: "27/12/1988",
  },
  {
    nombre: "Diego",
    apellido: "Medel",
    dni: "34193614",
    mail: "diego@gmail.com",
    cel: "155666666",
    pais: "Argentina",
    provincia: "San Juan",
    dinero: "200",
    nacimiento: "28/09/1988",
  },
  {
    nombre: "Juan Pablo",
    apellido: "Gilyam",
    dni: "34193615",
    mail: "juanpablo@gmail.com",
    cel: "155777777",
    pais: "Argentina",
    provincia: "San Juan",
    dinero: "200",
    nacimiento: "08/11/1988",
  },
  {
    nombre: "Francisco",
    apellido: "Navas",
    dni: "34193616",
    mail: "francisco@gmail.com",
    cel: "155888888",
    pais: "Argentina",
    provincia: "San Juan",
    dinero: "200",
    nacimiento: "14/09/1988",
  },
  {
    nombre: "Alejandro",
    apellido: "Gonzalez",
    dni: "34193616",
    mail: "alejandro@gmail.com",
    cel: "155888888",
    pais: "Argentina",
    provincia: "San Juan",
    dinero: "200",
    nacimiento: "28/05/1983",
  },
  {
    nombre: "Josue",
    apellido: "Claro",
    dni: "34193617",
    mail: "josue@gmail.com",
    cel: "155999999",
    pais: "Argentina",
    provincia: "San Juan",
    dinero: "200",
    nacimiento: "30/10/1984",
  },
  {
    nombre: "Kevin",
    apellido: "Maratta",
    dni: "34193618",
    mail: "kevin@gmail.com",
    cel: "156000000",
    pais: "Argentina",
    provincia: "San Juan",
    dinero: "200",
    nacimiento: "07/02/1991",
  },
  {
    nombre: "Mauricio",
    apellido: "Raschi",
    dni: "34193618",
    mail: "mauri@gmail.com",
    cel: "156111111",
    pais: "Argentina",
    provincia: "San Juan",
    dinero: "200",
    nacimiento: "13/02/1988",
  },
  {
    nombre: "Ezequiel",
    apellido: "Vargas",
    dni: "34193619",
    mail: "eze@gmail.com",
    cel: "156222222",
    pais: "Argentina",
    provincia: "San Juan",
    dinero: "200",
    nacimiento: "27/02/1990",
  },
];

export default function ClientsPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
            {users.slice(page * rowsPerPage,page * rowsPerPage + rowsPerPage).map((user) => (
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
                    <Tooltip title="Más" arrow>
                      <IconButton>
                        <MoreVertIcon fontSize="small" color="primary" />
                      </IconButton>
                    </Tooltip>
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

      <TablePagination
        rowsPerPageOptions={[2, 4, 6]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
