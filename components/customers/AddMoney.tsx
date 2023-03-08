import React from "react";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
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
  Grid,
  TextField,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import { User } from "../../interfaces/interfaces";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

export default function AddMoneyModal(usuario: User) {
  const [openMoney, setOpenMoney] = React.useState(false);
  const handleOpenMoney = () => setOpenMoney(true);
  const handleCloseMoney = () => setOpenMoney(false);

  const { nombre, apellido, dinero } = usuario;

  return (
    <div>
      <Tooltip title="Agregar dinero" arrow>
        <IconButton onClick={handleOpenMoney}>
          <AttachMoneyIcon fontSize="small" color="primary" />
        </IconButton>
      </Tooltip>
      <Dialog open={openMoney} onClose={handleCloseMoney}>
        <DialogTitle>
          Agregar saldo a {nombre} {apellido}
        </DialogTitle>
        <DialogContent>
          <Grid container direction="column"  alignItems="center">
            <Grid item xs={2}>
              <FormControl  sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount" >
                  Cantidad
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label="Cantidad"
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormHelperText id="filled-weight-helper-text">
                El saldo actual es ${dinero}
              </FormHelperText>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseMoney}>Cancelar</Button>
          <Button onClick={handleCloseMoney}>Aceptar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
