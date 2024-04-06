import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../components'

export const PortfolioLayout = () => {
  return (
    <Box
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <NavBar />

      <Box
        component='main'
        style={{
          margin: '100px 0px ',
          width: '533px'
        }}
      >
        {/* {children} */}
        <Outlet />
      </Box>
    </Box>
  )
}
