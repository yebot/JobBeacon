/* eslint-disable linebreak-style */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1.5),
    minWidth: 120,
  },
  filterButton: {
    margin: theme.spacing(1.5),
    marginTop: 25,
  },
}));

export default function Filters() {
  const classes = useStyles();
  const [jobType, setJobType] = React.useState('');
  const [jobLevel, setJobLevel] = React.useState('');
  const [technology, setTechnology] = React.useState('');
  const [locationType, setLocationType] = React.useState('');
  const [city, setCity] = React.useState('');
  const [status, setStatus] = React.useState('');

  return (
    <div id="FilterContainer">
      <FormControl className={classes.formControl}>
        <InputLabel id="Job-Type">Job</InputLabel>
        <Select
          labelId="Job-Type"
          id="_jobType"
          value={jobType}
          onChange={(event) => setJobType(event.target.value)}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Full-Time">Full-Time</MenuItem>
          <MenuItem value="Part-Time">Part-Time</MenuItem>
          <MenuItem value="Contract">Contract</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="Job-Level">Job Level</InputLabel>
        <Select
          labelId="Job-Level"
          id="_jobLevel"
          value={jobLevel}
          onChange={(event) => setJobLevel(event.target.value)}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Junior">Junior</MenuItem>
          <MenuItem value="Mid-Level">Mid-Level</MenuItem>
          <MenuItem value="Senior">Senior</MenuItem>
          <MenuItem value="Staff">Staff</MenuItem>
          <MenuItem value="CTO">CTO</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="Technology">Technology</InputLabel>
        <Select
          labelId="Technology"
          id="_technology"
          value={technology}
          onChange={(event) => setTechnology(event.target.value)}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Javascript">Javascript</MenuItem>
          <MenuItem value="React">React</MenuItem>
          <MenuItem value="Node">Node</MenuItem>
          <MenuItem value="Express">Node</MenuItem>
          <MenuItem value="SQL">SQL</MenuItem>
          <MenuItem value="MongoDB">MongoDB</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="Location-Type">Location Type</InputLabel>
        <Select
          labelId="Location-Type"
          id="_locationType"
          value={locationType}
          onChange={(event) => setLocationType(event.target.value)}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="In-Person">In-Person</MenuItem>
          <MenuItem value="Remote">Remote</MenuItem>
          <MenuItem value="Hybrid">Hybrid</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="City">City</InputLabel>
        <Select
          labelId="City"
          id="_city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Los Angeles">Los Angeles</MenuItem>
          <MenuItem value="New York">New York</MenuItem>
          <MenuItem value="San Diego">San Diego</MenuItem>
          <MenuItem value="San Francisco">San Francisco</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="Status">Status</InputLabel>
        <Select
          labelId="Status"
          id="_status"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Applied">Applied</MenuItem>
          <MenuItem value="Interviewing">Interviewing</MenuItem>
          <MenuItem value="Denied">Denied</MenuItem>
        </Select>
      </FormControl>
      <Button className={classes.filterButton} variant="contained" color="default">
        Filter
      </Button>
    </div>
  );
}
