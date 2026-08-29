import Navbar from "../components/Navbar"
import { Stack, Typography, Container, Box, Button } from "@mui/material"
import { fontMono, colors } from "../theme/theme"
import mattsDiner from "../img/mattsdiner.png"
import SectionHeading from "../components/SectionHeading"
import EditorWindow from "../components/EditorWindow"
import CodeBlock from "../components/CodeBlock"
import { Kw, Mark } from "../components/codeHelpers"
import ChallengesList from "../components/ChallengesList"

export default function MattsDiner(){
    const buttonSx = { py: 0.05, px: 1.1, fontSize: 13 }
    return(
        <>
            <Navbar />
            <Container maxWidth="md" sx={{ px: {xs: 3 , md:7}}}>
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
            <Box sx={{ mt:4,  borderRadius:2, width: '100%'}} component="img" src={mattsDiner} alt="matts dinner screenshot" />
            <Stack sx={{mt:3}} spacing={2}>
                <SectionHeading size="small" number="01" title="Architecture" />
                <Typography sx={{fontSize:15, color:colors.neutral[300]}}>The app pulls my component library from npm and keeps it purely presentational: state lives in Context API, translations in react-i18next, and the library receives everything through props.</Typography>
                <EditorWindow sx={{maxWidth:{xs: "100%", md:"85%" }}} title="App.tsx">
                    <CodeBlock>                                             
                        <Mark>import</Mark> {`{ Button, CartItemCard }`} <Mark>from</Mark> <Kw>"matts-dinner-component-library"{`;`}</Kw>
                        {"\n"}
                        <Mark>import</Mark> {`{ useCart }`} <Mark>from</Mark> <Kw>"../Context/CartContext"{`;`}</Kw>                       
                         </CodeBlock>
                </EditorWindow>
            </Stack>

            <Stack spacing={1.2} sx={{mt:4}}>
            <SectionHeading size="small" number="02" title="Technical challenges solved" />
            <ChallengesList challenges={[
                "Kept data keys separate from display strings so switching language never breaks category filtering",
                "Cart with Context API - add, remove, totals and tax computed as derived state",
                "Dynamic routing with React Router - product page by ID",
                "Published the component library to npm instead of using npm link, so the build works on Netlify",
                "Scaled the 1080×1920 kiosk layout to any screen with dynamic scaling"
                ]} />
            </Stack>
            
            </Container>
        </>
    )
}