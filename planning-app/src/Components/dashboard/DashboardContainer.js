import React from 'react';
import { connect } from 'react-redux'
import DashBoard from "./Dashboard";


const DashboardContainer = (props) => {
    return(
        <div>
            <DashBoard {...props}/>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}


export default  connect(mapStateToProps, {})(DashboardContainer)