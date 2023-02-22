import React from "react";

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Box, Tooltip, Button, Modal, Typography } from "@mui/material";
import { User } from "../../interfaces/interfaces";


export default function AddMoneyModal(usuario: User) {

    const [openMoney, setOpenMoney] = React.useState(false);
    const handleOpenMoney = () => setOpenMoney(true);
    const handleCloseMoney = () => setOpenMoney(false);

    const { nombre , apellido, dinero } = usuario;

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

    return (
        <div>
            <Tooltip title="Agregar dinero" arrow>
                <Button onClick={handleOpenMoney}><AttachMoneyIcon /></Button>
            </Tooltip>
            <Modal
                open={openMoney}
                onClose={handleCloseMoney}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        ¿Desea agregar dinero a {nombre + " " + apellido}?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Su saldo actual es de ${dinero}.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}