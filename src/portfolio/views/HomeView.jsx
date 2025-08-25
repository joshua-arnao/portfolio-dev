import {
  Avatar,
  Box,
  Chip,
  Container,
  Stack,
  Typography,
  Link,
} from '@mui/material';
import { Timeline } from '@mui/lab';
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import { MyTimeLine, ChipSkill, SkillTag } from '../components/index';

import PlaceIcon from '@mui/icons-material/Place';
import CakeIcon from '@mui/icons-material/Cake';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useSkills } from '../../hook/useSkills';
import { HashLoader } from 'react-spinners';
import { useExperiences } from '../../hook/useExperiences';

export const HomeView = ({ currentTheme }) => {
  const { skills, loading } = useSkills();
  const { experiences } = useExperiences();
  const { text, secondary } = currentTheme.palette;

  if (loading)
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <HashLoader size={40} color={secondary.main} />
        <Typography>Cargando...</Typography>
      </Box>
    );

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid',
        padding: '24px',
        borderRadius: '20px',
        gap: '24px',
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
          gap='24px'
          style={{ width: '100%' }}
        >
          <Box>
            <Typography variant='h2' component='div' textAlign='center'>
              Joshua Arnao Canessa
            </Typography>
            <Typography variant='subtitle1' component='div' textAlign='center'>
              FULL STACK DEVELOPER JR & AI ENTHUSIAST
            </Typography>
          </Box>

          <Typography
            component='div'
            textAlign='justify'
            sx={{ fontStyle: 'italic' }}
          >
            “Innovación tecnológica con propósito.”
          </Typography>

          <Stack
            direction='row'
            flex
            justifyContent='flex-start'
            // spacing={0.5}
            flexWrap='wrap'
            gap='8px'
            width='100%'
          >
            <Chip
              icon={<EmailIcon />}
              label='joshua.arnao@icloud.com'
              style={{ color: text.other, fontSize: '13px' }}
            />
            <Chip
              icon={<PlaceIcon />}
              label='Lima, Perú'
              style={{ color: text.other, fontSize: '13px' }}
            />
            <Chip
              icon={<CakeIcon />}
              label='28 de Junio'
              style={{ color: text.other, fontSize: '13px' }}
            />
          </Stack>
        </Box>
      </Box>

      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div'>
          About
        </Typography>

        <Typography component='div' textAlign='justify'>
          Soy Desarrollador Full Stack Jr con una sólida base en JavaScript,
          Java y Python, y un interés creciente en el campo de Inteligencia
          Artificial. Mi enfoque combina habilidades técnicas y pensamiento
          estratégico para crear soluciones digitales funcionales, escalables y
          alineadas a las necesidades del usuario y del negocio.
          <br />
          <br />
          Mi formación en Ingeniería Industrial y experiencia en diseño UX/UI me
          brindan una perspectiva integral: entiendo tanto la experiencia del
          usuario como la arquitectura técnica que la sostiene.
          <br />
          <br />
          He trabajado en proyectos que abarcan frontend, backend y APIs,
          aplicando buenas prácticas de programación, metodologías ágiles y
          entornos colaborativos. Tengo experiencia creando interfaces
          intuitivas, integraciones con bases de datos SQL/NoSQL, y modelos de
          IA básicos para optimizar procesos y agregar valor a los productos.
          <br />
          <br />
          Manejo herramientas y tecnologías como React, Django, Spring Boot,
          REST APIs, Git y entornos cloud, lo que me permite adaptarme a
          distintas necesidades y participar en todas las fases del desarrollo:
          desde la idea hasta la implementación y mejora continua.
          <br />
          <br />
          Mi objetivo es seguir aprendiendo y aportar innovación en cada
          proyecto, combinando desarrollo de software, inteligencia artificial y
          diseño centrado en el usuario, para impactar positivamente en la
          sociedad y en los negocios.
        </Typography>
      </Box>

      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div' width='100%'>
          Skills and Tolls
        </Typography>

        <Stack
          direction='row'
          spacing={1}
          useFlexGap
          flexWrap='wrap'
          justifyContent='center'
        >
          {[...new Set(skills.map((skill) => skill.type))].map(
            (uniqueType, index) => (
              <SkillTag
                key={index}
                uniqueType={uniqueType}
                currentTheme={currentTheme}
              />
            )
          )}
        </Stack>

        <Stack direction='row' spacing={1} useFlexGap flexWrap='wrap'>
          {skills.map((skill, index) => (
            <ChipSkill
              key={index}
              label={skill.name}
              currentTheme={currentTheme}
              colorCategory={skill.type}
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
              padding: 0,
            },
          }}
        >
          {experiences.map((experience, index) => (
            <MyTimeLine
              experience={experience}
              key={index}
              currentTheme={currentTheme}
            />
          ))}
        </Timeline>
      </Box>

      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div' width='100%'>
          Links
        </Typography>

        <Stack direction='row' spacing={1} alignItems='center'>
          <Link
            href='https://pe.linkedin.com/in/joshua-arnao-canessa-832090213'
            target='_blank'
            rel='noopener'
          >
            <LinkedInIcon color={'secondary'} />
          </Link>

          <Link
            href='https://www.figma.com/@joshuaarnao'
            target='_blank'
            rel='noopener'
          >
            <img
              style={{ height: '18px', width: '18px', color: '#FFF' }}
              src='/assets/photos/figma-logo.svg'
            />
          </Link>
        </Stack>
      </Box>
    </Container>
  );
};
