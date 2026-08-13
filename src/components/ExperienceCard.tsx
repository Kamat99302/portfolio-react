import { Card, Stack, Typography } from "@mui/material"
import { windowShadow, colors } from '../theme/theme';
import StackTag from "./StackTag";
import type { StackTagVariant } from "./StackTag";
type ExperienceCardProps = {
    date: string
    title: string
    place: string
    description: string
    tagLabel?: string[]
    variant: StackTagVariant
}

export default function ExperienceCard({date, title, place, description, tagLabel, variant}: ExperienceCardProps){
    return(
        <Card sx={{boxShadow:windowShadow.simple, overflow:'hidden'}}>
            <Stack spacing={1} sx={{p:1.5}}>
                <Typography sx={{color:'primary.main'}} variant='caption'>{date}</Typography>
                <Typography variant='h4'>{title}</Typography>
                <Typography variant="body2" sx={{color:colors.neutral[400]}}>{place}</Typography>
                <Typography variant="body2" sx={{color:colors.neutral[300]}}>{description}</Typography> 
                <Stack direction={"row"}  spacing={1}>
                {tagLabel && tagLabel.map((tag)=><StackTag key={tag} label={tag} variant={variant}/>)}
                </Stack>
            </Stack>
           
            
        </Card>
       
    )
}