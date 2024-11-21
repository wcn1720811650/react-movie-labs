import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid2";
import ScrollToTop from "react-scroll-to-top";

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [startDateFilter,setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("")

  const genreId = Number(genreFilter);

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    .filter((m) => {
      const releaseDate = new Date(m.release_date);
      const startDate = new Date(startDateFilter);
      const endDate = new Date(endDateFilter);

      const afterStartDate = startDateFilter ? releaseDate >= startDate : true;
      const beforeEndDate = endDateFilter ? releaseDate <= endDate : true;

      return afterStartDate && beforeEndDate;
    })

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "genre") setGenreFilter(value);
    else if (type === "startDate") setStartDateFilter(value);
    else if (type === "endDate") setEndDateFilter(value);
  };

  return (
    <Grid container>
      <ScrollToTop smooth color="blue" />
      <Grid size={12}>
        <Header title={title} />
      </Grid>
      <Grid container sx={{flex: "1 1 500px"}}>
        <Grid 
          key="find" 
          size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} 
          sx={{padding: "20px"}}
        >
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            startDateFilter={startDateFilter}
            endDateFilter={endDateFilter}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;