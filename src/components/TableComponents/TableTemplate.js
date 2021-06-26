import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


const columns = [
  { id: 'name', label: 'Live Session Name', minWidth: 170 },
  { id: 'code', label: 'Session Date and Time', minWidth: 100 },
  
];

function createData(name, code) {
  
  return { name, code};
}
// const code = ()=>{
// //<NavLink to="/videodisplay">Video Display Page</NavLink>
//   return  'Click Here';
// };

const rows = [

  createData('Market Feasibility Study', '12 June 2021, 3pm'),
  createData('Market Feasibility Study', '12 June 2021, 3pm'),
  createData('Market Feasibility Study', '12 June 2021, 3pm'),
  createData('Market Feasibility Study', '12 June 2021, 3pm'),
  createData('Market Feasibility Study', '12 June 2021, 3pm'),
  createData('Market Feasibility Study', '12 June 2021, 3pm'),
  createData('Market Feasibility Study', '12 June 2021, 3pm'),
  createData('Market Feasibility Study', '12 June 2021, 3pm'),
  createData('Market Feasibility Study', '12 June 2021, 3pm'),
  createData('Market Feasibility Study', '12 June 2021, 3pm'),
  createData('Market Feasibility Study', '12 June 2021, 3pm'),
  createData('Market Feasibility Study', '12 June 2021, 3pm'),
  createData('Market Feasibility Study', '12 June 2021, 3pm'),
  createData('Market Feasibility Study', '12 June 2021, 3pm'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleRowClick = () => {
    props.history.push("/videodisplay");
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} onClick={handleRowClick}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
