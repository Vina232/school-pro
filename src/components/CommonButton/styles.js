import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(theme => ({
    buttonStyle:{
         display: 'flex',
          justifyContent: 'center',
          width: '240px',
          height: '60px',
          borderRadius: '0',
          fontSize: 20,
          ":hover":{
            bgcolor: "white",
            color: "blue",
          } 
    }

    
}));


