import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory, useParams } from "react-router-dom"; 

export function Editmovie({list,setList}) {

  const history = useHistory();

  const {id} = useParams()

  const ani=list[id];

  console.log(id,ani)

  const [name, setName] = useState(ani.name);

  const [released, setReleased] = useState(ani.released);

  const [poster, setPoster] = useState(ani.poster);

  const [genre, setGenre] = useState(ani.genre);

  const [summary, setSummary] = useState(ani.summary);

  const [status, setStatus] = useState(ani.status);

  return (
    <div className="input">

      <TextField id="outlined-basic" 
      onChange={(event) => setName(event.target.value)} 
      label="Name" 
      variant="outlined"
      value={name} />

      <TextField id="outlined-basic" 
      onChange={(event) => setReleased(event.target.value)} 
      label="Released" 
      variant="outlined"
      value={released} />

      <TextField id="outlined-basic" 
      onChange={(event) => setPoster(event.target.value)} 
      label="Poster" 
      variant="outlined"
      value={poster} />

      <TextField id="outlined-basic" 
      onChange={(event) => setGenre(event.target.value)} 
      label="Genre" 
      variant="outlined"
      value={genre} />

      <TextField id="outlined-basic" 
      onChange={(event) => setSummary(event.target.value)} 
      label="Summary" 
      variant="outlined"
      value={summary} />

      <TextField id="outlined-basic" 
      onChange={(event) => setStatus(event.target.value)} 
      label="Status" 
      variant="outlined"
      value={status} />

      <Button variant="outlined" onClick={() => {

        const update = {
          name: name,
          released: released,
          poster: poster,
          genre: genre,
          summary: summary,
          status: status
        };

        console.log(update);

        const copyList=[...list];

        copyList[id]=update;

        setList(copyList)

        history.push("/Anime");

      }} color="success">Editanime</Button>

    </div>
  );
}
