import { Container, Typography } from '@mui/material';
import { CardProject } from '../components/CardProject';
import { Link } from 'react-router-dom';

const projects = [
  {
    projectId: 1,
    title: 'Rediseño rentadora de auto | App',
    description:
      'Redesigning tiket.coms Car Rentals mobile app due to high inquiries regarding the product & service',
    imgCard: '/assets/photos/imagePortfolio.png',
    tools: ['React', 'Node.js', 'Notion']
  }
];
export const ProjectsView = () => {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px'
      }}
    >
      <Typography variant='h2' component='div'>
        Proyectos trabajados
      </Typography>

      {projects.map((project) => (
        <Link
          key={project.projectId}
          to={`/projects/${project.projectId}`}
          style={{ textDecoration: 'none' }}
        >
          <CardProject project={project} />
        </Link>
      ))}
    </Container>
  );
};
