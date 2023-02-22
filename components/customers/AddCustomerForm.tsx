import { Box, Button, Container, Grid, Stack, TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment, { Moment } from "moment";
import { useState } from "react";

export const AddCustomerForm = () => {
  const [value, setValue] = useState<Moment | null>(
    moment("2023-02-18T21:11:54")
  );

  const handleChange = (newValue: Moment | null) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField id="name" label="Nombre" required fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField id="lastName" label="Apellido" required fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{ flexGrow: 1 }}
            id="email"
            label="e-mail"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField id="phone" label="Teléfono" required fullWidth />
        </Grid>
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DesktopDatePicker
              label="Fecha de Naciomiento"
              inputFormat="DD/MM/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </>
  );
};
