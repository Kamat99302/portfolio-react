import { Typography } from "@mui/material"
import { fontMono, colors } from "../theme/theme"
import type { ReactNode } from "react"

type CodeBlockProps = {
    children: ReactNode
}

export default function CodeBlock({children}:CodeBlockProps){

    return(
     <Typography sx={{fontFamily:fontMono, color:colors.neutral}} component="pre">
        {children}
     </Typography>
     
    )
}