import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Movie from "./Movie";
import ModeEditOutlineTwoToneIcon from "@mui/icons-material/ModeEditOutlineTwoTone";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineSharpIcon from "@mui/icons-material/DeleteOutlineSharp";

function Movielist() {
  const [movielist, setmovielist] = useState([]);
  useEffect(() => {
    getmovies();
  }, []);

  const deletemovies = (id) => {
    fetch(`https://628203969fac04c6540d712e.mockapi.io/movies/${id}`, {
      method: "Delete",
    }).then((data) => getmovies());
  };
  const getmovies = () => {
    fetch("https://628203969fac04c6540d712e.mockapi.io/movies")
      .then((data) => data.json())
      .then((movies) => setmovielist(movies));
  };
  const navigate = useNavigate();

  return (
    <div className="App">
      {movielist.map((mve) => {
        return (
          <Movie
            Movie={mve}
            key={mve.id}
            id={mve.id}
            DeleteIcon={
              <IconButton
                onClick={() => deletemovies(mve.id)}
                aria-label="delete"
              >
                <DeleteOutlineSharpIcon />
              </IconButton>
            }
            EditIcon={
              <IconButton
                onClick={() => navigate(`/movie/edit/${mve.id}`)}
                aria-label="edit"
              >
                <ModeEditOutlineTwoToneIcon />
              </IconButton>
            }
          />
        );
      })}
    </div>
  );
}
export default Movielist;
