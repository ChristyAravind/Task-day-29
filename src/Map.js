import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { Anime } from "./Anime";
import { useHistory } from "react-router-dom";


export function Map({ list, setList }) {

  const history = useHistory();

  return (
    <div  className="anime">
      
      {list.map((go,index) => (

        <Anime
          key={index}
          id={index}
          poster={go.poster}
          name={go.name}
          released={go.released}
          genre={go.genre}
          summary={go.summary}
          status={go.status}

          Editicon={<IconButton
            aria-label="delete"
            color="secondary"
            onClick={()=>history.push(`/Editmovie/${index}`)}
          >
            <EditIcon />
          </IconButton>}
          
          Deleteicon={<IconButton
            aria-label="delete"
            color="error"
            onClick={()=>{

              const copyList=[...list];

              copyList.splice(index,1)

              setList(copyList)

            }}
          >
            <DeleteIcon />
          </IconButton>} />
      ))}
    </div>
  );
}


