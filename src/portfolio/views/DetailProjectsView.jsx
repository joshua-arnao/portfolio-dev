import {
  Box,
  Breadcrumbs,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography
} from '@mui/material';
import { Link as Linked } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CheckIcon from '@mui/icons-material/Check';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { darkTheme } from '../../theme/darkTheme';
import { ChipSkill } from '../components/ChipSkill';

const projects = [
  {
    projectId: 1,
    title: 'Rediseño rentadora de auto | App',
    tools: ['React', 'Node.js', 'Notion'],
    description:
      'Este proyecto se centra en mejorar la aplicación móvil de una rentadora de autos en Cusco Perú, resolviendo los puntos críticos que enfrentan los usuarios durante el uso del producto.\n\nDebido a la confidencialidad del trabajo, no es posible mostrar el caso de estudio completo.',
    rol: [
      'Realizar investigación de usuarios para identificar puntos débiles de la aplicación.',
      'Generar ideas y refinar múltiples soluciones.',
      'Probar soluciones mediante pruebas de usabilidad.',
      'Finalizar diseños y lanzar la actualización.'
    ],
    problem: {
      description:
        'En el periodo de Julio del 2020 a Diciembre del 2021 see recebieron una gran cantidad de quejas y consultas relacionadas con el alquiler de autos. Estas son:',
      pareto: [
        'Cómo alquilar autos desde el app',
        'Problemas con los pagos',
        'Consultas sobre cobertura',
        'Información general sobre el alquiler de autos'
      ]
    },
    understanding: {
      description:
        'La empresa ofrece el servicio de renta de autos para turistas en el departamento del Cusco este servicio se ofrece con o sin conductor.',
      list: [
        'Los usuarios deben de ingresan la ciudad de alquiler, la fecha y hora de recojo, y duración del alquiler.',
        'Los usuarios eligen el tipo de auto, la lista de proveedores que ofrecen ese tipo de auto y el paquete que ofrece la empresa.',
        'Los usuarios obtienen información sobre el tipo de auto, el proveedor y el paquete elegido.',
        'Los usuarios ingresa la ubicación de recojo y/o devolución dle auto, junto con zonas adicionales que desea visitar.'
      ],
      images: [
        '/assets/photos/Backgound&Problem.png',
      ]
    },
    breacking: {
      description:
        'Se realizarón los siguientes métodos de investigación con la finalidad de entender mejor el problema:',
      list: [
        'Entrevistas a usuarios a partir de reclamos de servicio al cliente.',
        'Análisis UX (analizando el recorrido del usuario en la aplicación: dónde se realizan interacciones y dónde abandonan el proceso).',
        'Workshops para generar ideas sobre posibles problemas y soluciones',
        'Iteración del diseño y pruebas de usabilidad.'
      ],
      images: [
        '/assets/photos/InquiriesProblem.png',
        '/assets/photos/SoluctionsProblem.png'
      ]
    },
    overall: {
      description: 'Los cambios mejorán lo siguiente',
      list: [
        'Página de inicio rediseñada (la función adicional conduce a un 25,8% de aumento en la tasa de conversión de reservas).',
        'Página de revisión de reserva, zonas adicionales y formulario de reserva rediseñadas (aumento del 19,8%).',
        'Disminución de quejas y consultas en un 5%.'
      ],
      images: ['/assets/photos/ABTesting.png']
    },
    conclusions: {
      description: '',
      list: [
        'Aprendí a analizar las rutas de los usuarios a través de herramientas analíticas.',
        'Aprendí a tener en cuenta las numerosas quejas de los usuarios mediante entrevistas.',
        'Aprendí a realizar múltiples pruebas de usabilidad.'
      ],
      images: []
    }
  },
  {
    projectId: 2,
    title: 'Proceso de Créditos | Web',
    tools: ['React', 'Marvel', 'Figma', 'Looker Studio'],
    description:
      'Este proyecto buscaba desarrollar una plataforma intermediaria entre clientes y bancos en Panamá, simplificando y acelerando el proceso de acceso a productos financieros. La solución abordó la complejidad del sistema tradicional mediante una experiencia digital eficiente.',
    rol: [
      'Validación de la idea mediante entrevistas y análisis de mercado.',
      'Diseño de flujos y prototipos de baja y alta fidelidad.',
      'Desarrollo de algunas secciones de la plataforma.',
      'Implementación de tests para mejorar la experiencia del usuario.'
    ],
    problem: {
      description:
        'En Panamá, acceder a un crédito es un proceso complejo y lento, con múltiples formularios, largas filas, y gasto de tiempo en clientes que no aplican. Las entidades financieras enfrentaban dificultades para identificar clientes viables y optimizar su proceso de generación de leads.',
      pareto: []
    },
    understanding: {
      description:
        'La plataforma está diseñada para conectar usuarios (asalariados, independientes y PYMEs) con bancos y cooperativas, consolidando información bancaria en un solo lugar. Los usuarios pueden:',
      list: [
        'Comparar y aplicar a múltiples entidades.',
        'Recibir asesoría financiera y un perfil crediticio online.',
        'Reducir hasta un 60% del tiempo en procesos de análisis y pre-aprobaciones.'
      ],
      images: [
        '/assets/photos/imagePortfolio.png',
      ]
    },
    breacking: {
      description:
        'Métodos de investigación:',
      list: [
        'Encuestas (validación: 80% de los encuestados usarían la plataforma).',
        'Análisis de procesos bancarios tradicionales.',
        'Mapas de experiencia de usuario para identificar puntos críticos.',
      ],
      images: [
        '/assets/photos/imagePortfolio.png',
        '/assets/photos/imagePortfolio.png'
      ]
    },
    overall: {
      description: 'Propuesta inicial:',
      list: [
        'Incremento del interés por la plataforma: el 80% de los encuestados la consideraron útil.',
        'Reducción esperada del tiempo de proceso en un 60%.',
        'Incremento en leads viables para entidades financieras.'
      ],
      images: ['/assets/photos/imagePortfolio.png']
    },
    conclusions: {
      description: '',
      list: [
        'Desarrollé habilidades para estructurar validaciones tempranas de ideas de negocio.',
        'Aprendí a diseñar y testear prototipos de baja y alta fidelidad para plataformas complejas.',
        'Me enfoqué en diseñar flujos que respondieran a necesidades tanto de usuarios como de entidades financieras.'
      ],
      images: []
    }
  }
];

export const DetailProjectsView = ({ currentTheme }) => {
  const { projectId } = useParams();

  const project = projects.find((p) => p.projectId.toString() === projectId);
  const { tools } = project;

  const { primary, background } = currentTheme.palette;

  const breadcrumbs = [
    <Link to='/projects' key='1' style={{ textDecoration: 'none' }}>
      <Linked
        underline='hover'
        color={currentTheme === darkTheme ? '#fff' : '#000'}
      >
        projects
      </Linked>
    </Link>,
    <Typography key='3' color={background.primary}>
      {project.title}
    </Typography>
  ];

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '100%'
      }}
    >
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize='small' />}
        aria-label='breadcrumb'
        color={primary}
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Typography variant='h2' component='div'>
        {project.title}
      </Typography>

      <Stack direction='row' spacing={1} useFlexGap flexWrap='wrap'>
        {tools.map((tool, index) => (
          <ChipSkill key={index} label={tool} currentTheme={currentTheme} />
        ))}
      </Stack>

      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div' width='100%'>
          Descripción General
        </Typography>

        <Typography component='div'>
          {project.description.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Typography>
      </Box>

      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div' width='100%'>
          Mi función
        </Typography>

        <Typography component='div'>
          <List>
            {/* {Object.values(project.rol).map((rol, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckIcon style={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary={rol} />
              </ListItem>
            ))} */}

            {project.rol.map((rols, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckIcon style={{ color: primary }} />
                </ListItemIcon>
                <ListItemText primary={rols} />
              </ListItem>
            ))}
          </List>
        </Typography>
      </Box>

      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div' width='100%'>
          Problematica y solución
        </Typography>

        <Typography component='div'>
          {project.problem.description}
          {'\n\n'}
          <List>
            {Object.values(project.problem.pareto).map(
              (functionalities, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <HorizontalRuleIcon
                      fontSize='small'
                      style={{ color: primary }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={functionalities} />
                </ListItem>
              )
            )}
          </List>
        </Typography>
      </Box>

      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div' width='100%'>
          Entendimiento
        </Typography>

        <Typography component='div'>
          {project.understanding.description}
          {'\n\n'}
          <List>
            {Object.values(project.understanding.list).map((pareto, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <HorizontalRuleIcon
                    fontSize='small'
                    style={{ color: primary }}
                  />
                </ListItemIcon>
                <ListItemText primary={pareto} />
              </ListItem>
            ))}
          </List>
        </Typography>

        <Box width='100%' display='flex' flexDirection='column' gap='16px'>
          {Object.values(project.understanding.images).map((image, index) => (
            <img key={index} src={image} />
          ))}
        </Box>
      </Box>

      

      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div' width='100%'>
          Desglosando el problema
        </Typography>

        <Typography component='div'>
          {project.breacking.description}
          {'\n\n'}
          <List>
            {Object.values(project.breacking.list).map((pareto, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <HorizontalRuleIcon
                    fontSize='small'
                    style={{ color: primary }}
                  />
                </ListItemIcon>
                <ListItemText primary={pareto} />
              </ListItem>
            ))}
          </List>
        </Typography>

        <Box width='100%' display='flex' flexDirection='column' gap='16px'>
          {Object.values(project.breacking.images).map((image, index) => (
            <img key={index} src={image} />
          ))}
        </Box>
      </Box>

      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div' width='100%'>
          Resultados generales
        </Typography>

        <Typography component='div'>
          {project.overall.description}
          {'\n\n'}
          <List>
            {Object.values(project.overall.list).map((pareto, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <HorizontalRuleIcon
                    fontSize='small'
                    style={{ color: primary }}
                  />
                </ListItemIcon>
                <ListItemText primary={pareto} />
              </ListItem>
            ))}
          </List>
        </Typography>

        <Box width='100%' display='flex' flexDirection='column' gap='16px'>
          {Object.values(project.overall.images).map((image, index) => (
            <img key={index} src={image} />
          ))}
        </Box>
      </Box>

      <Box width='100%' display='flex' flexDirection='column' gap='16px'>
        <Typography variant='subtitle1' component='div' width='100%'>
          Conclusiones
        </Typography>

        <Typography component='div'>
          {project.conclusions.description}
          {'\n\n'}
          <List>
            {Object.values(project.conclusions.list).map((pareto, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <HorizontalRuleIcon
                    fontSize='small'
                    style={{ color: primary }}
                  />
                </ListItemIcon>
                <ListItemText primary={pareto} />
              </ListItem>
            ))}
          </List>
        </Typography>

        <Box width='100%' display='flex' flexDirection='column' gap='16px'>
          {Object.values(project.conclusions.images).map((image, index) => (
            <img key={index} src={image} />
          ))}
        </Box>
      </Box>
    </Container>
  );
};
