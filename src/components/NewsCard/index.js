import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, useTheme } from '@mui/material';
import { useStyles } from "./styles";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { blue } from '@mui/material/colors';

function NewsCard({cardImage,cardTitle,cardContent}) {
  const classes = useStyles();
  const theme = useTheme();

//   const StyledCardActionArea = styled(CardActionArea)(({theme}) => `
//     .MuiCardActionArea-focusHighlight {
//         background: transparent;
//     }
// `);

  return (
    <Card sx={{ 
      maxWidth: 450,
      padding: 5,
    // height: 600,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignContent: "flex-start",
      m: 4,
      // border: "none",
      // boxShadow: "none",
      "&:hover": {backgroundColor: "transparent" },
      } }>
      <CardActionArea sx={{
        "&:hover": {backgroundColor: "transparent" },
      }}>
        <CardMedia
          component="img"
          height="300"
          image={cardImage}
          alt="/"
        />
        <CardContent >
          {/* <Typography gutterBottom variant="h5" component="div" sx={{
            textAlign: "left",
            lineHeight: "60px",
          }}>
            {cardTitle}
          </Typography> */}
           <Typography variant='h3' component="div" sx={{
            textAlign: "left",
            lineHeight: "60px",
          }}> 
            {cardTitle}
          </Typography>  
          {/* <Typography variant="body2" color="text.secondary" sx={{
            fontSize: "1rem",
            textAlign: "left", 
            minHeight: "120px",
          }}>
            {cardContent}
          </Typography> */}
          <Typography variant="b1" color={theme.palette.grey.main} sx={{
            fontSize: "1rem",
            textAlign: "left", 
            minHeight: "120px",
          }}>
            {cardContent}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        {/* <Button variant="contained" sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '240px',
          height: '60px',
          borderRadius: '0',
          fontSize: 20,
          ":hover":{
            bgcolor: "white",
            color: "blue",
          }  
        }}>READ MORE<ArrowCircleRightIcon sx={{ 
          color: blue,
          mx: "10", 
          }} />
          </Button> */}
          <Button variant="btn" sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '240px',
          height: '60px',
          borderRadius: '0',
          fontSize: 20,
          border: `2px solid ${theme.palette.button.normal}`,
          background: theme.palette.button.normal,
          ":hover":{
            bgcolor: theme.palette.button.hover,
            color: theme.palette.button.hoverText,
          }  
        }}>READ MORE<ArrowCircleRightIcon sx={{ 
          color: blue,
          mx: "10", 
          }} />
          </Button>

      </CardActions>
    </Card>
  );
}

export default NewsCard