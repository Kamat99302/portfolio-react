import {Grid, Container } from "@mui/material"
import SkillGroup from "../components/SkillGroup"
import SectionHeading from "../components/SectionHeading"

export default function Skills(){
    const gridSx = {xs: 12, md: 4}
    
    return(
        <Container maxWidth="lg">
            <SectionHeading number="03" title="Skills" path="~/skills"/>
            <Grid sx={{mt:3}} container spacing={5}>
                <Grid size={gridSx}>
                    <SkillGroup 
                          label="frontend/" 
                          skills={[
                            {label:"React", variant: "accent",},
                            { label: 'TypeScript', variant: 'accent' },
                            { label: 'JavaScript', variant: 'accent' },
                            { label: 'HTML5', variant: 'neutral' },
                            { label: 'CSS3', variant: 'neutral' },
                            { label: 'Responsive design', variant: 'neutral' }
                          ]}/>
                </Grid>
                <Grid size={gridSx}>
                    <SkillGroup 
                          label="tools/" 
                          skills={[
                            { label: 'Git', variant: 'neutral' },
                            { label: 'Vite', variant: 'neutral' },
                            { label: 'Storybook', variant: 'neutral' },
                            { label: 'Figma', variant: 'neutral' },
                            { label: 'npm', variant: 'neutral' }
                          ]}/>
                </Grid>
                <Grid size={gridSx}>
                    <SkillGroup 
                          label="backend/" 
                          suffix="- in progress"
                          skills={[
                            { label: 'Node.js', variant: 'outline' },
                            { label: 'Express', variant: 'outline' },
                            { label: 'REST APIs', variant: 'outline' }
                          ]}/>
                </Grid>
            </Grid>
        </Container>
    )
}