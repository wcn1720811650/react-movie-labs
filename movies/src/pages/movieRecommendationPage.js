import React from "react";
import { useParams } from "react-router-dom";
import MovieRecommendations from "../components/movieRecommendations";

const MovieRecommendationPage = () => {
  const { recommendationId } = useParams();

  return (
    <div>
      <h1>Movie Recommendations</h1>
      <MovieRecommendations recommendationId={recommendationId} />
    </div>
  );
};

export default MovieRecommendationPage;

