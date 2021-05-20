/* eslint-disable linebreak-style */
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

function createData(job, jobLevel, technology, locationType, city, status, description) {
  return {
    job,
    jobLevel,
    technology,
    locationType,
    city,
    status,
    description,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  // fetch data from database and create a new job for each job
  // return the list of jobs
  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.job}
        </TableCell>
        <TableCell align="right">{row.jobLevel}</TableCell>
        <TableCell align="right">{row.technology}</TableCell>
        <TableCell align="right">{row.locationType}</TableCell>
        <TableCell align="right">{row.city}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Description
              </Typography>
              <p>
                {row.description}
              </p>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    job: PropTypes.string.isRequired,
    jobLevel: PropTypes.string.isRequired,
    technology: PropTypes.string.isRequired,
    locationType: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData('Software Engineer - Google', 'Mid-level', 'Javascript', 'Remote', 'Los Angeles', 'Applied', 'Cool description'),
  createData('Software Engineer - Facebook', 'Mid-level', 'Javascript', 'Remote', 'Los Angeles', 'Applied', 'Cool description'),
  createData('Software Engineer - Amazon', 'Mid-level', 'Javascript', 'Remote', 'Los Angeles', 'Applied', 'Cool description'),
  createData('Software Engineer - Apple', 'Mid-level', 'Javascript', 'Remote', 'Los Angeles', 'Applied', 'Cool description'),
  createData('Software Engineer - Netflix', 'Mid-level', 'Javascript', 'Remote', 'Los Angeles', 'Applied', 'Cool description'),
];

// Component did mount for fetching data and populating rows
// componentDidMount() {
//   fetch()
// }
export default function JobListContainer() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Job</TableCell>
            <TableCell align="right">Job Level</TableCell>
            <TableCell align="right">Technology</TableCell>
            <TableCell align="right">Location Type</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.job} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
