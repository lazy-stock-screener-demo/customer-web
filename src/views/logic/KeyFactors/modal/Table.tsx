import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import MuiTable from "@material-ui/core/Table";

export const Table = ({ children, minWidth }) => {
  return (
    <TableContainer>
      <MuiTable style={{ minWidth }}>{children}</MuiTable>
    </TableContainer>
  );
};
