import { Stack, Box } from "@mui/material"
import Navbar from "../components/Navbar"
import Hero from "../sections/Hero"
import Work from "../sections/Work"
import About from "../sections/About"
import Skills from "../sections/Skills"
import Experience from "../sections/Experience"
import Education from "../sections/Education"
import Contact from "../sections/Contact"
import Footer from "../components/Footer"

export default function Home(){
    const sectionSx = {scrollMarginTop: 80}
    return(
        <>
        <Navbar />
        <Stack spacing={7.5}>
            <Box sx={sectionSx} component="section"><Hero/></Box>
            <Box sx={sectionSx} component="section" id="work"><Work/></Box>
            <Box sx={sectionSx} component="section" id="about"><About/></Box>
            <Box sx={sectionSx} component="section" id="skills"><Skills/></Box>
            <Box sx={sectionSx} component="section" id="experience"><Experience/></Box>
            <Box sx={sectionSx} component="section" id="education"><Education/></Box>
            <Box sx={sectionSx} component="section" id="contact"><Contact/></Box>
        </Stack>
        <Box sx={{my:6}}>
            <Footer/>
        </Box>
        </>
    )
}