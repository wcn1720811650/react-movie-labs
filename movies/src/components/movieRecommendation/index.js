import React from "react";
import Typography from "@mui/material/Typography";

const MovieRecommendation =  ({ recommendation }) => {
  return (
    <>
      <Typography variant="h5" component="h3">
        Recommendation By: {recommendation.author}
      </Typography>

      <Typography variant="h6" component="p">
        {recommendation.content} 
      </Typography>
    </>
  );
};
export default MovieRecommendation