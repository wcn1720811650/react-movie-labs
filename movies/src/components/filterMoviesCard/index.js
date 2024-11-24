import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const formControl = 
  {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)"
  };

export default function FilterMoviesCard(props) {

  const { data, error, isLoading, isError } = useQuery("genres", getGenres);
  
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const genres = data.genres;
  if (genres[0].name !== "All"){
    genres.unshift({ id: "0", name: "All" });
  }

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); 
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };
  const handleStartDateChange = (e) =>{
    handleChange(e, "startDate", e.target.value)
  }
  const handleEndDateChange = (e) =>{
    handleChange(e, "endDate", e.target.value)
  }
  const handleSortOrder = (e) => {
    handleChange(e, "sortOrder", e.target.value)
  }

  return (
    <Card 
      sx={{
        backgroundColor: "rgb(204, 204, 0)"
      }} 
      variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
        </Typography>
        <TextField
          sx={{...formControl}}
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          value={props.titleFilter}
          onChange={handleTextChange}
        />
        <FormControl sx={{...formControl}}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            defaultValue=""
            value={props.genresFilter}
            onChange={handleGenreChange}
          >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        
        <TextField
          sx={{...formControl}}
          id="start-date"
          label="Start Date"
          type="date"
          variant="filled"
          value={props.startDateFilter}
          onChange={handleStartDateChange}
        >
        </TextField>

        <TextField
          sx={{...formControl}}
          id="end-date"
          label="End Date"
          type="date"
          variant="filled"
          value={props.endDateFilter}
          onChange={handleEndDateChange}
        >
        </TextField>

        <FormControl sx={{...formControl}}>
          <InputLabel id="sort-label"> Sort Order </InputLabel>
          <Select
            labelId="sort-label"
            id="sort-select"
            value={props.sortOrder}
            onChange={handleSortOrder}
          >
            <MenuItem value="origin">Origin</MenuItem>
            <MenuItem value="dateAsc">Release Date Ascending</MenuItem>
            <MenuItem value="dateDesc">Release Date Descending</MenuItem>
            <MenuItem value="popularityAsc">Popularity Ascending</MenuItem>
            <MenuItem value="popularityDesc">Popularity Descending</MenuItem>
            <MenuItem value="voteAsc">Vote Ascending</MenuItem>
            <MenuItem value="voteDesc">Vote Descending</MenuItem>

          </Select>
        </FormControl>

      </CardContent>
      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Filter"
      />
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}