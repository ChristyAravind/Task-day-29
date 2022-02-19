import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

import './App.css';
import { Map } from "./Map";
import { Addanime } from "./Addanime";
import { Home } from "./Home";
import { Editmovie } from "./Editmovie";
import { Trailer } from "./Trailer";
import { Animelist } from "./Animelist";
import { useHistory } from "react-router-dom";   
import Button from '@mui/material/Button';



export default function App() {

  const history=useHistory();

  const [list,setList]=useState (Animelist)


  return (

    <div className="App">

      <div className="link">

      <Button  size="large" onClick={()=> history.push("/")} color="success" >Home
      </Button>

      <Button size="large" onClick={()=> history.push("/Anime")} color="success">Anime
      </Button>

      <Button size="large" onClick={()=> history.push("/Addanime")} color="success">Addanime
      </Button>

      </div>

      <Switch>

      <Route exact path="/">
        <Home/>

      </Route>

      <Route  path="/Anime">

      <Map list={list} setList={setList}/>

      </Route>

      <Route  path="/Editmovie/:id">

      <Editmovie list={list} setList={setList}/>

      </Route>

      <Route  path="/Trailer/:id">

      <Trailer list={list} />
      

      </Route>

      <Route  path="/Addanime">

      <Addanime list={list} setList={setList}/>

      </Route>

      </Switch>

      
    

    </div>
  );
}



