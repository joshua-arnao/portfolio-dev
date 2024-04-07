import { Avatar, Box, Chip, Container, Stack, Typography } from '@mui/material';
import { Timeline } from '@mui/lab';
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import { Countdown, MyTimeLine } from '../components/index';

import PlaceIcon from '@mui/icons-material/Place';
import CakeIcon from '@mui/icons-material/Cake';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const skills = [
  'Product Designer',
  'Figma',
  'Adobe XD',
  'Notion',
  'Frontend',
  'React JS',
  'Analytics',
  'Excel',
  'IA Generativa'
];

const experiences = [
  { year: 2016, type: 'work', title: 'Analista de Mejora de proceso' },
  { year: 2018, type: 'work', title: 'Analista Six Sigma' },
  { year: 2019, type: 'study', title: 'Curso UX/UI' },
  { year: 2020, type: 'work', title: 'Analista UX/UI' },
  {
    year: 2021,
    type: 'study',
    title: 'Especialización UI',
    link: 'www.google.com'
  },
  {
    year: 2022,
    type: 'study',
    title: 'Desarrollo Web Fullstack',
    link: 'www.google.com'
  },
  { year: 2022, type: 'work', title: 'Product Designer' }
];

export const HomeView = () => {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '533px',
        border: '1px solid',
        padding: '24px',
        borderRadius: '20px',
        gap: '24px'
      }}
    >
      <Box display='flex' flexDirection='column' alignItems='center' gap='16px'>
        <Avatar
          alt='Joshua Arnao Canessa'
          src='/assets/photos/joshua-arnao.png'
          sx={{ width: 176, height: 176 }}
          style={{ border: '4px solid' }}
        />

        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          gap='8px'
        >
          <Typography variant='h2' component='div'>
            Joshua Arnao Canessa
          </Typography>
          <Typography component='div' style={{ textAlign: 'justify' }}>
            Diseñador de productos digitales con experiencia en metodología
            Agile, design thinking y CPS.{' '}
          </Typography>
          <Stack direction='row' justifyContent='flex-start' spacing={0.5}>
            <Chip
              icon={<PlaceIcon />}
              label='Lima, Perú'
              style={{ color: '#858E96', fontSize: '14px' }}
            />
            <Chip
              icon={<CakeIcon />}
              label='28 de Junio'
              style={{ color: '#858E96', fontSize: '14px' }}
            />
            <Chip
              icon={<EmailIcon />}
              label='joshua.arnao@icloud.com'
              style={{ color: '#858E96', fontSize: '14px' }}
            />
          </Stack>

          <Countdown />
        </Box>
      </Box>

      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div' width='100%'>
          About
        </Typography>

        <Typography component='div' style={{ textAlign: 'justify' }}>
          Soy un apasionado Diseñador de Productos Digitales con un deseo
          constante de innovar y mejorar. Siempre estoy buscando nuevas formas
          de combinar la creatividad, la eficiencia y la mejora en la
          experiencia del usuario.{''}
          Mi formación en ingeniería industrial y mi amplia experiencia en
          diseño me han inculcado la importancia de encontrar el equilibrio
          entre la estética y la funcionalidad. Mi misión es crear experiencias
          digitales que no solo atraigan visualmente, sino que también
          solucionen problemas reales. Con un enfoque metódico y una pasión
          incansable por el aprendizaje, abordo los desafíos con eficacia y
          desvelo soluciones innovadoras.
        </Typography>
      </Box>

      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div' width='100%'>
          Skills and Tolls
        </Typography>

        <Stack direction='row' spacing={1} useFlexGap flexWrap='wrap'>
          {skills.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              style={{ backgroundColor: '#FFF' }}
            />
          ))}
        </Stack>
      </Box>

      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div' width='100%'>
          Experience
        </Typography>

        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0
            }
          }}
        >
          {experiences.map((experience, index) => (
            <MyTimeLine experience={experience} key={index} />
          ))}
        </Timeline>
      </Box>

      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div' width='100%'>
          Links
        </Typography>

        <Stack direction='row' spacing={1}>
          <LinkedInIcon />
          <GitHubIcon />
        </Stack>
      </Box>
    </Container>
  );
};
