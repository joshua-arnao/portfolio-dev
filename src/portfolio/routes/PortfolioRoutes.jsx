import { Route, Routes } from 'react-router-dom';
import { PortfolioLayout } from '../layout/PortfolioLayout';
import { DetailProjectsView, HomeView, ProjectsView } from '../views';

export const PortfolioRoutes = ({ toggleTheme, currentTheme }) => {
  // const routes = [
  //   {
  //     path: '/',
  //     Component: PortfolioLayout,

  //     children: [
  //       {
  //         path: '/',
  //         Component: HomeView
  //       },
  //       {
  //         path: 'projects',
  //         Component: ProjectsView
  //         // children: [
  //         //   {
  //         //     path: 'projects/:projectId',
  //         //     Component: DetailProjectsView
  //         //   }
  //         // ]
  //       },
  //       {
  //         path: 'projects/:projectId',
  //         Component: DetailProjectsView
  //       }
  //     ]
  //   }
  // ];

  // const routeElement = useRoutes(routes);

  return (
    <Routes>
      <Route
        path='/'
        element={
          <PortfolioLayout
            toggleTheme={toggleTheme}
            currentTheme={currentTheme}
          />
        }
      >
        <Route path='/' element={<HomeView />} />
        <Route path='projects' element={<ProjectsView />} />
        <Route path='projects/:projectId' element={<DetailProjectsView />} />
      </Route>
    </Routes>
    // routeElement
  );
};
