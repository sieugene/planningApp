import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from "./Components/layout/Navbar";
import {Route} from "react-router-dom";
import ProjectDetail from "./Components/projects/ProjectDetail";
import SignIn from "./Components/auth/SignIn";
import SignUp from "./Components/auth/SignUp";
import DashboardContainer from "./Components/dashboard/DashboardContainer";
import CreateProjectContainer from "./Components/projects/CreateProject/CreateProjectContainer";
import {connect} from "react-redux";
import UpdateProjectContainer from "./Components/projects/UpdateProject/UpdateProjectContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import UsersContainer from "./Components/User/UsersContainer";
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";


function App(props) {
    if (!props.isLoadedAuth) {
        return  <div className="progress"><div className="indeterminate"></div></div>
    }
    return (
        <div className="App">
            <Navbar/>
            <Route exact path='/' render={() => (<DashboardContainer/>)}/>
            <Route path='/project/:id' render={(props) => (<ProjectDetail {...props}/>)}/>
            <Route path='/login' render={() => (<SignIn/>)}/>
            <Route path='/signup' render={() => (<SignUp/>)}/>
            <Route path='/create' render={() => (<CreateProjectContainer/>)}/>
            <Route path='/update/:id' render={(props) => (<UpdateProjectContainer {...props}/>)}/>
            <Route path='/profile' render={(props) => (<ProfileContainer {...props}/>)}/>
            <Route path='/user/:id' render={(props) => (<UsersContainer {...props}/>)}/>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        isLoadedAuth: state.firebase.auth.isLoaded,
        users: state.firestore.ordered.users
    }
}

export default compose(connect(mapStateToProps, {}),
    firestoreConnect([{collection: 'users'}])
)(App);
