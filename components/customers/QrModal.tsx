import React from "react";

import QrCodeIcon from '@mui/icons-material/QrCode';
import { Box, Tooltip, Button, Modal, Typography } from "@mui/material";

export default function QrModal() {

    const [openQr, setOpenQr] = React.useState(false);
    const handleOpenQr = () => setOpenQr(true);
    const handleCloseQr = () => setOpenQr(false);

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
            <Tooltip title="Enviar QR" arrow>
                <Button onClick={handleOpenQr}><QrCodeIcon /></Button>
            </Tooltip>
            <Modal
                open={openQr}
                onClose={handleCloseQr}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal QR
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}