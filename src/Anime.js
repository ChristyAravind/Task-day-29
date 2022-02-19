import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/material/Badge';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { useHistory } from "react-router-dom";   

export function Anime({ name,id, poster, released, genre, summary, status, Deleteicon, Editicon }) {

  const [like, setLike] = useState(0);

  const [show, setShow] = useState(false);

  const history = useHistory();

  return (
    <Card>

      <CardMedia
        className="img"
        image={poster}
        alt={name} />

      <CardContent>
        <h1>Name: {name}</h1>

        <IconButton
        aria-label="delete"
        color="secondary"
        onClick={()=>{

          history.push(`/Trailer/${id}`)


        }}  
        >
        <LiveTvIcon/>
      </IconButton>

      </CardContent>
      <h2>Released: {released}</h2>
      <h2>Status: {status}</h2>
      <h2 style={{ width: "460px" }}>Genre: {genre}</h2>


      <IconButton
        aria-label="delete"
        color="secondary"

        onClick={() => setShow((s) => !s)}>
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>

      <h2 style={{ display: show ? "block" : "none" }}>Summary: {summary}</h2>

      <CardActions className="click">

        <Badge badgeContent={like} color="error"
          onClick={() => setLike(like + 1)}>
          <FavoriteBorderIcon />
        </Badge>

        {Editicon}
        {Deleteicon}

      </CardActions>
    </Card>


  );
}




