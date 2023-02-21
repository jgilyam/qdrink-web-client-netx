import { Button, Modal, Typography, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { AddCustomerForm } from "../components/customers/AddCustomerForm";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Alta de usuario
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <AddCustomerForm></AddCustomerForm>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
