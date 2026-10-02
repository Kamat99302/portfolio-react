import Navbar from "../components/Navbar"
import { Stack, Typography, Container, Box, Button, Grid } from "@mui/material"
import { fontMono, colors } from "../theme/theme"
import mattsDiner from "../img/mattsdiner.png"
import SectionHeading from "../components/SectionHeading"
import EditorWindow from "../components/EditorWindow"
import CodeBlock from "../components/CodeBlock"
import { Kw, Mark, Comments } from "../components/codeHelpers"
import ChallengesList from "../components/ChallengesList"
import LearningCard from "../components/LearningCard"
import StackTag from "../components/StackTag"
import {Divider} from "@mui/material"
import { Link as RouterLink} from 'react-router-dom'


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
                        <Mark>import</Mark> {`{ Button, CartItemCard }`} <Mark>from</Mark> <Kw>"matts-diner-component-library"{`;`}</Kw>
                        {"\n"}
                        <Mark>import</Mark> {`{ useCart }`} <Mark>from</Mark> <Kw>"../Context/CartContext"{`;`}</Kw>                       
                         </CodeBlock>
                </EditorWindow>
            </Stack>

            <Stack spacing={1.2} sx={{mt:5, mb:3}}>
            <SectionHeading size="small" number="02" title="Technical challenges solved" />
            <ChallengesList challenges={[
                "Kept data keys separate from display strings so switching language never breaks category filtering",
                "Cart with Context API - add, remove, totals and tax computed as derived state",
                "Dynamic routing with React Router - product page by ID",
                "Published the component library to npm instead of using npm link, so the build works on Netlify",
                "Scaled the 1080×1920 kiosk layout to any screen with dynamic scaling"
                ]} />
            </Stack>

            <SectionHeading size="small" number="03" title="Learnings" />
            <Grid sx={{mt:2}} container spacing={3} >
                <Grid size ={{xs:12, md:4}}>
                    <LearningCard kicker="State management" text="Shared global state across pages: cart, active category, derived totals, without prop drilling." />
                </Grid>
                <Grid size ={{xs:12, md:4}}>
                    <LearningCard kicker="Library lifecycle" text="Publishing, versioning and installing my own package with the same workflow as any npm dependency." />
                </Grid>
                <Grid size ={{xs:12, md:4}}>
                    <LearningCard kicker="Internationalization" text="Structuring translation keys so the UI can switch language instantly, without touching the underlying data." />
                </Grid>
            </Grid>

            <Stack sx={{mt:4, mb:4}} spacing={2}>
                <SectionHeading title="Next Goal" size="small" number="04" />
                <EditorWindow sx={{maxWidth:{xs: "100%", md:"85%"}}} title="roadmap.todo">
                    <Box sx={{py:0.5}}>
                    <CodeBlock >                                             
                        <Mark>// TODO:</Mark> {`serve the menu from a Node.js + Express REST API`} 
                        {"\n"}
                        <Mark>// TODO:</Mark> {`persist orders in a database`}
                        {"\n"}
                        <Comments>// goal: turn Matt's Diner into a complete full-stack app</Comments>            
                    </CodeBlock>
                    </Box>
                </EditorWindow>
            </Stack>
            <SectionHeading size="small" number="05" title="Toolbox" />
            <Box sx={{mt:2}}>
                <Stack direction={"row"} sx={{flexWrap:"wrap", gap:1}}>
                    <StackTag variant="neutral" label="React"/>
                    <StackTag variant="neutral" label="TypeScript"/>
                    <StackTag variant="neutral" label="Context API"/>
                    <StackTag variant="neutral" label="React Router"/>
                    <StackTag variant="neutral" label="react-i18next"/>
                    <StackTag variant="neutral" label="Vite"/>
                    <StackTag variant="neutral" label="npm"/>
                </Stack>
            </Box>
            <Box sx={{mt:6}}>
                <Divider sx={{border: 'none',height: '1px', background: `linear-gradient(to right, transparent, ${colors.divider} 48px, ${colors.divider} calc(100% - 48px), transparent)`}} />
                <Stack sx={{justifyContent:"space-between", mt:2, alignItems: {xs:'center', md:'stretch'}, gap: { xs: 1, md: 0 },}} direction={{xs:"column", md:"row"}}>
                    <Button component={RouterLink} to="/#work" variant="text">← All projects</Button>
                    <Button component={RouterLink} to="/component-library" variant="text">Next: Component Library →</Button>
                </Stack>
            </Box>
            </Container>
        </>
    )
}