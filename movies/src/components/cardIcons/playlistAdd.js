import React, { useContext }from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistAdd from '@mui/icons-material/PlaylistAdd'
import { MoviesContext } from "../../contexts/moviesContext";

const PlayListAddIcon = ({ movie,onAddToWatchlist  }) => {
  const context = useContext(MoviesContext);

    const handleAddToMustWatch = (e) => {
      e.preventDefault();
      context.addToMustWatch(movie);
    };

  
  return (
    <IconButton aria-label="add to mustWatch" onClick={onAddToWatchlist}>
      <PlaylistAdd color="primary" fontSize="large" />
    </IconButton>
  );
};

export default PlayListAddIcon;