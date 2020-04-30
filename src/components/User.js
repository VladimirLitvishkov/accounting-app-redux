import React from "react";
import {connect} from "react-redux";

class User extends React.Component{

    render() {
        return (
            <div>
                <img src={this.props.user.avatar} alt=""/>
                <h3>Your login: {this.props.user.login}</h3>
                <h4>Your first name: {this.props.user.firstName}</h4>
                <h4>Your last name: {this.props.user.lastName}</h4>
                <h5>Roles: {this.props.user.roles.map((r) => <span key={r}>[{r}]</span>)}</h5>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(User);