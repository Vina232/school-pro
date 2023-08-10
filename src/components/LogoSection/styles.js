import { makeStyles } from '@mui/styles';



export const useStyles = makeStyles(theme => ({
    
  gridContainerStyle:{
    width: "100%",
          height: "auto",
          backgroundColor: "lightgrey",
          display: "flex",
          justifyContent: "space-around",
  },

iconLink: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px auto",
    textDecoration: 'none',
    "&:hover": {
      textDecoration: 'none',
      color: 'primary',
    },
  },

  icon: {
    width: '200px',
    height: '200px',
    borderRadius: '30px',
    margin: "20px",
    color: "blue",
    // fontSize: "large",
    "&:hover": {
      color: "orange",
      cursor: 'pointer',
    
    },
    
                
                 
}

    
}));


