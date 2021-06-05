import React from "react";
import TextField from "@material-ui/core/TextField";

export const Filter = ({ onChange, value }) => {
  return (
    <TextField
      placeholder="Search..."
      inputProps={{
        "aria-label": "search table rows",
      }}
      variant="outlined"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
