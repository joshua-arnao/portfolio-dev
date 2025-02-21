import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Box,
  Breadcrumbs,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Link as Linked } from "@mui/material";
import { getProjectById } from "../../api/projectsApi";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CheckIcon from "@mui/icons-material/Check";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
// import { darkTheme } from '../../theme/darkTheme';
import { ChipSkill } from "../components/ChipSkill";
import LinkIcon from "@mui/icons-material/Link";
import { darkTheme } from "../../theme";

export const DetailProjectsView = ({ currentTheme }) => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getProjectById(projectId);
        console.log("data", data);

        if (data) {
          setProject(data);
        } else {
          setError("No se encontró el proyecto.");
        }
      } catch (err) {
        console.error("Error al cargar el proyecto:", err);
        setError("Error al cargar el proyecto.");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  // Verificación mientras carga o hay errores
  if (loading) {
    return <Typography>Cargando...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  const { primary, secundary, background } = currentTheme.palette;
  const {
    tools,
    title,
    description,
    link,
    rol,
    problem,
    understanding,
    breacking,
    overall,
    conclusions,
  } = project;

  const breadcrumbs = [
    <Link to="/projects" key="1" style={{ textDecoration: "none" }}>
      <Linked underline="hover" color={currentTheme === darkTheme ? '#fff':'#000'}>Projects</Linked>
    </Link>,
    <Typography key="2" color={background.primary}>
      {title}
    </Typography>,
  ];

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        width: "100%",
      }}
    >
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        color={primary}
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Typography variant="h2" component="div">
        {project.title}
      </Typography>

      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
        {tools.map((tool, index) => (
          <ChipSkill key={index} label={tool} currentTheme={currentTheme} />
        ))}
      </Stack>

      <Box>
        {link.map((link, index) => (
          <Box
            key={index}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "22px",
                padding: "1px 8px",
                borderRadius: "6px",
                background: "rgba(154, 230, 180, 0.16)",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  color: "#9AE6B4",
                  fontFamily: "Inter",
                  lineHeight: "20px",
                }}
              >
                Link
              </p>
            </div>
            <Linked
              href={link}
              target="_blank"
              color={"#FF33BB"}
              fontSize="14px"
            >
              Clic para ver el Proyecto{" "}
              <LinkIcon color={"#FF33BB"} fontSize="14px" />
            </Linked>
          </Box>
        ))}
      </Box>

      <Box width="100%" display="flex" flexDirection="column" gap="16px">
        <Typography variant="subtitle1" component="div" width="100%">
          Descripción General
        </Typography>

        <Typography component="div">
          {description.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Typography>
      </Box>

      <Box width="100%" display="flex" flexDirection="column" gap="16px">
        <Typography variant="subtitle1" component="div" width="100%">
          Mi función
        </Typography>

        <Typography component="div">
          <List>
            {/* {Object.values(project.rol).map((rol, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckIcon style={{ color: '#fff' }} />
                </ListItemIcon>
                <ListItemText primary={rol} />
              </ListItem>
            ))} */}

            {rol.map((rols, index) => (
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

      <Box width="100%" display="flex" flexDirection="column" gap="16px">
        <Typography variant="subtitle1" component="div" width="100%">
          Problematica y solución
        </Typography>

        <Typography component="div">
          {problem.description}
          {"\n\n"}
          <List>
            {Object.values(problem.pareto).map((functionalities, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <HorizontalRuleIcon
                    fontSize="small"
                    style={{ color: primary }}
                  />
                </ListItemIcon>
                <ListItemText primary={functionalities} />
              </ListItem>
            ))}
          </List>
        </Typography>
      </Box>

      <Box width="100%" display="flex" flexDirection="column" gap="16px">
        <Typography variant="subtitle1" component="div" width="100%">
          Entendimiento
        </Typography>

        <Typography component="div">
          {understanding.description}
          {"\n\n"}
          <List>
            {Object.values(understanding.list).map((pareto, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <HorizontalRuleIcon
                    fontSize="small"
                    style={{ color: primary }}
                  />
                </ListItemIcon>
                <ListItemText primary={pareto} />
              </ListItem>
            ))}
          </List>
        </Typography>

        <Box width="100%" display="flex" flexDirection="column" gap="16px">
          {Object.values(understanding.images).map((image, index) => (
            <img key={index} src={image} />
          ))}
        </Box>
      </Box>

      <Box width="100%" display="flex" flexDirection="column" gap="16px">
        <Typography variant="subtitle1" component="div" width="100%">
          Desglosando el problema
        </Typography>

        <Typography component="div">
          {breacking.description}
          {"\n\n"}
          <List>
            {Object.values(breacking.list).map((pareto, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <HorizontalRuleIcon
                    fontSize="small"
                    style={{ color: primary }}
                  />
                </ListItemIcon>
                <ListItemText primary={pareto} />
              </ListItem>
            ))}
          </List>
        </Typography>

        <Box width="100%" display="flex" flexDirection="column" gap="16px">
          {Object.values(breacking.images).map((image, index) => (
            <img key={index} src={image} />
          ))}
        </Box>
      </Box>

      <Box width="100%" display="flex" flexDirection="column" gap="16px">
        <Typography variant="subtitle1" component="div" width="100%">
          Resultados generales
        </Typography>

        <Typography component="div">
          {overall.description}
          {"\n\n"}
          <List>
            {Object.values(overall.list).map((pareto, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <HorizontalRuleIcon
                    fontSize="small"
                    style={{ color: primary }}
                  />
                </ListItemIcon>
                <ListItemText primary={pareto} />
              </ListItem>
            ))}
          </List>
        </Typography>

        <Box width="100%" display="flex" flexDirection="column" gap="16px">
          {Object.values(overall.images).map((image, index) => (
            <img key={index} src={image} />
          ))}
        </Box>
      </Box>

      <Box width="100%" display="flex" flexDirection="column" gap="16px">
        <Typography variant="subtitle1" component="div" width="100%">
          Conclusiones
        </Typography>

        <Typography component="div">
          {conclusions.description}
          {"\n\n"}
          <List>
            {Object.values(conclusions.list).map((pareto, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <HorizontalRuleIcon
                    fontSize="small"
                    style={{ color: primary }}
                  />
                </ListItemIcon>
                <ListItemText primary={pareto} />
              </ListItem>
            ))}
          </List>
        </Typography>

        <Box width="100%" display="flex" flexDirection="column" gap="16px">
          {Object.values(conclusions.images).map((image, index) => (
            <img key={index} src={image} />
          ))}
        </Box>
      </Box>
    </Container>
  );
};
