import React from "react";
import { Grid, Typography, TextContainer, Stack, Box } from "@mui/material";
import compass from "../../assets/icon/compass.svg";
import calendar from "../../assets/icon/calendar.svg";
import users from "../../assets/icon/users.svg";
import ExploreIcon from "@mui/icons-material/Explore";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupsIcon from "@mui/icons-material/Groups";
// import { makeStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import IconButton from "@mui/material/IconButton";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";


function LogoSection() {

const classes = useStyles();
  return (
    <>
      
        <Grid container direction="row" alignItems="center" spacing={5} className={classes.gridContainerStyle}>
          <Grid item xs={12} md={4}>
            <Link to=" " target="_blank" className={classes.iconLink}>
               <ExploreIcon  sx={{
                  width: 100,
                  height: 100,
               }}  className={classes.icon} />
               <Typography align="start">COMPASS</Typography>
            </Link>
          </Grid>

          <Grid item xs={12} md={4}>
            <Link to=" " target="_blank" className={classes.iconLink}>
              <CalendarMonthIcon  sx={{
                  width: 100,
                  height: 100,
               }}  className={classes.icon}  />
                <Typography align="start">CALENDAR</Typography>
            </Link>
          </Grid>

          <Grid item xs={12} md={4}>
            <Link to=" " target="_blank" className={classes.iconLink}>
             
                <GroupsIcon  sx={{
                  width: 100,
                  height: 100,
               }}  className={classes.icon}  />

              <Typography align="start">THEIRCARE</Typography>
            </Link>
          </Grid>
        </Grid>
  
    </>
  );
}

export default LogoSection;
