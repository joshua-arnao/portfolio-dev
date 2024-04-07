import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
// import dotenv from 'dotenv';
// dotenv.config();

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, set } from 'firebase/database';
// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env
    .VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID
};

export const Countdown = () => {
  const [countdown, setCountdown] = useState(null);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const countdownRef = ref(database, 'countdown');

    const retrieveCountdown = async () => {
      try {
        const snapshot = await get(countdownRef);
        const countdownData = snapshot.val();
        if (countdownData !== null) {
          setCountdown(countdownData);
        } else {
          console.log('No hay datos de contador en Firebase');
          // // Si no hay datos en Firebase, establece un contador predeterminado
          // setCountdown({ days: 253, hours: 0, minutes: 50 });
          // // Y guarda el contador en Firebase
          // set(countdownRef, { days: 253, hours: 0, minutes: 50 });
        }
      } catch (error) {
        console.error('Error al recuperar el contador:', error);
      }
    };

    retrieveCountdown();

    // Inicializar el intervalo dentro del primer useEffect
    const intervalId = setInterval(() => {
      // Calcular el nuevo tiempo restante
      if (countdown !== null) {
        const newCountdown = { ...countdown };
        newCountdown.minutes--;
        if (newCountdown.minutes === -1) {
          newCountdown.minutes = 59;
          newCountdown.hours--;
          if (newCountdown.hours === -1) {
            newCountdown.hours = 23;
            newCountdown.days--;
            if (newCountdown.days === 0) {
              // Si se ha alcanzado el final del contador, detener el intervalo
              clearInterval(intervalId);
            }
          }
        }

        // Actualizar el estado local y Firebase solo si ha cambiado el contador
        if (
          newCountdown.days !== countdown.days ||
          newCountdown.hours !== countdown.hours ||
          newCountdown.minutes !== countdown.minutes
        ) {
          setCountdown(newCountdown);
          set(countdownRef, newCountdown);
        }
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countdown]);

  return (
    <div
      style={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.16)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '12px 32px',
        borderRadius: '8px'
      }}
    >
      {countdown ? (
        <Typography variant='body1'>
          {countdown.days}d:{countdown.hours}h:{countdown.minutes}m y 8 cursos
          para graduarme como Ing. Industrial
        </Typography>
      ) : (
        <Typography variant='body1'>Cargando datos...</Typography>
      )}
    </div>
  );
};
