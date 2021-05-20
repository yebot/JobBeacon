import React from 'react';
import Button from '@material-ui/core/Button';
import { PageContext } from '../App';

export default function CreateaPageContainer() {
  const { setPage } = React.useContext(PageContext);
  return (
    <main>
      <header>
        <h1 id="heading">
          Create Job
        </h1>
      </header>
      <div>
        <Button variant="contained" color="primary" onClick={() => setPage('main')}>
          Create Job
        </Button>
      </div>
    </main>
  );
}
