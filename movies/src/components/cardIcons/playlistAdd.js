import React from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistAdd from '@mui/icons-material/PlaylistAdd'

const PlayListAddIcon = ({  }) => {

  
  return (
    <IconButton aria-label="add to favorites" >
      <PlaylistAdd color="primary" fontSize="large" />
    </IconButton>
  );
};

export default PlayListAddIcon;