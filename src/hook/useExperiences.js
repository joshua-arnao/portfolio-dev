import { useEffect, useState } from "react";
import { getExperiences } from "../api/experiencesApi";

export const useExperiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);

      try {
        const data = await getExperiences();
        setExperiences(data);
      } catch (error) {
        setError(error.mesage)
      } finally {
        setLoading(false)
      }
    };

    fetchProjects()
  },[]);

  return{ experiences, loading, error}
};
