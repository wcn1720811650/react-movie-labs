import React from "react";
import { useQuery } from "react-query";
import { getMovieRecommendations } from "../../api/tmdb-api";
import Spinner from "../spinner";
import Grid from "@mui/material/Grid2";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const AllMovieRecommendations = ({ recommendationId }) => {
  const { data, error, isLoading, isError } = useQuery(
    ["recommendations", { id: recommendationId }],
    getMovieRecommendations
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const recommendations = data.results;

  return (
    <Grid container spacing={5} style={{ padding: "15px" }}>
      <Grid item xs={12}>
        <h2>Recommended Movies</h2>
        <ImageList
          sx={{
            width: "100%",
            height: "100vh",
          }}
          cols={3}
        >
          {recommendations.map((rec) => (
            <ImageListItem key={rec.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${rec.backdrop_path}`}
                alt={rec.title}
                loading="lazy"
              />
              <p>{rec.title}</p>
              <p>{rec.overview}</p>
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );
};

export default AllMovieRecommendations;
