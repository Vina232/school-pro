import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import { aboutLinks, internationalLinks, offerLinks, resourceLinks } from "../../utils/tempData";


function FootLinks() {

  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.gridContainerStyle}>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <Stack>
            <Typography variant="h5" color="blue">What we offer</Typography>
            <ul className={classes.ulStyle}>
             
              {offerLinks.map((el) => (
                <li>
                  <Link to={el.linkPath} className={classes.footerLinkStyle}>{el.linkTitle}</Link>
                </li>
              ))}
            </ul>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <Stack>
            <Typography variant="h5" color="blue" >Resources</Typography>
            <ul className={classes.ulStyle}
            >
              {resourceLinks.map((el) => (
                <li>
                  <Link to={el.linkPath} className={classes.footerLinkStyle}>{el.linkTitle}</Link>
                </li>
              ))}
            </ul>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <Stack>
            <Typography variant="h5" color="blue">About</Typography>
            <ul className={classes.ulStyle}>
              {aboutLinks.map((el) => (
                <li>
                  <Link to={el.linkPath} className={classes.footerLinkStyle}>{el.linkTitle}</Link>
                </li>
              ))}
            </ul>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={3}>
          <Stack>
            <Typography variant="h5" color="blue">International</Typography>
            <ul className={classes.ulStyle}>
              {internationalLinks.map((el) => (
                <li>
                  <Link to={el.linkPath} className={classes.footerLinkStyle}>{el.linkTitle}</Link>
                </li>
              ))}
            </ul>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default FootLinks;
