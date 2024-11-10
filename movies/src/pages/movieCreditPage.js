import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import { Box, Typography } from "@mui/material";
import {
  Transgender as TransgenderIcon,
  DriveFileRenameOutline as RenameIcon,
  RecentActors as CharacterIcon,
  LocalFireDepartment as PopularityIcon,
  HomeWork as DepartmentIcon,
  Badge as BadgeIcon,
} from '@mui/icons-material';

const MovieCreditPage = () => {
  const { state: { movie, credit } } = useLocation();
  const { profile_path, name, original_name, gender, character, known_for_department, popularity } = credit;

  return (
    <PageTemplate movie={movie}>
      <Typography variant="h4" component="h1" style={{margin:"10px 0"}}>Actor Introduction</Typography>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <img
          src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
          alt={name}
          style={{ marginRight: "100px" }}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5" style={{margin:"20px 0"}}>
            <RenameIcon color="primary" /> Name: {name}
          </Typography>
          <Typography variant="h5" style={{marginBottom:"20px"}}>
            <BadgeIcon color="primary" /> Original Name: {original_name}
          </Typography>
          <Typography variant="h5" style={{marginBottom:"20px"}}>
            <TransgenderIcon color="primary" /> Gender: {gender === "1" ? "Female" : "Male"}
          </Typography>
          <Typography variant="h5" style={{marginBottom:"20px"}}>
            <CharacterIcon color="primary" /> Character: {character}
          </Typography>
          <Typography variant="h5" style={{marginBottom:"20px"}}>
            <DepartmentIcon color="primary" /> Department: {known_for_department}
          </Typography>
          <Typography variant="h5" style={{marginBottom:"20px"}}>
            <PopularityIcon color="primary" /> Popularity: {popularity}
          </Typography>
        </Box>
      </Box>
    </PageTemplate>
  );
};

export default MovieCreditPage;
