import React from "react";
import MuiTableHead from "@material-ui/core/TableHead";
import MuiTableRow from "@material-ui/core/TableRow";
import MuiTableSortLabel from "@material-ui/core/TableSortLabel";
import MuiTableCell from "@material-ui/core/TableCell";

export const TableHead = ({ sortKey, sortDir, onSort, children, ...props }) => {
  const isSorting = sortDir && sortKey && onSort ? true : false;
  const headers = !isSorting
    ? children
    : React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          onSort,
          sortDir: child.props.id === sortKey ? sortDir : false,
          sortable: !isSorting ? false : child.props.sortable,
        });
      });
  return (
    <MuiTableHead {...props}>
      <MuiTableRow>{headers}</MuiTableRow>
    </MuiTableHead>
  );
};

export const TableHeadCell = ({ id, children, sortable, onSort, sortDir }) => {
  const canSort = onSort && sortable;
  return (
    <MuiTableCell key={id}>
      {canSort ? (
        <MuiTableSortLabel active={!!sortDir} direction={sortDir || "asc"}>
          {children}
          {canSort ? (
            <span>
              {sortDir === "desc" ? "sorted descending" : "sorted ascending"}
            </span>
          ) : null}
        </MuiTableSortLabel>
      ) : (
        children
      )}
    </MuiTableCell>
  );
};
