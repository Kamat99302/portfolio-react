import { Grid, Container, Stack, Typography, Link, Box} from "@mui/material"
import SectionHeading from "../components/SectionHeading"
import EditorWindow from "../components/EditorWindow"
import CodeBlock from "../components/CodeBlock"
import { Mark } from "../components/codeHelpers"
import { colors } from "../theme/theme"
import matt from "../img/matt.jpg"
export default function About(){

    const typoSx = {fontSize:14, color:colors.neutral[300]}
    return(
        <Container maxWidth="lg">
            <SectionHeading number="02" title="About" path="~/about"/>
            <Grid sx={{mt:3}} container spacing={3}>
                <Grid size={{xs:12, md:3}}>
                    <EditorWindow title="matthieu.jpg" sx={{ maxWidth: { xs: 320, md: '100%' }, mx: 'auto' }}>
                        <Box 
                        component="img"
                        src={matt}
                        alt="Matthieu Juan"
                        sx={{ width: '100%', display: 'block'}}></Box>
                    </EditorWindow>
                </Grid>
                <Grid size={{xs:12, md:4}}>
                    <EditorWindow title="README.md">
                        <Stack spacing={1.5} sx={{p:1}}>
                            <Typography sx={typoSx}>After 15 months of humanitarian work across Asia (Singapore, Indonesia), I committed fully to web development. Scrimba's
                                Frontend Developer Path, then a front-end role (apprenticeship) at <Link href="https://www.oris-connect.com/en/" target="_blank">ORIS </Link>while completing my Bachelor's in application development.
                            </Typography>
                            <Typography sx={typoSx}>Working abroad taught me adaptability, perseverance and teamwork - in English, every day. I bring the same into every codebase.</Typography>
                        </Stack>    
                        
                    
                    </EditorWindow>
                </Grid>
                <Grid size={{xs:12, md:5}}>
                    <EditorWindow title="git log --oneline">
                        <Stack sx={{my:1.2}} direction={"column"} spacing={1}>
                            <CodeBlock> <Mark>a3f21e</Mark> (HEAD) 2026 · Front-end dev @ ORIS</CodeBlock>
                            <CodeBlock> <Mark>8c04d7</Mark> 2026 · Bachelor CDA - started</CodeBlock>
                            <CodeBlock> <Mark>5b91af</Mark> 2025 · Scrimba Frontend Path ✓</CodeBlock>
                            <CodeBlock> <Mark>2e77c3</Mark> 2024 · Humanitarian work, Asia ✓   </CodeBlock>
                            <CodeBlock> <Mark>d10b52</Mark> 2023 · BTS SIO SLAM ✓</CodeBlock>
                        </Stack>
                    </EditorWindow>
                </Grid>
            </Grid>
        </Container>
    )
}