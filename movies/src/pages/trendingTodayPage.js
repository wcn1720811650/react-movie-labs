import React, { useState } from "react";
import { getTrendingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import { useParams } from "react-router-dom";


const TredingPage = () => {
  
  const {timeWindow} = useParams()
  const {data, error, isLoading, isError} = useQuery(['trending',{timeWindow}], getTrendingMovies)

  if(isLoading) {
    return <Spinner />
  }

  if(isError) {
    return <h1> {error.message}</h1>
  }
  const movies = data.results;

  return (
      <PageTemplate
        title={timeWindow === 'day' ? 'Trending Today' : 'Trending This Week'}
        movies={movies}
        action={(movie) => {
          return <AddToFavoritesIcon movie={movie} />;
        }}
      />
    
  );
};
export default TredingPage;