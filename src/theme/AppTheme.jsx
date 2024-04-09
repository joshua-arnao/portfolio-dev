import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/cor';

import { darkTheme } from './index';

export const AppTheme = ({ children }) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};
