import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/jetbrains-mono/400.css"
import "@fontsource/jetbrains-mono/500.css"
import App from './App.tsx'
import {ThemeProvider, CssBaseline} from '@mui/material'
import {theme} from './theme/theme.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/> 
      <App />
    </ThemeProvider>

  </StrictMode>,
)
