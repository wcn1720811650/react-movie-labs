import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import ScrollToTop from "react-scroll-to-top";


function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [startDateFilter,setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");
  const [sortOrder, setSetOrder] = useState("")
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
    .sort((a,b)=>{
      const firstDate = new Date(a.release_date)
      const secDate = new Date(b.release_date)
      const firstPopularity = a.popularity
      const secPopularity = b.popularity
      const firstVote = a.vote_average
      const secVote = b.vote_average

      return sortOrder === "dateAsc" ? firstDate-secDate : sortOrder === "dateDesc" ? secDate-firstDate : 
      sortOrder === "popularityAsc" ? firstPopularity-secPopularity : sortOrder === "popularityDesc" ? secPopularity-firstPopularity : 
      sortOrder === "voteAsc" ? firstVote-secVote : sortOrder === "voteDesc" ? secVote-firstVote : 0
    })


  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "genre") setGenreFilter(value);
    else if (type === "startDate") setStartDateFilter(value);
    else if (type === "endDate") setEndDateFilter(value);
    else if (type === "sortOrder") setSetOrder(value);
  };

  return (
    <div style={{ padding: "16px", height: "100vh", display: "flex", flexDirection: "column" }}>
      <div >
        <Header title={title} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          height: "calc(100vh - 64px)", 
          gap: "16px",
        }}
      >
        
        <div
          style={{
            maxWidth: "300px", 
            height: "100%", 
          }}
        >
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            startDateFilter={startDateFilter}
            endDateFilter={endDateFilter}
            sortOrder={sortOrder}
          />
        </div>


        <div
          style={{
            flexGrow: 1, 
            height: "100%", 
          }}
        >
          <MovieList action={action} movies={displayedMovies} />
        </div>
      </div>


      <ScrollToTop smooth color="blue" />
    </div>
  );
}
export default MovieListPageTemplate;