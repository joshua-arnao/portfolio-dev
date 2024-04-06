import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button'
import {
  Button,
  Avatar,
  Container,
  BottomNavigation,
  BottomNavigationAction
} from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  // const [value, setValue] = useState(0)
  // console.log('VALUE ->', value)
  // Lee el valor inicial del sessionStorage o usa 0 si no está presente
  const storedValue = sessionStorage.getItem('navBarValue') || 0;
  const [value, setValue] = useState(parseInt(storedValue, 10));

  // Actualiza el sessionStorage cuando cambia el valor
  useEffect(() => {
    sessionStorage.setItem('navBarValue', value);
  }, [value]);

  return (
    <Box
      sx={{ flexGrow: 1 }}
      position='fixed'
      style={{ width: '100%', zIndex: '2' }}
    >
      <AppBar
        position='static'
        style={{
          boxShadow: 'none',
          background: 'rgba(37, 37, 37, 0.50)',
          backdropFilter: 'blur(8px)',
          alignItems: 'center'
        }}
      >
        <Toolbar
          style={{ width: '768px', display: 'flex', padding: '0px 8px' }}
        >
          <Container
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              margin: '0px',
              padding: '0px'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Avatar
                src='/public/assets/photos/logojac.png'
                sx={{ width: 24, height: 24 }}
              />
              <Typography variant='h1' component='div'>
                Joshua Arnao C.
              </Typography>
            </Box>

            <Box sx={{ width: 300 }}>
              <BottomNavigation
                showLabels
                onChange={(e, newValue) => {
                  setValue(newValue);
                }}
                style={{
                  background: 'none',
                  color: '#fff',
                  display: 'flex',
                  justifyContent: 'flex-start'
                }}
              >
                <BottomNavigationAction
                  label='About'
                  style={
                    value === 0
                      ? {
                          background: '#88CCCA',
                          color: '#000',
                          padding: '0px'
                        }
                      : { background: 'none', color: '#fff' }
                  }
                  component={Link}
                  to='/'
                />

                <BottomNavigationAction
                  label='Projects'
                  style={
                    value === 1
                      ? { background: '#88CCCA', color: '#000' }
                      : { background: 'none', color: '#fff' }
                  }
                  component={Link}
                  to='/projects'
                />
              </BottomNavigation>
            </Box>
          </Container>

          <Button
            variant='contained'
            size='large'
            style={{
              boxShadow: 'none',
              background: '#FBD38D',
              color: '#000',
              paddingLeft: '33px'
            }}
            startIcon={
              <LightModeIcon style={{ width: '24px', marginRight: '0px' }} />
            }
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
