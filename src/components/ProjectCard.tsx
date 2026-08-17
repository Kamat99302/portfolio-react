import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { Typography, Button, Stack } from '@mui/material';
import { windowShadow } from '../theme/theme';
import StackTag from './StackTag';

type ProjectCardProps = {
    kicker: string
    title: string
    description: string
    tags: string[]
    image: string
    imageAlt: string
    caseStudyTo: string
    codeHref: string
    demoHref: string
}


export default function ProjectCard({kicker, title, description, tags, image, imageAlt, caseStudyTo, codeHref, demoHref}: ProjectCardProps){
    return(
        <Card sx={{display:'flex', flexDirection:{xs: 'column', md: 'row'}, boxShadow:windowShadow.simple, overflow:'hidden'}}>
            <Box sx={{ margin:3, borderRadius:1, width: {xs: '85%', md:310}, maxHeight: { xs: 260, md: 'none' }, objectFit: 'contain', }} component="img" src={image} alt={imageAlt}></Box>
            <Stack spacing={1.3} sx={{p:2.25}}>
                <Typography sx={{color:'primary.main'}} variant='caption'>{kicker}</Typography>
                <Typography variant='h4'>{title}</Typography>
                <Typography>{description}</Typography>
                <Stack direction="row"sx={{gap: 0.75, flexWrap:'wrap'}}>
                    { tags.map((tag)=><StackTag key={tag} label={tag} variant='neutral'/>) }
                </Stack>
                <Stack direction="row" spacing={1}>
                    <Button href={caseStudyTo} variant="text">Case study →</Button>
                    <Button href={codeHref} variant="text">Code</Button>
                    <Button href={demoHref} variant="text">Live demo</Button>
                </Stack>
            </Stack>
        </Card>
    )
}