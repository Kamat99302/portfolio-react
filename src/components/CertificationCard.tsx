import { Card, Stack, Typography} from "@mui/material"
import { colors, fontMono, windowShadow } from "../theme/theme"
import StackTag from "./StackTag";
import type { StackTagVariant } from "./StackTag";
import {LinearProgress} from "@mui/material";

type CertificationCardProps = {
    kicker: string
    certificationTitle: string
    description: string
    status: string
    chipVariant: StackTagVariant
    progressionBarValue?:number
}


export default function CertificationCard({kicker, certificationTitle, description, status, chipVariant, progressionBarValue}: CertificationCardProps){
    return(
        <Card sx={{boxShadow:windowShadow.simple, overflow:'hidden'}}>
            <Stack spacing={1} sx={{p:1.5}}>
                <Typography sx={{color:'primary.main'}} variant='caption'>{kicker}</Typography>
                <Typography variant='h4'>{certificationTitle}</Typography>
                <Typography variant="body2" sx={{color:colors.neutral[300]}}>{description}</Typography> 
                {progressionBarValue !== undefined && 
                    <Stack direction={"row"} spacing={1.5} sx={{alignItems: 'center'}}> 
                        <LinearProgress sx={{flexGrow:1, height:4, borderRadius: 2}} value={progressionBarValue} variant="determinate" />
                        <Typography sx={{fontFamily: fontMono, fontSize:12, color: colors.neutral[400]}}>{progressionBarValue}%</Typography>
                    </Stack>
                }
                <Stack direction={"row"}  spacing={1}>
                    <StackTag label={status} variant={chipVariant}/>
                </Stack>
                
            </Stack>
           
            
        </Card>
    )
}