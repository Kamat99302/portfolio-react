import SectionHeading from "../components/SectionHeading"
import CertificationCard from "../components/CertificationCard"
import { Grid, Container } from "@mui/material"

export default function Education(){
    return(
        <Container maxWidth="lg">
            <SectionHeading number="05" title="Education" path="~/certs" />
            <Grid sx={{mt:3}} container spacing={3}>
                <Grid size={{xs:12, md:6}}>
                    <CertificationCard kicker="Scrimba · Dec 2025" certificationTitle="Frontend Developer Career Path" description="81.6 hours · 1,489 lessons. React, JavaScript, UI patterns, working with APIs." status="✓ Completed" chipVariant="accent"/>
                </Grid>

                <Grid size={{xs:12, md: 6}}>
                    <CertificationCard  kicker="Scrimba · 2026" certificationTitle="Backend Developer Path" description="Node.js, Express, databases, extending toward full-stack." status="In progress" chipVariant="outline" progressionBarValue={25}/>
                </Grid>
            </Grid>
        </Container>
    )
}