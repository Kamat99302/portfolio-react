import { Stack, Typography } from "@mui/material"
import {Container, Divider} from "@mui/material"
import { colors } from "../theme/theme"


export default function Footer(){
    return(
        <Container maxWidth="lg" component="footer">
            <Divider sx={{border: 'none',height: '1px', background: `linear-gradient(to right, transparent, ${colors.divider} 48px, ${colors.divider} calc(100% - 48px), transparent)`}} />
            <Stack sx={{justifyContent:"space-between", mt:2, alignItems: {xs:'center', md:'stretch'}, gap: { xs: 1, md: 0 },}} direction={{xs:"column", md:"row"}}>
                <Typography sx={{color: colors.neutral[600], fontSize:12}}>© {new Date().getFullYear()} Matthieu Juan</Typography>
                <Typography sx={{color: colors.neutral[600], fontSize:11, fontFamily:"monospace"}}>Built with React · TypeScript · MUI</Typography>
            </Stack>
        </Container>
        
    )
}