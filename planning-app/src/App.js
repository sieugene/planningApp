import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from "./Components/layout/Navbar";
import {Route} from "react-router-dom";
import ProjectDetail from "./Components/projects/ProjectDetail";
import SignIn from "./Components/auth/SignIn";
import SignUp from "./Components/auth/SignUp";
import DashboardContainer from "./Components/dashboard/DashboardContainer";
import CreateProjectContainer from "./Components/projects/CreateProjectContainer";


function App(props) {
  return (
        <div className="App">
            <Navbar/>
            <Route exact path='/' render={()=>(<DashboardContainer/>)}/>
            <Route path='/project/:id' render={(props)=>(<ProjectDetail {...props}/>)}/>
            <Route path='/login' render={()=>(<SignIn/>)}/>
            <Route path='/signup' render={()=>(<SignUp/>)}/>
            <Route path='/create' render={()=>(<CreateProjectContainer/>)}/>

        </div>
  );
}

export default App;
