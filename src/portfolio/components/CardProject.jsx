import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import { useState } from 'react';

export const CardProject = ({ project }) => {
  const { title, description, imgCard, tools } = project;

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Grid
      container
      columnSpacing={2}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={
        isHover === false
          ? {
              width: '533px',
              border: '1px solid rgb(255,255,255)',
              padding: '20px 24px',
              borderRadius: '20px',
              color: 'rgb(255,255,255)',
              transition: 'background-color 0.3s ease'
            }
          : {
              width: '533px',
              border: '1px solid rgb(255,255,255)',
              padding: '20px 24px',
              borderRadius: '20px',
              color: 'rgb(255,255,255)',
              transition: 'background-color 0.3s ease',
              backgroundColor: 'rgb(255, 255, 255, 0.05)',
              cursor: 'pointer'
            }
      }
    >
      <Grid xs={6} style={{ width: '242px', height: '192px' }}>
        <img
          src={imgCard}
          alt='project'
          style={{ width: '242px', height: '192px', borderRadius: '10px' }}
        />
      </Grid>

      <Grid
        item
        xs={6}
        gap='8px'
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        id='prueba'
      >
        <Box>
          <Typography variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' component='div'>
            {description}
          </Typography>
        </Box>
        <Stack direction='row' spacing={1} useFlexGap flexWrap='wrap'>
          {tools.map((tool, index) => (
            <Chip
              key={index}
              label={tool}
              style={{ backgroundColor: '#FFF' }}
            />
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};
