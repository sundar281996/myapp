import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditForm from "./editfom";

function EditMovie() {
  const { id } = useParams();

  const [Movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://628203969fac04c6540d712e.mockapi.io/movies/${id}`)
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  }, [id]);
  return <div>{Movie ? <EditForm Movie={Movie} /> : "Loading......"}</div>;
}
export default EditMovie;
