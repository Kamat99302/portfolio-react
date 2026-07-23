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
} as const

export const fontMono = '"JetBrains Mono", monospace'

//ombres des fenêtres éditeur de code
export const windowShadow = {
    simple: '0 0 0 1px #3f424d',
    elevated: '0 0 0 1px #595d6c, 0 6px 18px rgba(0, 0, 0, 0.55)'
} as const

export const theme = createTheme({

    palette: {
        mode: 'dark',
        background: { default: colors.bg, paper: colors.surface },
        primary: {
          main: colors.accent,
          light: colors.accentLight,
          dark: colors.accentDark,
          contrastText: colors.bg,
        },
        text: { primary: colors.text, secondary: colors.neutral[400] },
        divider: colors.divider,
      },

    shape: { borderRadius: 8 },   // fenêtres/cartes ; 4 pour les petites surfaces
    spacing: 8,                   // sx: p={2} = 16px, gap={3} = 24px…
    
    typography: {
        fontFamily: '"Inter", system-ui, sans-serif',
        // hiérarchie = taille + espace, poids max 500 (jamais bold)
        h1: { fontSize: 56, fontWeight: 500, lineHeight: 1.1, letterSpacing: '-0.015em' },
        h2: { fontSize: 28, fontWeight: 500, lineHeight: 1.15, letterSpacing: '-0.015em' },
        h3: { fontSize: 24, fontWeight: 500, lineHeight: 1.2 },  // sections page détail
        h4: { fontSize: 19, fontWeight: 500, lineHeight: 1.25 }, // titres de carte
        body1: { fontSize: 15, lineHeight: 1.6 },
        body2: { fontSize: 13.5, lineHeight: 1.6 },   // corps des cartes
        caption: {  // kickers ("FRONT-END DEVELOPER · …", "2026 · REACT APP")
        fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
        },
        button: { fontSize: 14, fontWeight: 500, textTransform: 'none' },
    },

    components: {
        // PIÈGE MUI : en mode dark, Paper ajoute un voile clair via
        // backgroundImage selon l'elevation, on le coupe partout.
        MuiPaper: {
            defaultProps: { elevation: 0 },
            styleOverrides: { root: { backgroundImage: 'none' } },
        },
        // Boutons Nocturne : le primaire est un contour accent, jamais un aplat.
        MuiButton: {
            defaultProps: { variant: 'outlined', disableElevation: true },
            variants: [
            {
                props: { variant: 'outlined', color: 'primary' },
                style: {
                '&:hover': { backgroundColor: 'rgba(145, 132, 217, 0.12)' },
                },
            },
            ],
        },
        MuiChip: {
            styleOverrides: { //"Je veux modifier le CSS par défaut du composant"
            root: { fontSize: 11, height: 24, borderRadius: 6 },
            },
        },
        MuiLink: { defaultProps: { underline: 'hover' } },
        // Focus
        MuiCssBaseline: {
            styleOverrides: `
            :focus-visible { outline: 2px solid #9184d9; outline-offset: 2px; }
            ::selection { background: rgba(145, 132, 217, 0.3); }
            `,
        },

    },
})