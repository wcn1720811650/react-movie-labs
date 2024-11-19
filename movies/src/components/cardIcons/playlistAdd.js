import React from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistAdd from '@mui/icons-material/PlaylistAdd'

const PlayListAddIcon = ({ movie,onAddToWatchlist  }) => {

  
  return (
    <IconButton aria-label="add to mustWatch" onClick={onAddToWatchlist}>
      <PlaylistAdd color="primary" fontSize="large" />
    </IconButton>
  );
};

export default PlayListAddIcon;