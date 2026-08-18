import { Grid, Container, Stack, Typography, Button} from "@mui/material"
import StackTag from "../components/StackTag"
import EditorWindow from "../components/EditorWindow"
import CodeBlock from "../components/CodeBlock"
import { colors } from "../theme/theme"
import { Kw, Mark } from "../components/codeHelpers"
import CvMatthieu from '../assets/cv-matthieu-juan.pdf'



export default function Hero(){
    const buttonSx = { py: 0.05, px: 1.1, fontSize: 13 }
    const buttonSxXs = { py: 0.4, px: 1.1, fontSize: 13 }
    return(
        <Container maxWidth="lg">
            <Grid sx={{mt:3}} container spacing={4}>
                <Grid size={{xs:12, md:7}}>
                    <Stack direction={"column"} spacing={2}>
                        <Typography sx={{color:"primary.main"}} variant="caption">Front-end developer · ORIS</Typography>
                        <Typography sx={{fontSize:{xs:42, md:56}}} variant="h1">Matthieu Juan</Typography>
                        <Typography sx={{fontSize:16, color:colors.neutral[400]}}>I build clean, typed, bilingual React interfaces. From the Storybook component to the deployed app.</Typography>
                        <Stack direction={"row"} spacing={1}>
                            <StackTag variant="accent" label="React"/>
                            <StackTag variant="accent" label="TypeScript"/>
                            <StackTag variant="accent" label="JavaScript"/>
                            <StackTag variant="outline" label="Learning Node.js"/>
                        </Stack>
                        <Stack sx={{display:{xs:'none', md:'flex'}}} direction={{xs:"column", md: "row"}} spacing={1}>
                            <Button sx={{...buttonSx, width:{ xs: '100%', md: 'auto' } }}  href="#work" color="primary">View my work</Button>
                            <Button sx={{borderColor: 'divider', color:'text.primary', ...buttonSx, width:{ xs: '100%', md: 'auto' }}} href={CvMatthieu} download >Download résumé</Button>
                        </Stack>
                    </Stack>
                </Grid>

                <Grid size={{xs:12, md:5}}>
                    <EditorWindow sx={{maxWidth:400, minWidth:300, m:{md:6}, mx:"auto"}} title="profile.ts">
                        <CodeBlock>
                                                    
                        <Mark>const</Mark> {`dev = {
    stack: [`}<Kw>"React"</Kw>{`, `}<Kw>"TypeScript"</Kw>{`],
    i18n: [`}<Kw>"en"</Kw>{`, `}<Kw>"fr"</Kw>{`],
    status: `}<Kw>"learning full-stack"</Kw>
    {`,
}` } <Mark>as const</Mark>
                                                </CodeBlock>
                    </EditorWindow>
                    <Stack sx={{display:{md:'none'}, pt:3}} direction={{xs:"column", md: "row"}} spacing={1}>
                            <Button sx={{...buttonSxXs, width:{ xs: '100%', md: 'auto' } }}  href="#work" color="primary">View my work</Button>
                            <Button sx={{borderColor: 'divider', color:'text.primary', ...buttonSxXs, width:{ xs: '100%', md: 'auto' }}} href={CvMatthieu} download >Download résumé</Button>
                        </Stack>
                </Grid>
                
            </Grid>
        </Container>
        
    )
}