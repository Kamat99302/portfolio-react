import { Card, Stack, Typography } from "@mui/material"
import { windowShadow } from "../theme/theme"


type LearningCardProps = {
    kicker: string
    text: string
}

export default function LearningCard({kicker, text}:LearningCardProps){
    return(
        <Card sx={{boxShadow:windowShadow.simple, overflow:'hidden'}}>
            <Stack spacing={1} sx={{p:1.25}}>
                <Typography sx={{color:'primary.main'}} variant='caption'>{kicker}</Typography>
                <Typography sx={{ color: 'text.primary', opacity: 0.8 }}>{text}</Typography>
            </Stack>
        </Card>
    )
}