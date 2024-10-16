import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import useMovie from "../hooks/useMovie";

const MoviePage = (props) => {
  const { id } = useParams();
  const [movie] = useMovie(id)
  // const [movie, setMovie] = useState(null);

  // useEffect(() => {
  //   getMovie(id).then((movie) => {
  //     setMovie(movie);
  //   });
  // }, [id]);

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;