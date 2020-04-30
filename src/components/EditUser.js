import React from "react";
import {bindActionCreators} from "redux";
import {changePosition} from "../actions/PositionAppActions";
import {connect} from "react-redux";
import {editPassword, editUser} from "../actions/UserActions";

class EditUser extends React.Component {

    submitPassHandler = (e) => {
        e.preventDefault();
        this.props.editPassword('https://webaccounting.herokuapp.com/account/user/password', e.target.pass.value);
    }

    submitUserHandler = (e) => {
        e.preventDefault();
        let dto = {
            firstName: e.target.fName.value,
            lastName: e.target.lName.value
        };
        this.props.editUser('https://webaccounting.herokuapp.com/account/user', dto);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitUserHandler}>
                    <h2>Edit user</h2>
                    <p>
                        <label>First name:
                            <input name='fName' type="text"/>
                        </label>
                    </p>
                    <p>
                        <label>Last name:
                            <input name='lName' type="text"/>
                        </label>
                    </p>
                    <input type="submit" value='Send'/>
                </form>
                <div> </div>
                <form onSubmit={this.submitPassHandler}>
                    <h2>Change password</h2>
                    <label>New password:
                        <input name='pass' type="text"/>
                    </label>
                    <input type="submit" value='Send'/>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changePosition, editPassword, editUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);