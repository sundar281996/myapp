import { useState } from "react";
import IconButton from "@mui/material/IconButton";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Badge from "@mui/material/Badge";

function User() {
  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);
  return (
    <div>
      <IconButton
        onClick={() => {
          setlike(like + 1);
        }}
        color="primary"
        aria-label="like"
      >
        <Badge badgeContent={like} color="secondary" size="small">
          <ThumbUpIcon />
        </Badge>
      </IconButton>
      <IconButton
        onClick={() => {
          setdislike(dislike + 1);
        }}
        color="primary"
        aria-label="dislike"
      >
        <Badge badgeContent={dislike} color="error" fontSize="small">
          <ThumbDownIcon />
        </Badge>
      </IconButton>
    </div>
  );
}
export default User;
