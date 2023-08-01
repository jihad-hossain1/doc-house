import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
const DatePickers = () => {
  const [value, setValue] = useState(null);
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Select Date"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(props) => <TextField {...props}></TextField>}
        ></DatePicker>
      </LocalizationProvider>
    </div>
  );
};

export default DatePickers;
