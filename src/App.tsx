import { Typography } from '@mui/material'
import {Button, Chip, Paper} from '@mui/material'
import { windowShadow } from './theme/theme'

function App() {
  return (
    <>
      <Typography variant='h1'>
      Bonjour
      </Typography>
      <Chip label='coucou' variant='outlined'/>
      <Button>Bonjour</Button>
      <Paper sx={{p:2, boxShadow: windowShadow.simple}}>Test</Paper>
      
    </>
  )
}

export default App
