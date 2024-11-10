import React from "react";
import Typography from "@mui/material/Typography";

const MovieReview =  ({ credit }) => {
  return (
    <>
      <Typography variant="h5" component="h3">
        Credit By: {credit}
      </Typography>

      <Typography variant="h6" component="p">
        {credit} 
      </Typography>
    </>
  );
};
export default MovieReview