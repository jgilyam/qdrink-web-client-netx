import React from "react";

import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Tooltip, Button, Modal, Typography, TextField } from "@mui/material";
import { User } from "../../interfaces/interfaces";

export default function ViewModal(usuario: User) {

    const [openView, setOpenView] = React.useState(false);
    const handleOpenView = () => setOpenView(true);
    const handleCloseView = () => setOpenView(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        // bgcolor: "#FF5F00",
        bgcolor: "black",
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    const { nombre , apellido, dni, mail, cel, pais, provincia, dinero, nacimiento } = usuario;

    return (
        <div>
            <Tooltip title="Ver" arrow>
                <Button onClick={handleOpenView}><VisibilityIcon /></Button>
            </Tooltip>
            <Modal
                open={openView}
                onClose={handleCloseView}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box component="form" sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" color="#FF5F00" mb={3} fontWeight="bold">
                        Datos completos del usuario
                    </Typography>
                    <TextField
                        id="Nombre"
                        label="Nombre"
                        value={nombre}
                        InputProps={{
                            readOnly: true,
                          }}
                    />
                     <TextField
                        id="Apellido"
                        label="Apellido"
                        value={apellido}
                        InputProps={{
                            readOnly: true,
                          }}
                    />
                     <TextField
                        id="DNI"
                        label="DNI"
                        value={dni}
                        InputProps={{
                            readOnly: true,
                          }}
                    />
                    <TextField
                        id="FechaNacimiento"
                        label="Fecha de nacimiento"
                        value={nacimiento}
                        InputProps={{
                            readOnly: true,
                          }}
                    />
                    <TextField
                        id="Pais"
                        label="Pais"
                        value={pais}
                        InputProps={{
                            readOnly: true,
                          }}
                    />
                    <TextField
                        id="Provincia"
                        label="Provincia"
                        value={provincia}
                        InputProps={{
                            readOnly: true,
                          }}
                    />
                    <TextField
                        id="Celular"
                        label="Celular"
                        value={cel}
                        InputProps={{
                            readOnly: true,
                          }}
                    />
                    <TextField
                        id="Email"
                        label="Email"
                        value={mail}
                        InputProps={{
                            readOnly: true,
                          }}
                    />
                     <TextField
                        id="Dinero"
                        label="Dinero"
                        value={`$ ${dinero}`}
                        InputProps={{
                            readOnly: true,
                          }}
                    />
                </Box>
            </Modal>
        </div>
    );
}