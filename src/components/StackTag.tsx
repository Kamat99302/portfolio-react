import { Chip } from "@mui/material"
import { colors} from "../theme/theme"


export type StackTagVariant = 'accent' | 'neutral' | 'outline'

export type StackTagProps = {
    label: string
    variant: StackTagVariant
}

const styles = {
    accent:{backgroundColor:colors.accentBgTag, color: colors.accentTxTag},
    neutral:{backgroundColor:colors.neutral[800], color: colors.text},
    outline:{color:colors.accent, backgroundColor:'transparent', border:1, borderColor: colors.accent}
}

export default function StackTag({label, variant}: StackTagProps){
    return(
        <Chip sx={styles[variant]} label={label}/>
    )
}