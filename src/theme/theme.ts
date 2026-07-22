import { createTheme } from "@mui/material/styles"

//Palette nocturne
export const colors = {
    bg:      '#161826',  // fond de page
    surface: '#232532',  // fenêtres éditeur, cartes
    text:    '#e9e9ed',
    accent:      '#9184d9',  // violet:  traits, jamais en aplat
    accentLight: '#b5abfc',  // accent-400
    accentDark:  '#5d5294',  // accent-700: 3e point des fenêtres
    accentBgTag: '#423a6a',  // accent-800: fond des tags stack
    accentTxTag: '#f5f4ff',  // accent-100: texte des tags stack
    divider: 'rgba(233, 233, 237, 0.16)',
    neutral: {
    300: '#cfd3e5', 400: '#b2b6ca', 500: '#9397ab',
    600: '#75798c', 700: '#595d6c', 800: '#3f424d',
    900: '#292b31',
}} as const // les valeurs de l'objet sont traitées comme immuables par TS 


//coloration de la syntaxe des fenêtres éditeur de code
export const code = {
    keyword: '#b5abfc',  // const, import, as const
    string:  '#d2cefd',  // "React", "open to remote"
    plain:   '#cfd3e5',  // code par défaut
    comment: '#75798c',  // // goal — …
    mark:    '#9184d9',  // ✓, $, // TODO:, hash git
    filename:'#9397ab',  // profile.ts dans la barre de titre
}

export const fontMono = '"JetBrains Mono", monospace'

//ombres des fenêtres éditeur de code
export const windowShadow = {
    simple: '0 0 0 1px #3f424d',
    elevated: '0 0 0 1px #595d6c, 0 6px 18px rgba(0, 0, 0, 0.55)'
}







export const theme = createTheme({
    typography:{
        fontFamily: 'Inter, sans-serif'
    }
})