import React from "react";

import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Tooltip, Button, Modal, Typography, TextField } from "@mui/material";
import { User } from "../../interfaces/interfaces";

export default function ViewComponent(usuario: User) {

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
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Ver usuario {nombre + " " + apellido}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}