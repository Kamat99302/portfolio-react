import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Link, Stack, ToggleButtonGroup, ToggleButton, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import matt from '../img/matt.jpg'
import { useState } from 'react';


export default function Navbar(){
    const [lang, setLang] = useState<'fr'|'en'>('en')
    const [open, setOpen] = useState(false)

    const navLinks = ['Projects', 'About', 'Skills', 'Contact']

 
    
    return(
        <AppBar position='sticky' color='transparent' elevation={0}>
            <Toolbar sx={{justifyContent:'space-between'}}>
                <Stack direction="row" sx={{alignItems:'center'}}>
                    <Avatar sx={{mr:1.5}} alt='Matt Picture' src={matt}/>
                    <Typography sx={{fontWeight:600}}>matthieu.juan</Typography>
                    <Typography sx={{color:'primary.main'}}>.dev</Typography>
                </Stack>

                <Stack direction="row" 
                sx={{alignItems:'center', 
                    display: {xs: 'none', md: 'flex'}}} 
                    spacing={4}>
                    
                    {navLinks.map((linkName)=>
                        <Link key={linkName} variant='body2' href="#" underline='none'>{linkName}</Link>
                    )}

                    <ToggleButtonGroup 
                    onChange={(event, newLang) => {if (newLang !==null) setLang(newLang)}}
                    exclusive
                    size='small'
                    sx={{alignItems:'center'}}
                    value={lang}>
                        <ToggleButton sx={{height:30, width:35}} value="fr" aria-label='Français'>FR</ToggleButton>
                        <ToggleButton sx={{height:30, width:35}} value="en" aria-label='English'>EN</ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
                <IconButton
                        onClick={(()=>setOpen(true))}
                        sx={{display:{xs:'flex', md:'none'}}}
                        aria-label='open menu button'
                        >
                        <MenuIcon />
                    </IconButton>
                    <Drawer anchor='right' open={open} onClose={(()=>setOpen(false))}>
                        <Stack spacing={2} sx={{p:3, width:200}}>
                        {navLinks.map((linkName)=>
                        <Link key={linkName} variant='body2' href="#" underline='none' onClick={(()=>setOpen(false))}>{linkName}</Link>
                    )}
                        </Stack>
                    </Drawer>
            </Toolbar>
        </AppBar>
    )
}