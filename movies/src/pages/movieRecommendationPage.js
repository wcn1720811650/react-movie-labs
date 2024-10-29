import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import MovieRecommendations from "../components/movieRecommendations";

const MovieRecommendationPage = (props) => {
  let location = useLocation();
  const {movie, recommendation} = location.state;
  
  return (
    <PageTemplate movie={movie}>
      <MovieRecommendations recommendation={recommendation} />
    </PageTemplate>
  );
};

export default MovieRecommendationPage;