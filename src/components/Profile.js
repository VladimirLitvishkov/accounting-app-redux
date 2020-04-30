import React from "react";
import {bindActionCreators} from "redux";
import {changePosition} from "../actions/PositionAppActions";
import {connect} from "react-redux";
import User from "./User";
import {deleteAcc} from "../actions/AccountActions";


class Profile extends React.Component {

    render() {
        return (
            <div>
                <User/>
                <button className='btn btn-warning'
                        onClick={() => this.props.changePosition('edit')}
                >Edit {this.props.user.login}</button>
                <button className='btn btn-danger'
                        onClick={() => this.props.deleteAcc('https://webaccounting.herokuapp.com/account/user')}
                >Delete {this.props.user.login}</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changePosition, deleteAcc}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);