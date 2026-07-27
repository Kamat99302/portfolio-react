import { Paper, Typography, Stack, Box, type SxProps } from "@mui/material"
import { code, fontMono, windowShadow, colors } from "../theme/theme"
import type { Theme } from "@mui/material/styles"

type EditorWindowProps = {
    title: string
    children: React.ReactNode
    sx?: SxProps<Theme>
}



export default function EditorWindow({title, children, sx}:EditorWindowProps){
    return(
       <Paper sx={{boxShadow:windowShadow.simple, overflow:'hidden', ...sx}}>
        <Stack sx= {{flexDirection:"row", alignItems: "center", gap:0.75, px: 1.5, py: 1, borderBottom: 1, borderColor: 'divider'}}>
            <Box sx={{width:'8px', height:'8px', borderRadius:'50%', backgroundColor: colors.neutral[700]}}/>
            <Box sx={{width:'8px', height:'8px', borderRadius:'50%', backgroundColor:colors.neutral[700]}}/>
            <Box sx={{width:'8px', height:'8px', borderRadius:'50%', backgroundColor: colors.accentDark}}/>
            <Typography
            sx={{fontFamily: fontMono, fontSize:11, color:code.filename, mx:0.9}}>
                {title}
            </Typography>
        </Stack>
        <Box sx={{fontFamily: fontMono, fontSize:11, px:2, py:1}}>
            {children}
        </Box>
        
       </Paper>
    )
}