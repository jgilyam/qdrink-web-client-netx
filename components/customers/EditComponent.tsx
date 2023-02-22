import React, { useState } from "react";

import EditIcon from '@mui/icons-material/Edit';
import { Box, Tooltip, Button, Modal, Typography, TextField } from "@mui/material";
import { User } from "../../interfaces/interfaces";

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
        nacimiento: usuario.nacimiento
    });

    const handleFormEdit = ( { target } : React.ChangeEvent<HTMLInputElement> ) =>{
        const {name , value} = target;
        setFormulario({...formulario , [name]: value});
    }


    const [openEdit, setOpenEdit] = useState(false);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);

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

    const { nombre , apellido, dni, mail, cel, pais, provincia, dinero, nacimiento } = formulario;

    return (
        <div>
            <Tooltip title="Editar" arrow>
                <Button onClick={handleOpenEdit}><EditIcon /></Button>
            </Tooltip>
            <Modal
                open={openEdit}
                onClose={handleCloseEdit}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box component="form" sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" color="#FF5F00" mb={3} fontWeight="bold">
                        Editar usuario
                    </Typography>
                    <TextField
                        id="Nombre"
                        label="Nombre"
                        name="nombre"
                        value={nombre}
                        onChange={handleFormEdit}
                    />
                    <TextField
                        id="Apellido"
                        label="Apellido"
                        name="apellido"
                        value={apellido}
                        onChange={handleFormEdit}
                    />
                    <TextField
                        id="DNI"
                        label="DNI"
                        name="dni"
                        value={dni}
                        onChange={handleFormEdit}
                    />
                    <TextField
                        id="FechaNacimiento"
                        label="Fecha de nacimiento"
                        name="nacimiento"
                        value={nacimiento}
                        onChange={handleFormEdit}
                    />
                    <TextField
                        id="Pais"
                        label="Pais"
                        name="pais"
                        value={pais}
                        onChange={handleFormEdit}
                    />
                    <TextField
                        id="Provincia"
                        label="Provincia"
                        name="provincia"
                        value={provincia}
                        onChange={handleFormEdit}
                    />
                    <TextField
                        id="Celular"
                        label="Celular"
                        name="cel"
                        value={cel}
                        onChange={handleFormEdit}
                    />
                    <TextField
                        id="Email"
                        label="Email"
                        name="mail"
                        value={mail}
                        onChange={handleFormEdit}
                    />
                    <Button type="submit" variant="contained">Editar</Button>
                </Box>
            </Modal>
        </div>
    );
}