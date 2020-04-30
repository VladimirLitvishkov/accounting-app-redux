import React from "react";
import {connect} from "react-redux";
import Registration from "./Registration";
import Login from "./Login";
import Profile from "./Profile";
import Home from "./Home";
import EditUser from "./EditUser";


class Body extends React.Component {

    render() {
        switch (this.props.position) {
            case 'reg' :
                return <Registration/>;
            case 'log' :
                return <Login/>;
            case 'prof' :
                return <Profile/>;
            case 'edit' :
                return <EditUser/>;
            default :
                return <Home/>;
        }
    }

}


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Body);