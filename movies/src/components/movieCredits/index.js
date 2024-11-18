import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { getMovieCredits } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'


export default function MovieCredits({ movie }) {
  const {data, error, isLoading, isError} = useQuery(
    ["credits", { id:movie.id}],
    getMovieCredits
  );

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  const credits = data.cast
  console.log(data.cast);
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 550}} aria-label="credits table">
        <TableHead>
          <TableRow>
            <TableCell align="left">picture</TableCell>
            <TableCell align="left">character</TableCell>
            <TableCell align="left">name</TableCell>
            <TableCell align="left">gender</TableCell>
            <TableCell align="left">known for department</TableCell>
            <TableCell align="left">Original Name</TableCell>
            <TableCell align="left">More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {credits.map((r) => (
            <TableRow key={r.id}>
               <TableCell>
                {r.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${r.profile_path}`}
                    alt={r.name}
                    style={{ width: 50, height: 75 }}
                  />
                ) : (
                  "No Image"
                )}
              </TableCell>
              <TableCell component="th" scope="row">{r.character}</TableCell>
              <TableCell > {r.name}</TableCell>
              <TableCell > {r.gender === "1"? "female":"male"}</TableCell>
              <TableCell > {r.known_for_department} </TableCell>
              <TableCell > {r.original_name}</TableCell>
              <TableCell > <Link
                  to={`/credits/${r.id}`}
                  state={{
                      credit: r,
                      movie: movie,
                  }}
                >
                  Details
                </Link></TableCell>

                
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}