import React, { useContext, forwardRef, Ref, MouseEvent } from "react";
import { useList } from "../hooks/useList";
import { Modal } from "../../shared/Modal/Modal";
import { makeStyles } from "@material-ui/core/styles";
import { Catalog } from "../../../../presenters/Catalog/catalogVM";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import data from "../FactorConfig";
import { Table } from "./Table";
import { TableHead, TableHeadCell } from "./TableHead";
import { TableBody, TableRow, TableCell } from "./TableBody";
import { Filter } from "./TableFilter";
import { useFactors } from "../hooks/useFactors";

const modelStyle = makeStyles((theme) => {
  return {
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: "#3d3c40",
      border: "2px solid #3d3c40",
      borderRadius: "4px",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: "50%",
      left: "50%",
      transform: `translate(-24%, -50%)`,
    },
  };
});

const Dialogue = forwardRef(({}, ref?: Ref<HTMLDivElement>) => {
  const { dispatch, trackingFactor } = useContext(Catalog);
  const { handleFactorClick } = useFactors();
  const {
    showingItems,
    usefilterStateObj,
    paging,
    useSortedStateObj,
    stats,
  } = useList(data, {
    sortKey: "factorName",
    sortDir: "desc",
    filterKeys: ["factorName", "type"],
    pageSize: 10,
  });
  const style = modelStyle();

  return (
    <div ref={ref} className={style.paper}>
      <h2>Choose Key Factors to Track.</h2>
      <Filter
        value={usefilterStateObj.filteredText}
        onChange={usefilterStateObj.setFilterText}
      />
      <Table minWidth="100%">
        <TableHead {...useSortedStateObj}>
          <TableHeadCell id="">
            <Checkbox color="primary" />
          </TableHeadCell>
          <TableHeadCell id="factorName">Factor Name</TableHeadCell>
          <TableHeadCell id="type">Type Name</TableHeadCell>
        </TableHead>
        <TableBody>
          {showingItems.map((item) => {
            return (
              <TableRow key={item.id}>
                <TableCell>
                  <Checkbox color="primary" />
                </TableCell>
                <TableCell>{item.factorName}</TableCell>
                <TableCell>{item.type}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <form action="">
        <input
          type="checkbox"
          id="net_income"
          value="Net Income"
          onClick={handleFactorClick}
        ></input>
        <label htmlFor="net_income">Net Income</label>
      </form>
    </div>
  );
});

export const FactorModal = ({ ...rest }) => {
  return (
    <Modal>
      {(props) => {
        return <Dialogue {...props} {...rest}></Dialogue>;
      }}
    </Modal>
  );
};
