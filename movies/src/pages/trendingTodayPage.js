import React from "react";
import { getTrendingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'


const TredingPage = (props) => {
  
  const {data, error, isLoading, isError} = useQuery(['trending',{day:'day'}],getTrendingMovies)

  if(isLoading) {
    return <Spinner />
  }

  if(isError) {
    return <h1> {error.message}</h1>
  }
  const movies = data.results;

  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))


  return (
    <PageTemplate
      title='Treding Today'
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
  );
};
export default TredingPage;