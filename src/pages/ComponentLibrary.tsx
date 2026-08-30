import Navbar from "../components/Navbar"
import { Stack, Typography, Container, Box, Button, Grid } from "@mui/material"
import { fontMono, colors } from "../theme/theme"
import storyB from '../img/storyB.gif'
import SectionHeading from "../components/SectionHeading"
import EditorWindow from "../components/EditorWindow"
import CodeBlock from "../components/CodeBlock"
import {  Mark, Comments, Str } from "../components/codeHelpers"
import ChallengesList from "../components/ChallengesList"
import LearningCard from "../components/LearningCard"
import StackTag from "../components/StackTag"
import {Divider} from "@mui/material"

export default function ComponentLibrary(){
    const buttonSx = { py: 0.05, px: 1.1, fontSize: 13 }
    return(
        <>
            <Navbar />
            <Container maxWidth="md" sx={{ px: {xs: 3 , md:7}}}>
            <Box sx={{mt:3, maxWidth:{xs: '100%', md:600}}}>
                <Stack spacing={1.5} direction={"column"}>
                    <Typography sx={{fontFamily: fontMono ,color:colors.neutral[600], fontSize:13}} >~/projects/component-library</Typography>
                    <Typography sx={{color:"primary.main"}} variant="caption">Case study · 2026 · npm library</Typography>
                    <Typography sx={{fontSize:44}} variant="h1">Component Library</Typography>
                    <Typography sx={{fontSize:16, color:colors.neutral[400]}}>A library of 11 reusable React components, documented in Storybook and published on npm. Built to be consumed by my own apps, starting with Matt's Diner.</Typography>
                    <Stack direction={"row"} spacing={1}>
                        <Button href="https://component-library-mattsdinner.netlify.app/" color="primary" target="_blank" sx={{...buttonSx }} >Storybook</Button>
                        <Button href="https://github.com/Kamat99302/Matt-s-Dinner-Component-Library" sx={{borderColor: 'divider', color:'text.primary', ...buttonSx}} target="_blank">View code</Button>
                        <Button href="https://www.npmjs.com/package/matts-dinner-component-library" sx={{borderColor: 'divider', border:'none', color:'primary', ...buttonSx}} target="_blank">npm package</Button>
                    </Stack>
                </Stack>    
            </Box>
            <Box sx={{ mt:4,  borderRadius:2, width: '100%'}} component="img" src={storyB} alt="matts diner screenshot" />
            <Stack sx={{mt:3}} spacing={2}>
                <SectionHeading size="small" number="01" title="Architecture" />
                <Typography sx={{fontSize:15, color:colors.neutral[300]}}>Each component is fully driven by props. No hardcoded content, no internal data fetching. Variants (size, state, color) are passed as
                     props and mapped to styles inside the component. Storybook documents every variant as a story. The package is built with Vite in library mode and published on npm.</Typography>
                <EditorWindow sx={{maxWidth:{xs: "100%", md:"85%" }}} title="package.json">
                <CodeBlock>
{`{
  "name": `}<Str>"matts-diner-component-library"</Str>{`,
  "version": `}<Str>"1.0.7"</Str>{`,
  "main": `}<Str>"./dist/matts-diner-library.umd.js"</Str>{`,
  "module": `}<Str>"./dist/matts-diner-library.es.js"</Str>{`,
  "peerDependencies": { "react": `}<Str>"^19.2.0"</Str>{` },
  "scripts": { "storybook": `}<Str>"storybook dev -p 6006"</Str>{` }
}`}
</CodeBlock>
                </EditorWindow>
            </Stack>

            <Stack spacing={1.2} sx={{mt:5, mb:3}}>
            <SectionHeading size="small" number="02" title="Technical challenges solved" />
            <ChallengesList challenges={[
                "Designed a prop API generic enough to reuse, specific enough to stay readable",
                "Configured Vite in library mode with proper ESM exports and type declarations",
                "Published and versioned the package on npm, consumed as a real dependency",
                "Kept components translation-agnostic: all text passed in as props",
                "Documented every variant in Storybook so components are testable in isolation"
                ]} />
            </Stack>

            <SectionHeading size="small" number="03" title="Learnings" />
            <Grid sx={{mt:2}} container spacing={3} >
                <Grid size ={{xs:12, md:4}}>
                    <LearningCard kicker="Component API design" text="Naming and typing props is the real design work; a good API makes the consuming app trivial to write." />
                </Grid>
                <Grid size ={{xs:12, md:4}}>
                    <LearningCard kicker="Library tooling" text="Understood the difference between building an app and building a package: entry points, peer dependencies, etc." />
                </Grid>
                <Grid size ={{xs:12, md:4}}>
                    <LearningCard kicker="Storybook " text="Developing a component in isolation surfaces edge cases the app would hide." />
                </Grid>
            </Grid>

            <Stack sx={{mt:4, mb:4}} spacing={2}>
                <SectionHeading title="Next Goal" size="small" number="04" />
                <EditorWindow sx={{maxWidth:{xs: "100%", md:"85%"}}} title="roadmap.todo">
                    <Box sx={{py:0.5}}>
                    <CodeBlock >
                        <Mark>// TODO:</Mark> {`migrate the library to TypeScript`} 
                        {"\n"}                                             
                        <Mark>// TODO:</Mark> {`add unit tests with Vitest + Testing Library`} 
                        {"\n"}
                        <Mark>// TODO:</Mark> {`automate releases with changesets`}
                        {"\n"}
                        <Comments>// goal: a library I can drop into any future project with confidence</Comments>            
                    </CodeBlock>
                    </Box>
                </EditorWindow>
            </Stack>
            <SectionHeading size="small" number="05" title="Toolbox" />
            <Box sx={{mt:2}}>
                <Stack direction={"row"} sx={{flexWrap:"wrap", gap:1}}>
                    <StackTag variant="neutral" label="React"/>
                    <StackTag variant="neutral" label="JavaScript"/>
                    <StackTag variant="neutral" label="Storybook "/>
                    <StackTag variant="neutral" label="Vite"/>
                    <StackTag variant="neutral" label="npm"/>
                </Stack>
            </Box>
            <Box sx={{mt:6}}>
                <Divider sx={{border: 'none',height: '1px', background: `linear-gradient(to right, transparent, ${colors.divider} 48px, ${colors.divider} calc(100% - 48px), transparent)`}} />
                <Stack sx={{justifyContent:"space-between", mt:2, alignItems: {xs:'center', md:'stretch'}, gap: { xs: 1, md: 0 },}} direction={{xs:"column", md:"row"}}>
                    <Button href={""} variant="text">← All projects</Button>
                </Stack>
            </Box>
            </Container>
        </>
    )
}