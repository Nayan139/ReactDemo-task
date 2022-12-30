import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import React from "react";
import MovieList from "../../data/movie.json";
import { Container } from "@mui/system";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Header } from "../Header/Header";

const Movie = () => {
  console.log("MovieList------->", MovieList);

  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Typography variant="h5" sx={{ marginBottom: "20px" }}>
          Movie List
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 6, md: 8 }}
        >
          {MovieList.map((movie, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={movie.Images[0]}
                    alt="green iguana"
                  />
                  <CardContent sx={{ height: "225px" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {movie.Title}
                    </Typography>
                    <Box>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ fontSize: "15px", fontFamily: "cursive" }}
                      >
                        Released Date
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {movie.Released}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{ fontSize: "15px", fontFamily: "cursive" }}
                      >
                        IMD Rating
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {movie.imdbRating}
                      </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Movie;
