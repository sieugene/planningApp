import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from "./Components/layout/Navbar";
import DashBoard from "./Components/dashboard/Dashboard";
import {Route} from "react-router-dom";
import ProjectDetail from "./Components/projects/ProjectDetail";


function App(props) {
  return (
        <div className="App">
            <Navbar/>
            <Route exact path='/' render={()=>(<DashBoard/>)}/>
            <Route path='/project/:id' render={(props)=>(<ProjectDetail {...props}/>)}/>
        </div>
  );
}

export default App;
