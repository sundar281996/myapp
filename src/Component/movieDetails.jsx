import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import { useEffect, useState } from "react";

function Moviedetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`https://628203969fac04c6540d712e.mockapi.io/movies/${id}`)
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, [id]);

  return (
    <div>
      <iframe
        width="885px"
        height="498"
        src={Movie.trailer}
        title="Youtube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-container1">
        <div className="movie-container1">
          <div className="specs">
            <h2 className="movie-name">{Movie.name}</h2>
            <h3 className="movie-rating"> ⭐{Movie.rating}</h3>
          </div>
        </div>
        <p className="movie-summary">{Movie.summary}</p>

        <Button
          startIcon={<ArrowBackIosOutlinedIcon />}
          onClick={() => {
            navigate(-1);
          }}
          variant="outlined"
        >
          Back
        </Button>
      </div>
    </div>
  );
}
export default Moviedetail;
