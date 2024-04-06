import { useRoutes } from 'react-router-dom'
import { PortfolioLayout } from '../layout/PortfolioLayout'
import { DetailProjectsView, HomeView, ProjectsView } from '../views'

export const PortfolioRoutes = () => {
  const routes = [
    {
      path: '/',
      Component: PortfolioLayout,
      children: [
        {
          path: '/',
          Component: HomeView
        },
        {
          path: 'projects',
          Component: ProjectsView
          // children: [
          //   {
          //     path: 'projects/:projectId',
          //     Component: DetailProjectsView
          //   }
          // ]
        },
        {
          path: 'projects/:projectId',
          Component: DetailProjectsView
        }
      ]
    }
  ]

  const routeElement = useRoutes(routes)

  return (
    // <Routes>
    //   <Route path='/' element={<PortfolioLayout />} children>
    //     {/* <Route index element={<HomeView />} /> */}
    //     {/* <Route path='projects' element={<ProjectsView />}> */}
    //       {/* <Route path=':projectId' element={<DetailProjectsView />} /> */}
    //       {/* <Route path=':details' element={<DetailProjectsView />} /> */}
    //     {/* </Route> */}

    //     {/* <Route path='*' element={<HomeView />} /> */}
    //   </Route>
    // </Routes>
    routeElement
  )
}
