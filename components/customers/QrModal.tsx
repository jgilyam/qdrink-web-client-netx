import { useState } from "react";

import QrCodeIcon from "@mui/icons-material/QrCode";
import {
  Box,
  Tooltip,
  Modal,
  Typography,
  IconButton,
} from "@mui/material";
import { User } from "../../interfaces/interfaces";

export default function QrModal(usuario: User) {
  const [openQr, setOpenQr] = useState(false);
  const handleOpenQr = () => setOpenQr(true);
  const handleCloseQr = () => setOpenQr(false);

  const { nombre, apellido, cel } = usuario;

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Tooltip title="Enviar QR" arrow>
        <IconButton onClick={handleOpenQr}>
          <QrCodeIcon fontSize="small" color="primary" />
        </IconButton>
      </Tooltip>
      <Modal
        open={openQr}
        onClose={handleCloseQr}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enviar código QR a {nombre + " " + apellido}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Su N° de celular es {cel}.
          </Typography>
        </Box>
      </Modal>
    </>
  );
}