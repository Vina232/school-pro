import { Grid, Typography, TextContainer, Stack, Box } from "@mui/material";
import React from "react";
import { useStyles } from "./styles";
import fruit from "../../assets/image/fruit.jpg";

function Section() {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item container xs={12}>
          <Grid item xs={12} md={6}>
            <Typography align="start" className={classes.textContainer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography align="start" className={classes.textContainer}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </Typography>
          </Grid>
        </Grid>

        <Grid item container xs={12}>
          <Grid item xs={12} md={6}>
            <Typography align="start" className={classes.textContainer}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography align="start" className={classes.textContainer}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            <Stack direction="row" spacing={5} style={{
              
              
              border: '3px solid black',
            }}>
              <Box>
                <img
                  src={fruit}
                  alt=""
                  style={{
                    width: "200px",
                    height: "200px",
                    border: "2px solid green",
                  }}
                />
              </Box>

              <Box>
                <img
                  src={fruit}
                  alt=""
                  style={{
                    width: "200px",
                    height: "200px",
                    border: "2px solid green",
                  }}
                />
              </Box>

              <Box>
                <img
                  src={fruit}
                  alt=""
                  style={{
                    width: "200px",
                    height: "200px",
                    border: "2px solid green",
                  }}
                />
              </Box>
              
              <Box>
                <img
                  src={fruit}
                  alt=""
                  style={{
                    width: "200px",
                    height: "200px",
                    border: "2px solid green",
                  }}
                />
              </Box>
            </Stack>
          </div>

          <div className={` ${classes.boxContainer}`}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Section;
