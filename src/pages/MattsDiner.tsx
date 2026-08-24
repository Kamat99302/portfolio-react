import Navbar from "../components/Navbar"
import { Stack, Typography, Container, Box, Button } from "@mui/material"
import { fontMono, colors } from "../theme/theme"

export default function MattsDiner(){
    const buttonSx = { py: 0.05, px: 1.1, fontSize: 13 }
    return(
        <>
            <Navbar />
            <Container maxWidth="lg">
            <Box sx={{mt:3, maxWidth:{xs: '100%', md:600}}}>
                <Stack spacing={1.5} direction={"column"}>
                    <Typography sx={{fontFamily: fontMono ,color:colors.neutral[600], fontSize:13}} >~/projects/matts-diner</Typography>
                    <Typography sx={{color:"primary.main"}} variant="caption">Case study · 2026 · React app</Typography>
                    <Typography sx={{fontSize:44}} variant="h1">Matt's Diner</Typography>
                    <Typography sx={{fontSize:16, color:colors.neutral[400]}}>A self-service ordering kiosk for a restaurant, built for a 1080×1920 touch screen.</Typography>
                    <Stack direction={"row"} spacing={1}>
                    <Button href="https://matts-dinner.netlify.app/" color="primary" target="_blank" sx={{...buttonSx }} >Live demo</Button>
                    <Button href="https://github.com/Kamat99302/matts-dinner" sx={{borderColor: 'divider', color:'text.primary', ...buttonSx}} target="_blank">View code</Button>
                    <Button href="https://www.figma.com/design/ceIg17J56YuNfSHVxKf4do/INTERFACE-DE-COMMANDE-KIOSK?node-id=0-1&p=f" sx={{borderColor: 'divider', border:'none', color:'primary', ...buttonSx}} target="_blank">Figma design</Button>
                    </Stack>
                </Stack>
            </Box>
            </Container>
        </>
    )
}