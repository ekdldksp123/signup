import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'

interface ContainerProps {
  children: ReactJSXElement
}
const theme = createTheme()

export const ContainerCenter: React.FC<ContainerProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          {children}
        </Box>
      </Container>
    </ThemeProvider>
  )
}
