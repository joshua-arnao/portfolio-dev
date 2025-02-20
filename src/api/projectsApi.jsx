const BASE_URL = import.meta.env.VITE_API_BASE_URL;

console.log("BASE_URL cargada:", BASE_URL);

export const getProjects = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error("Error al obtener los proyectos");
    return await response.json();
  } catch (error) {
    console.error("Error en getProjects:", error);
    return [];
  }
};

export const getProjectById = async (projectId) => {
  try {
    const response = await fetch(`${BASE_URL}/${projectId}`);
    if (!response.ok) {
      throw new Error(`Error en la API ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error en getProjectById:", error);
    return null;
  }
};

export const createProject = async (project) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project),
    });
    return await response.json();
  } catch (error) {
    console.error("Error en createProject:", error);
    return null;
  }
};

export const updateProject = async (id, updateProject) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateProject),
    });
    return await response.json();
  } catch (error) {
    console.error("Error en updateProject:", error);
    return null;
  }
};

export const deleteProject = async (id) => {
  try {
    await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  } catch (error) {
    console.error("Error en deleteProject:", error);
  }
};
