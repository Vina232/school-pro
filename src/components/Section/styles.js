

import { makeStyles } from '@mui/styles';



export const useStyles = makeStyles(theme => ({
    textContainer: {
        border: '1px solid red',
        padding: 25,
        textAlign: 'justify',
    },
    boxContainer: {
        border: '1px solid blue',
        width: 'calc(100%-30px)',
        display: 'none',
        
        // [theme.breakpoints.down('md')]: {
        //   width: '600px',
        // },
   [theme.breakpoints.down('md')]: {
          display: 'block',

        },
    }

    
}));


