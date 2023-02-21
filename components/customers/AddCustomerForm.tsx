import { Box, Button, TextField } from "@mui/material";
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
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="name" label="Nombre" required />
      <TextField id="lastName" label="Apellido" required />
      <TextField id="dni" label="DNI" />
      <TextField
        id="email"
        label="e-mail"
        required
        error
        helperText="Incorrect entry."
      />
      <TextField id="phone" label="Teléfono" required />
      <TextField id="country" label="Pais" />
      <TextField id="province" label="Provicia" />
      <TextField id="location" label="Localidad" />

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DesktopDatePicker
          label="Fecha de Naciomiento"
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Box>
        <Button variant="contained">Guardar</Button>
        <Button variant="contained">Cancelar</Button>
      </Box>
    </Box>
  );
};
