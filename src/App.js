import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import datas from "./datas.json";

export default function BasicTable() {
  return (
    <div>
      <h1> All Banks</h1>

      <select className="dropdown">
        <option value="Select">Select</option>
        <option value="BankId">BankId</option>
        <option value="IFSC">IFSC</option>
        <option value="Branch">Branch</option>
        <option value="Address">Address</option>
      </select>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">
                <strong>BANK</strong>
              </TableCell>
              <TableCell align="right">
                <strong>IFSC</strong>
              </TableCell>
              <TableCell align="right">
                <strong>Branch</strong>
              </TableCell>
              <TableCell align="right">
                <strong>BRANCHID</strong>
              </TableCell>
              <TableCell align="right">
                <strong>ADDRESS</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas.map((datas, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
              >
                <TableCell align="right">{datas.Bank}</TableCell>
                <TableCell align="right">{datas.IFSC}</TableCell>
                <TableCell align="right">{datas.Branch}</TableCell>
                <TableCell align="right">{datas.BankId}</TableCell>
                <TableCell align="right">{datas.Address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
