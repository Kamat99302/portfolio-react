import { List, Typography, Stack } from "@mui/material";
import {ListItem} from "@mui/material";
import { colors, fontMono } from "../theme/theme";
import Divider from '@mui/material/Divider';
import { Fragment } from "react"



type ChallengesListProps = {
    challenges: string[]
}

export default function ChallengesList({challenges}: ChallengesListProps){
    return(
        
        <List>
                {
                challenges.map((item, index)=>
                <Fragment key={item}>
                    <ListItem >
                        <Stack direction={"row"} spacing={1.5}> 
                            <Typography sx={{color:'primary.main', fontFamily:fontMono}}>✓</Typography>
                            <Typography sx={{color:colors.neutral[300]}}>{item}</Typography>
                        </Stack>
                    </ListItem>
                    {index < challenges.length - 1 && <Divider sx={{border: 'none',height: '1px', background: `linear-gradient(to right, transparent, ${colors.divider} 48px, ${colors.divider} calc(100% - 48px), transparent)`}} component="li" />}
                </Fragment>
                )
            }
        </List>
        
    )
}