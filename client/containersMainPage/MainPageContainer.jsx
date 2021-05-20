/* eslint-disable linebreak-style */
import React from 'react';
import Button from '@material-ui/core/Button';
import FilterContainer from './FilterContainer';
import JobListContainer from './JobListContainer';
import { PageContext } from '../App';
// main container to be used in pages

export default function MainPageContainer() {
  const { setPage } = React.useContext(PageContext);
  return (
    <main>
      <header>
        <h1 id="heading">
          Job Beacon
        </h1>
      </header>
      <FilterContainer />
      <div>
        <Button variant="contained" color="primary" onClick={() => setPage('create')}>
          Add Job
        </Button>
      </div>
      <JobListContainer />
    </main>
  );
}
