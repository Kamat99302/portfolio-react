import { Stack, Typography } from "@mui/material"
import { fontMono } from "../theme/theme"
import { colors } from "../theme/theme"

type SectionHeadingProps = {
    number: string
    title: string
    path: string
    description?: string
}

export default function SectionHeading({number, title, path, description}: SectionHeadingProps){
    return(
        <Stack spacing={0.5}>
            <Stack direction="row" sx={{alignItems:'baseline'}} spacing={1.8} >
                <Typography sx={{fontFamily: fontMono, color:'primary.main',fontWeight:500, fontSize:12}}>{number}</Typography>
                <Typography variant="h2">{title}</Typography>
                <Typography sx={{fontFamily: fontMono ,color:colors.neutral[600], fontSize:10}} >{path}</Typography>
            </Stack>
            {description && 
                    <Typography sx={{color:colors.neutral[500], fontSize:14}}>
                    {description}
                    </Typography>}
        </Stack>
    )
}