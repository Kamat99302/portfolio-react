import {Container, Stack } from "@mui/material"
import ProjectCard from "../components/ProjectCard"
import SectionHeading from "../components/SectionHeading"
import mattsDiner from "../img/mattsdiner.png"
import componentLibrary from "../img/storyB.gif"

export default function Work(){
    return(
        <Container maxWidth="lg">
            <SectionHeading number="01" title="Work" path="~/work" description="Personal projects - designed, built and shipped end to end." />
                    <Stack direction={"column"} sx={{ mt: 3 }} spacing={2}>
                        <ProjectCard
                            kicker="2026 · React app"
                            title={`Matt's Diner`}
                            description="Kiosk ordering app consuming my npm component library. Dynamic routing, cart with Context API, FR/EN with react-i18next."
                            tags={["React", "TypeScript", "Context API", "i18next"]}
                            image={mattsDiner}
                            imageAlt="matts dinner screenshot"
                            caseStudyTo="blank"
                            codeHref="https://github.com/Kamat99302/matts-dinner"
                            demoHref="https://matts-dinner.netlify.app/" />

                            <ProjectCard
                            kicker="2026 · npm library"
                            title="Component Library"
                            description="11 React components documented in Storybook, dynamic variants via props, published on npm and consumed by Matt's Diner."
                            tags={["React", "Storybook", "npm"]}
                            image={componentLibrary}
                            imageAlt="story book screenshot"
                            caseStudyTo="blank"
                            codeHref="https://github.com/Kamat99302/Matt-s-Dinner-Component-Library"
                            demoHref="https://component-library-mattsdinner.netlify.app" />
                    </Stack>
        </Container>
    )
}