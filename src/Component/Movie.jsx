import { useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "./like";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

function Movie({ Movie, id, DeleteIcon, EditIcon }) {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const styles = {
    display: show ? "block" : "none",
  };
  return (
    <Card className="movie-container">
      <img className="post" src={Movie.poster} alt={Movie.name} srcset="" />
      <CardContent>
        <div className="specs">
          <h2 className="movie-name">{Movie.name}</h2>
          <IconButton
            onClick={() => {
              navigate("/movie/" + id);
            }}
            color="success"
            aria-label="info"
          >
            <InfoOutlinedIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? (
              <KeyboardArrowDownOutlinedIcon />
            ) : (
              <KeyboardArrowUpOutlinedIcon />
            )}
          </IconButton>
          <h3 className="movie-rating"> ⭐{Movie.rating}</h3>
        </div>

        <p style={styles} className="movie-summary">
          {Movie.summary}
        </p>
      </CardContent>
      <CardActions className="card">
        <User /> {DeleteIcon} {EditIcon}
      </CardActions>
    </Card>
  );
}
export default Movie;
