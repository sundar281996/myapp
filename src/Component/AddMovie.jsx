import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

function Addmovie() {
  const [name, setname] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const navigate = useNavigate();
  //   const [movielist, setmovielist] = useState(INTIAL_MOVIE_LIST);
  const addmovie = () => {
    const newMovie = {
      name,
      poster,
      rating,
      summary,
      trailer,
    };
    fetch(`https://628203969fac04c6540d712e.mockapi.io/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/movie"));
    // setmovielist([...movielist, newMovie]);
  };

  return (
    <div className="addmovie">
      <TextField
        onChange={(event) => {
          setname(event.target.value);
        }}
        label="Name"
        variant="outlined"
      />

      <TextField
        onChange={(event) => {
          setPoster(event.target.value);
        }}
        label="Poster"
        variant="outlined"
      />

      <TextField
        onChange={(event) => {
          setRating(event.target.value);
        }}
        label="Rating"
        variant="outlined"
      />

      <TextField
        onChange={(event) => {
          setSummary(event.target.value);
        }}
        label="Summary"
        variant="outlined"
      />

      <TextField
        onChange={(event) => {
          setTrailer(event.target.value);
        }}
        label="Trailer"
        variant="outlined"
      />

      <Button
        onClick={() => {
          addmovie();
        }}
        variant="outlined"
      >
        Addmovie
      </Button>
    </div>
  );
}
export default Addmovie;
