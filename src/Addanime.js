import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

export function Addanime({ list, setList }) {

  const history=useHistory();

  const [name, setName] = useState("");

  const [released, setReleased] = useState("");

  const [poster, setPoster] = useState("");

  const [genre, setGenre] = useState("");

  const [summary, setSummary] = useState("");

  const [status, setStatus] = useState("");

  return (
    <div className="input">

      <TextField id="outlined-basic" onChange={(event) => setName(event.target.value)} label="Name" variant="outlined" />

      <TextField id="outlined-basic" onChange={(event) => setReleased(event.target.value)} label="Released" variant="outlined" />

      <TextField id="outlined-basic" onChange={(event) => setPoster(event.target.value)} label="Poster" variant="outlined" />

      <TextField id="outlined-basic" onChange={(event) => setGenre(event.target.value)} label="Genre" variant="outlined" />

      <TextField id="outlined-basic" onChange={(event) => setSummary(event.target.value)} label="Summary" variant="outlined" />

      <TextField id="outlined-basic" onChange={(event) => setStatus(event.target.value)} label="Status" variant="outlined" />

      <Button variant="outlined" onClick={() => {

        const New = {
          name: name,
          released: released,
          poster: poster,
          genre: genre,
          summary: summary,
          status: status
        };

        console.log(New);

        setList([...list, New]);

        history.push("/Anime");

      }} color="success">Addanime</Button>

    </div>
  );
}
