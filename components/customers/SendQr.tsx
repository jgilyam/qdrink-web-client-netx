import { useState } from "react";

import QrCodeIcon from "@mui/icons-material/QrCode";
import {
  Box,
  Tooltip,
  Modal,
  Typography,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Avatar,
} from "@mui/material";
import { User } from "../../interfaces/interfaces";

export default function QrModal(usuario: User) {
  const [openQr, setOpenQr] = useState(false);
  const handleOpenQr = () => setOpenQr(true);
  const handleCloseQr = () => setOpenQr(false);

  const { nombre, apellido, cel } = usuario;

  return (
    <>
      <Tooltip title="Enviar QR" arrow>
        <IconButton onClick={handleOpenQr}>
          <QrCodeIcon fontSize="small" color="primary" />
        </IconButton>
      </Tooltip>
      <Dialog open={openQr} onClose={handleCloseQr}>
        <DialogTitle>Enviar Qr</DialogTitle>
        <DialogContent>
          <Avatar src="images\favicon.png" alt="Imagen de perfil" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseQr}>Cancelar</Button>
          <Button onClick={handleCloseQr}>Enviar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
