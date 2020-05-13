import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './config/theme';

import MainRouter from './modules/main/MainRouter';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainRouter />
    </ThemeProvider>
  );
}

export default App;
