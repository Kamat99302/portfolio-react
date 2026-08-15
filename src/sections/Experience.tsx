import SectionHeading from "../components/SectionHeading"
import ExperienceCard from "../components/ExperienceCard"
import CodeBlock from "../components/CodeBlock"
import EditorWindow from "../components/EditorWindow"
import { Str } from "../components/codeHelpers"
import { Grid, Container } from "@mui/material"

export default function Experience(){
    return(
        <Container maxWidth="lg">
            <SectionHeading number="04" title="Experience" path="~/experience" />
            <Grid sx={{mt:3}} container spacing={3}>
                <Grid size={{xs:12, md:8}}>
                    <ExperienceCard 
                        date="Sept. 2026 – Sept. 2027 · Starting September"
                        title="Front-End Developer - Apprenticeship"
                        place="ORIS Materials Intelligence · ConTech startup, Lyon, France"
                        description="Building React interfaces for ORIS's SaaS tools that help reduce the carbon footprint of construction projects. Data-heavy screens, reusable components, real product constraints."
                        tagLabel={["React", "TypeScript", "SaaS", "Agile team"]}
                        variant="neutral" 
                        />
                </Grid>
                
                <Grid size={{xs:12, md:4}}>
                    <EditorWindow title="experience.json" sx={{ maxWidth: {xs: 360, md: '100%'}}}>
                        <CodeBlock>
                            {`{
    "role": "front-end apprentice",
    "company": "ORIS",
    "period": "2026-09 → 2027-09",
    "status": `}<Str>"starting September"</Str>
                            {`
}`}
                        </CodeBlock>
                    </EditorWindow>
                </Grid>
            </Grid>
        </Container>
        )
    }