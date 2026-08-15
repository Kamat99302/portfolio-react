import { Stack, Typography } from "@mui/material"
import type { StackTagVariant } from "./StackTag"
import StackTag from "./StackTag"
import { colors, fontMono } from "../theme/theme"

type Skill = {
    label: string
    variant: StackTagVariant
}

type SkillGroupProps = {
    label: string           // "frontend/", "tools/"
    suffix?: string         // " in progress" (optionnel, en gris)
    skills: Skill[]
  }

export default function SkillGroup({label, suffix, skills}:SkillGroupProps){  
    return(
        <Stack spacing={1}>
            <Stack direction={"row"} spacing={1} sx={{alignItems:'baseline'}} >
                <Typography sx={{fontFamily:fontMono, color: colors.neutral[400]}}>{label}</Typography>
                {suffix && <Typography sx={{ fontFamily: fontMono, color: colors.neutral[600]}} >{suffix}</Typography>}
            </Stack>
            <Stack direction={"row"} sx={{gap:1, flexWrap: 'wrap'}}>
                {skills.map((skill)=>
                    <StackTag key={skill.label} label={skill.label} variant={skill.variant}/>)}
            </Stack>
        </Stack>
    )
}