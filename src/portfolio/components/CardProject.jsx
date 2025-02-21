import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useState } from "react";
import { ChipSkill } from "./ChipSkill";

export const CardProject = ({ project, isSmallScreen, currentTheme }) => {
  const { title, description, imgCard, tools } = project;
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const { secundary, background } = currentTheme.palette;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        rowGap={1}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        color={secundary.main}
        style={
          !isHover
            ? {
                border:`2px solid ${secundary.main}`,
                padding: "20px 24px",
                borderRadius: "20px",
                transition: "background-color 0.3s ease",
                textDecoration: "none"
              }
            : {
                border: `2px solid ${background.primary}`,
                padding: "20px 24px",
                borderRadius: "20px",
                transition: "background-color 0.3s ease",
                backgroundColor: background.hover,
                cursor: "pointer",
              }
        }
      >
        <Grid sm={6} style={{ height: "192px" }}>
          <img
            src={imgCard}
            alt="project"
            style={{ width: "100%", height: "192px", borderRadius: "10px" }}
          />
        </Grid>

        <Grid
          item
          sm={6}
          gap={2}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          id="prueba"
          style={{
            padding: isSmallScreen ? "" : "0px 0px 0px 16px",
            textDecoration: "none"
          }}
        >
          <Box>
            <Typography variant="h6" component="div" color="secundary">
              {title}
            </Typography>
            <Typography variant="body2" component="div" color="secundary">
              {description.length > 100
                ? `${description.slice(0, 100)}...`
                : description}
            </Typography>
          </Box>

          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            {tools.map((tool, index) => (
              <ChipSkill key={index} label={tool} currentTheme={currentTheme} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
