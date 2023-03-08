import React, { useState } from "react";

import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Tooltip,
  Button,
  Modal,
  Typography,
  TextField,
  ListItemIcon,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { User } from "../../interfaces/interfaces";
import { AddCustomerForm } from "./AddCustomerForm";

export default function EditComponent(usuario: User) {
  const [formulario, setFormulario] = React.useState<User>({
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    dni: usuario.dni,
    mail: usuario.mail,
    cel: usuario.cel,
    pais: usuario.pais,
    provincia: usuario.provincia,
    dinero: usuario.dinero,
    nacimiento: usuario.nacimiento,
  });

  const handleFormEdit = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormulario({ ...formulario, [name]: value });
  };

  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const {
    nombre,
    apellido,
    dni,
    mail,
    cel,
    pais,
    provincia,
    dinero,
    nacimiento,
  } = formulario;

  return (
    <>
      <MenuItem onClick={handleOpenEdit}>
        <ListItemIcon>
          <EditIcon fontSize="small" />
        </ListItemIcon>
        Editar
      </MenuItem>

      <Dialog open={openEdit} onClose={handleCloseEdit}>
        <DialogTitle>Editar usuario</DialogTitle>
        <DialogContent>
          <AddCustomerForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Cancelar</Button>
          <Button onClick={handleCloseEdit}>Editar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
