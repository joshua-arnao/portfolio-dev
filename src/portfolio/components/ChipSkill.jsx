import { Chip } from "@mui/material";

// Función para generar colores aleatorios
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const ChipSkill = ({ label, currentTheme }) => {
  const { primary, text } = currentTheme.palette;

  // Si el tema tiene un color primario definido, úsalo; si no, genera un color aleatorio
  const backgroundColor = primary || getRandomColor();
  const textColor = text?.other || 'white';

  return (
    <Chip
      label={label}
      style={{
        backgroundColor: backgroundColor || getRandomColor(),
        color: textColor,
        transition: "all 0.3s ease-in-out", // Transición suave
        cursor: "default",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)", // Sombra inicial
      }}
      sx={{
        "&:hover": {
          backgroundColor: getRandomColor(), // Nuevo color en hover
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)", // Sombra más intensa al hacer hover
          transform: "scale(1.02)", // Ligero agrandamiento
        },
      }}
    />
  );
};
