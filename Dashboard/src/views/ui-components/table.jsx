import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: '9131313221', customerId: 'Axis Bank', amount: 'Civil Lines,New Delhi',  },
      
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="centre">{row.calories}</TableCell>
        <TableCell align="centre">{row.fat}</TableCell>
        <TableCell align="centre">{row.carbs}</TableCell>
        <TableCell align="centre">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Bank Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    
                    <TableCell>Account Number</TableCell>
                    <TableCell>Bank Name</TableCell>
                    <TableCell>Bank Address</TableCell>
                    <TableCell>IFSC Code</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Aditya Singh', 209301000, 'Btech CSE', <td>
  <input type="text" />                        
  </td>,<td><input type="radio" value="YES" name="designation" display ="flex" />
  <label for="YES">YES</label><p> </p>
  <input type="radio" value="NO" name="designation" />
  <label for="NO">NO</label></td>,),
  createData('Prakher Martand', 209301002, 'Btech IT', <td>
  <input type="text" />                        
  </td>, <td><input type="radio" value="YES" name="designation" display ="flex" />
  <label for="YES">YES</label><p> </p>
  <input type="radio" value="NO" name="designation" />
  <label for="NO">NO</label></td>),
  createData('Rohan Kulkarni', 209301003, 'BSC Physics', <td>
  <input type="text" />                        
  </td>, <td><input type="radio" value="YES" name="designation" />
  <label for="YES">YES</label><p> </p>
  <input type="radio" value="NO" name="designation" />
  <label for="NO">NO</label></td>),
  createData('Piyush Singh', 209301004, 'Btech IT', <td>
  <input type="text" />                        
  </td>, <td><input type="radio" value="YES" name="designation" />
  <label for="YES">YES</label><p> </p>
  <input type="radio" value="NO" name="designation" />
  <label for="NO">NO</label></td>,<td><input type="submit" value="Send Request" />saxa</td>), 

  
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell >Student Name</TableCell>
            <TableCell align="left">Reg No.</TableCell>
            <TableCell align="left">Course</TableCell>
            <TableCell align="left">Remark</TableCell>
            <TableCell align="left">Approve</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
    
  );
}


