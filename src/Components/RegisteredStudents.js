import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(usn, name, email, phone, branch, registered) {
  return { usn, name, email, phone, branch, registered };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24,'ISE', 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 'ISE', 4.3),
  createData('Eclair', 262, 16.0, 24, 'ISE', 6.0),
  createData('Cupcake', 305, 3.7, 67, 'ISE', 4.3),
  createData('Gingerbread', 356, 16.0, 49, 'ISE', 3.9),
];

export default function RegisteredStudents() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>USN</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Branch</TableCell>
            <TableCell align="center">Registered On</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.usn}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">{row.branch}</TableCell>
              <TableCell align="center">{row.registered}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
