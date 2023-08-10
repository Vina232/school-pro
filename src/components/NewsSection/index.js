import React from "react";
import { Box, Grid } from "@mui/material";
import NewsCard from "../NewsCard";
import { newsData } from "../../utils/tempData";


function NewsSection() {
  return (
    <div>
     
        <Grid
          container
          sx={{
            margin: 10,
            display: "flex",
            // alignItems: 'center',
            justifyContent: "space-between",
          }}
        >
          {
            newsData?.map((el, index)=>{
              return (
                <Grid item xs={12} md={6} 
            key={index}
          >
            <NewsCard
              cardImage={el.cardImage}
              cardTitle={el.cardTitle}
              cardContent={el.cardContent}
            />
          </Grid>
              )
            })
          }
        </Grid>
      
    </div>
  );
}

export default NewsSection;
