import React, { useContext } from "react";
import { getNowPlayingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PlaylistAdd from '../components/cardIcons/playlistAdd'
import { MoviesContext } from "../contexts/moviesContext";

const NowPlayingMoviesPage = () => {

  const {data, error, isLoading, isError} = useQuery('nowplaying',getNowPlayingMovies)

  const { addToMustWatch } = useContext(MoviesContext);

  if(isLoading) {
    return <Spinner />
  }

  if(isError) {
    return <h1> {error.message}</h1>
  }
  const movies = data.results

  return (
    <PageTemplate
      title='NowPlaying Movies'
      movies={movies}
      action={(movie) => {
        return <PlaylistAdd movie={movie} onAddToWatchlist={() => addToMustWatch(movie.id)}/>
      }}
    />
  );
};
export default NowPlayingMoviesPage;