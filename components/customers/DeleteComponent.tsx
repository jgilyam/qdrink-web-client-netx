import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Tooltip,
  Button,
  Modal,
  Typography,
  ListItemIcon,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { User } from "../../interfaces/interfaces";

export default function DeleteComponent(usuario: User) {
  const [openDelete, setOpenDelete] = React.useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);

  return (
    <>
      <MenuItem onClick={handleOpenDelete}>
        <ListItemIcon>
          <DeleteIcon fontSize="small" />
        </ListItemIcon>
        Eliminar
      </MenuItem>

      <Dialog open={openDelete} onClose={handleCloseDelete}>
        <DialogTitle>Eliminar usuario</DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>SI</Button>
          <Button onClick={handleCloseDelete}>NO</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
