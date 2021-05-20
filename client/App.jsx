/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable import/no-duplicates */
import React from 'react';
import MainPage from './pages/MainPage';
import CreatePage from './pages/CreatePage';

export const PageContext = React.createContext(null);
function App() {
  const [page, setPage] = React.useState('main');
  console.log('page: ', page);
  return (
    <PageContext.Provider value={{ page, setPage }}>
      {page === 'main' && (
        <MainPage />
      )}
      {page === 'create' && (
        <CreatePage />
      )}
      {/* {page === 'view' && (
        <ViewPage />
      )} */}
    </PageContext.Provider>
  );
}

export default App;
