import { Card, Stack, Typography } from "@mui/material"
import { windowShadow, colors } from '../theme/theme';
import StackTag from "./StackTag";
type ExperienceCardProps = {
    date: string
    role: string
    place: string
    description: string
    tagLabel?: string[]
}

export default function ExperienceCard({date, role, place, description, tagLabel}: ExperienceCardProps){
    return(
        
        <Card sx={{boxShadow:windowShadow.simple, overflow:'hidden'}}>
            <Stack spacing={1} sx={{p:1.5}}>
                <Typography sx={{color:'primary.main'}} variant='caption'>{date}</Typography>
                <Typography variant='h4'>{role}</Typography>
                <Typography variant="body2" sx={{color:colors.neutral[400]}}>{place}</Typography>
                <Typography variant="body2" sx={{color:colors.neutral[300]}}>{description}</Typography> 
                <Stack direction={"row"}  spacing={1}>
                {tagLabel && tagLabel.map((tag)=><StackTag key={tag} label={tag} variant="accent"/>)}
                </Stack>
            </Stack>
           
            
        </Card>
       
    )
}