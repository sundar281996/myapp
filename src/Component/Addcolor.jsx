import { useState } from "react";
import Colorbox from "./Colorbox";

function Addcolor() {
  const [colorlist, setcolorlist] = useState(["orange", "red", "black"]);
  const [color, setcolor] = useState("skyblue");
  const styles = {
    backgroundColor: color,
    fontSize: "24px",
  };
  return (
    <div>
      <div className="parent">
        <input
          style={styles}
          onChange={(event) => setcolor(event.target.value)}
          value={color}
          type="text"
          className="col"
        />
        <button onClick={() => setcolorlist([...colorlist, color])}>
          Click
        </button>
      </div>
      <div>
        {colorlist.map((clr) => (
          <Colorbox name={clr} />
        ))}
      </div>
    </div>
  );
}
export default Addcolor;
