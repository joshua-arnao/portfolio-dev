import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import { AppTheme, darkTheme, lightTheme } from './theme';
import { PortfolioRoutes } from './portfolio/routes/PortfolioRoutes';
import { useState } from 'react';

export const PortfolioApp = () => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === darkTheme ? lightTheme : darkTheme);
  };

  return (
    <AppTheme theme={currentTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: 'primary.main',
          color: 'secondary.main'
        }}
      >
        <PortfolioRoutes
          toggleTheme={toggleTheme}
          currentTheme={currentTheme}
        />
      </Box>
    </AppTheme>
  );
};
