import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, set } from 'firebase/database';
import { Container } from '@mui/material';
import { useIsSmallScreen } from '/src/hook/useSmallScreen';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_REACT_APP_FIREBASE_BASE_URL,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env
    .VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_REACT_APP_FIREBASE_MEASUREMENT_ID
};

export const Countdown = ({ currentTheme }) => {
  const isSmallScreen = useIsSmallScreen();
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const countdownRef = ref(database, 'countdown');

    const targetDate = new Date('2024-12-02T23:59:59'); // Fecha límite fija

    const retrieveCountdown = async () => {
      try {
        const snapshot = await get(countdownRef);
        const countdownData = snapshot.val();
        if (countdownData === null) {
          console.log('No hay datos de contador en Firebase');
          set(countdownRef, { targetDate: targetDate.toISOString() });
        }
      } catch (error) {
        console.error('Error al recuperar el contador:', error);
      }
    };

    retrieveCountdown();

    // Calcular tiempo restante
    const calculateTimeRemaining = () => {
      const now = new Date();
      const timeRemaining = targetDate - now;
      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        setCountdown({ days, hours, minutes });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0 });
      }
    };

    // Actualizar cada segundo
    const intervalId = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const { background } = currentTheme.palette;

  return (
    <Container
      style={{
        backdropFilter: 'blur(10px)',
        backgroundColor: background.countdown,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: isSmallScreen ? '8px 16px' : '12px 32px',
        borderRadius: '8px'
      }}
    >
      {countdown ? (
        <Typography variant='body1' textAlign='center'>
          {countdown.days}d:{countdown.hours}h:{countdown.minutes}m y 2 cursos
          para graduarme como Ing. Industrial
        </Typography>
      ) : (
        <Typography variant='body1'>Cargando datos...</Typography>
      )}
    </Container>
  );
};
