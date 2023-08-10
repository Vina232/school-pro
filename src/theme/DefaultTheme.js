import { createTheme } from "@mui/material";


export const DefaultTheme = createTheme({
  palette: {
    primary: {
        main: '#90caf9',
        light: '#e3f2fd',
        dark: '#42a5f5',
    },
    error: {
        main: '#f44336',
        light: '#e57373',
        dark: '#d32f2f',
    },
    grey: {
         main: '#808080',
        light: '#ffffff',
        dark: '#000000',
    },
    button:{
        normal: '#187BCD',
        hover: 'white',
        hoverText: '#187BCD',
    },
    input:{
        bgc: 'orange',
        text: 'red',
    }
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: `"Roboto","Helvetica","Arial","sans-serif"`,
    h1:{
        fontSize: '3rem',
        fontWeight: 500,
    },
    h2:{
        fontSize: '2rem',
        fontWeight: 400,
    },
      h3:{
        fontSize: '1.5rem',
        fontWeight: 400,
    },
    b1:{
        fontSize: '2rem',
        fontWeight: 400,
    },
    b2:{
        fontSize: '1.5rem',
        fontWeight: 300,
    },
    btn:{
        fontFamily: '"Roboto","Helvetica","Arial","sans-serif"',
        fontWeight: 400,
        fontSize: '1rem',
        textTransform: 'uppercase',
      
    },
    p1:{
        fontSize: '1.2rem',
        fontWeight: 300,
    },
        p2:{
        fontSize: '1.1rem',
        fontWeight: 300,
    },
  },
});