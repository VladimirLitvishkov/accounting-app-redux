import React from "react";
import {bindActionCreators} from "redux";
import {registration} from "../actions/AccountActions";
import {connect} from "react-redux";


class Registration extends React.Component{

    submitHandler = (e) => {
        e.preventDefault();
        let dto = {
            firstName: e.target.fName.value,
            lastName: e.target.lName.value,
            login: e.target.login.value,
            password: e.target.pass.value
        };
        let url = 'https://webaccounting.herokuapp.com/account/user';
        let auth = 'Basic ' + window.btoa(`${e.target.login.value}:${e.target.pass.value}`);
        this.props.registration(url, dto, auth);

    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <p>
                        <label>First Name:
                            <input name='fName' type="text"/>
                        </label>
                    </p>
                    <p>
                        <label>Last Name:
                            <input name='lName' type="text"/>
                        </label>
                    </p>
                    <p>
                        <label>Email:
                            <input name='login' type="text"/>
                        </label>
                    </p>
                    <p>
                        <label>Password:
                            <input name='pass' type="password"/>
                        </label>
                    </p>
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
    return bindActionCreators({registration}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);