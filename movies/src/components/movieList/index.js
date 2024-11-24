import React, { useState } from "react";
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid2";
import { Stack } from "@mui/system";
import { Pagination } from "@mui/material";

const MovieList = (props) => {
  const [currentPage, setcurrentPage] = useState(1);
  const moviesShowPerPage = 8;

  const numOfLastMovie = currentPage*moviesShowPerPage
  const numOfFirstMovie = numOfLastMovie - moviesShowPerPage
  const currentMovies = props.movies.slice(numOfFirstMovie,numOfLastMovie);

  const handlePageChange = (event, value) => {
    setcurrentPage(value)
  }
  
  let movieCards = currentMovies.map((m) => (
    <Grid key={m.id} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
      <Movie key={m.id} movie={m} action={props.action} />
    </Grid>
  ));
  return (
    <>
      <Grid container spacing={2}>
        {movieCards}
      </Grid>
      <Stack spacing={2} alignItems="center" sx={{marginTop: "20px"}}>
        <Pagination 
          count={Math.ceil(props.movies.length / moviesShowPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Stack>
    </>
    );
};

export default MovieList;