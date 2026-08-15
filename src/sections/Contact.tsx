import SectionHeading from "../components/SectionHeading"
import EditorWindow from "../components/EditorWindow"
import { Container, Stack, Button, Box } from "@mui/material"
import { Mark} from "../components/codeHelpers"

export default function Contact(){
    const buttonSx = { py: 0.05, px: 1.1, fontSize: 13 }
    return(
        <Container maxWidth="lg">
            <SectionHeading number="06" title="Contact" path="~/contact"/>
            <EditorWindow  title="terminal" sx={{maxWidth:"640px", mt:2}}>
            <Mark>$</Mark> Got a project in mind? Let's talk.  EN or FR
            <Box
                component="span"
                sx={{
                    display: 'inline-block',
                    width: 7,
                    height: 14,
                    ml: 0.5,
                    bgcolor: 'primary.main',
                    verticalAlign: 'middle',
                    animation: 'blink 1.1s step-end infinite',
                    '@keyframes blink': { '50%': { opacity: 0 } },
                }}/>
            <Stack  sx={{mt:1.5, mb:1}} direction={"row"} spacing={1.4}>
                <Button href="mailto:mjuandev@gmail.com" color="primary" sx={{...buttonSx }} >mjuandev@gmail.com</Button>
                <Button href="https://www.linkedin.com/in/matthieu-juan-55568337a/" sx={{borderColor: 'divider', color:'text.primary', ...buttonSx}} target="_blank">LinkedIn</Button>
                <Button href="https://github.com/Kamat99302" sx={{borderColor: 'divider', color:'text.primary', ...buttonSx}} target="_blank">GitHub</Button>
            </Stack>
            </EditorWindow>
        </Container>
    )
}