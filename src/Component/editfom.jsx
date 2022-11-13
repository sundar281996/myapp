import { Button, TextField } from "@mui/material";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

function EditForm({ Movie }) {
  const [name, setname] = useState(Movie.name);
  const [poster, setPoster] = useState(Movie.poster);
  const [rating, setRating] = useState(Movie.rating);
  const [summary, setSummary] = useState(Movie.summary);
  const [trailer, setTrailer] = useState(Movie.trailer);
  const navigate = useNavigate();
  //   const [movielist, setmovielist] = useState(INTIAL_MOVIE_LIST);
  const editmovie = () => {
    const updateMovie = {
      name,
      poster,
      rating,
      summary,
      trailer,
    };
    fetch(`https://628203969fac04c6540d712e.mockapi.io/movies/${Movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updateMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/movie"));
    // // setmovielist([...movielist, newMovie]);
  };

  return (
    <div className="addmovie">
      <TextField
        onChange={(event) => {
          setname(event.target.value);
        }}
        label="Name"
        variant="outlined"
        value={name}
      />

      <TextField
        onChange={(event) => {
          setPoster(event.target.value);
        }}
        label="Poster"
        variant="outlined"
        value={poster}
      />

      <TextField
        onChange={(event) => {
          setRating(event.target.value);
        }}
        label="Rating"
        variant="outlined"
        value={rating}
      />

      <TextField
        onChange={(event) => {
          setSummary(event.target.value);
        }}
        label="Summary"
        variant="outlined"
        value={summary}
      />

      <TextField
        onChange={(event) => {
          setTrailer(event.target.value);
        }}
        label="Trailer"
        variant="outlined"
        value={trailer}
      />

      <Button
        onClick={() => {
          editmovie();
        }}
        variant="outlined"
      >
        updatemovie
      </Button>
    </div>
  );
}

export default EditForm;
