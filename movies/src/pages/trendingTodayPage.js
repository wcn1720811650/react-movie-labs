import React, { useState } from "react";
import { getTrendingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'


const TredingPage = () => {
  
  const [timeWindow,setTimeWindow] = useState('day')
  const {data, error, isLoading, isError} = useQuery(['trending',{timeWindow}], getTrendingMovies)

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
    <div>
      <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
        <button 
          onClick={() => setTimeWindow('day')} 
          style={{ marginRight: "10px", background: timeWindow === 'day' ? "#007BFF" : "#CCC", color: "#FFF", padding: "10px", borderRadius: "5px" }}
        >
          today
        </button>
        <button 
          onClick={() => setTimeWindow('week')} 
          style={{ background: timeWindow === 'week' ? "#007BFF" : "#CCC", color: "#FFF", padding: "10px", borderRadius: "5px" }}
        >
          this week
        </button>
      </div>
      <PageTemplate
        title={timeWindow === 'day' ? 'Trending Today' : 'Trending This Week'}
        movies={movies}
        action={(movie) => {
          return <AddToFavoritesIcon movie={movie} />;
        }}
      />
    </div>
  );
};
export default TredingPage;