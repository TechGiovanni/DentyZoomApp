import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/routes';
import './App.scss';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </div>
  );
};

export default App;
