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
// import { darkTheme } from '../../theme/darkTheme';
import { ChipSkill } from "../components/ChipSkill";
import LinkIcon from "@mui/icons-material/Link";
import { darkTheme } from "../../theme";
import { HashLoader } from "react-spinners";

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

  const { primary, secundary, background } = currentTheme.palette;

  if (loading)
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <HashLoader size={40} color={secundary.main} />
        <Typography>Cargando...</Typography>
      </Box>
    );

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  
  const {
    tools,
    title,
    description,
    link,
    rol,
  } = project;

  const breadcrumbs = [
    <Link to="/projects" key="1" style={{ textDecoration: "none" }}>
      <Linked
        underline="hover"
        color={currentTheme === darkTheme ? "#fff" : "#000"}
      >
        Projects
      </Linked>
    </Link>,
    <Typography key="2" color={background.primary}>
      {title}
    </Typography>,
  ];

  const getLinkText = (link) => {
    if (link.includes("github")) {
      return "Ver el reposotorio";
    }

    return "Ver el proyecto";
  };

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

      <Box
        style={{ display: "flex", flexDirection: "column", gap: "8px" }}
        background="#000"
      >
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
              color={background.other.primary}
              fontSize="14px"
              sx={{
                "&:hover": {
                  color: background.other.secundary,
                  textDecoration: "underline",
                },
              }}
            >
              {getLinkText(link)}{" "}
              <LinkIcon color={background.other.primary} fontSize="14px" />
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

    </Container>
  );
};
