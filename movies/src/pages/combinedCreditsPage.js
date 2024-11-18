import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getCombinedCredits } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { Box, Typography, Paper, Grid } from "@mui/material";
import picture from "../images/null.jpg";
import ScrollToTop from "react-scroll-to-top";

const CombinedCreditsPage = () => {
    const location = useLocation();
    const { id } = useParams();
    const personId = location.state.personId || id;
    const { data, error, isLoading, isError } = useQuery(
        ["combinedCredits", { personId }],
        getCombinedCredits
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        console.error("Error fetching combined credits:", error.message);
        return <h1>{`Error: ${error.message}`}</h1>;
    }

    const credits = data.cast || [];

    return (
        <Box sx={{ padding: 3 }}>
            <ScrollToTop smooth color="blue" />
            <Typography variant="h4" component="h1" gutterBottom>
                Combined Credits for Person ID: {personId}
            </Typography>
                <Grid container spacing={2}>
                    {credits.map((credit) => (
                        <Grid item xs={12} md={6} lg={4} key={credit.id}>
                            <Paper elevation={3} sx={{ padding: 2 }}>
                                <img
                                    src={
                                        credit.poster_path
                                            ? `https://image.tmdb.org/t/p/w200${credit.poster_path}`
                                            : picture
                                    }
                                    style={{ width: "100%", height: "auto", marginBottom: 10 }}
                                    alt={credit.title || credit.name}
                                />
                                <Typography variant="h6">{credit.title || credit.name}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {credit.character ? `Role: ${credit.character}` : "N/A"}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {credit.media_type === "movie" ? "Movie" : "TV Show"}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
        </Box>
    );
};

export default CombinedCreditsPage;
