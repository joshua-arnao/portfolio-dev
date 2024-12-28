import { Container, Typography } from '@mui/material';
import { CardProject } from '../components/CardProject';
import { Link } from 'react-router-dom';
import { useIsSmallScreen } from '/src/hook/useSmallScreen';

const projects = [
  {
    projectId: 1,
    title: 'Rediseño rentadora de auto | App',
    description:
      'Redesigning tiket.coms Car Rentals mobile app due to high inquiries regarding the product & service',
    imgCard: '/assets/photos/Backgound&Problem.png',
    tools: ['React', 'Node.js', 'Figma']
  },
  {
    projectId: 2,
    title: 'Proceso de Créditos | Web',
    description:
      'Este proyecto buscaba desarrollar una plataforma intermediaria entre clientes y bancos en Panamá, simplificando...',
    imgCard: '/assets/photos/HomeBankiao.png',
    tools: ['React', 'Marvel', 'Figma']
  }
];

export const ProjectsView = ({ currentTheme }) => {
  const isSmallScreen = useIsSmallScreen();

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px'
      }}
    >
      <Typography
        variant={isSmallScreen ? 'h3' : 'h2'}
        component='div'
        textAlign='center'
      >
        Proyectos trabajados
      </Typography>

      {projects.map((project) => (
        <Link
          key={project.projectId}
          to={`/projects/${project.projectId}`}
          style={{ textDecoration: 'none' }}
        >
          <CardProject
            project={project}
            isSmallScreen={isSmallScreen}
            currentTheme={currentTheme}
          />
        </Link>
      ))}
    </Container>
  );
};
