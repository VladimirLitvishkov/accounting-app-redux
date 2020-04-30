import React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {login} from "../actions/AccountActions";


class Login extends React.Component {

    submitHandler = (e) => {
        e.preventDefault();
        let auth = 'Basic ' + window.btoa(`${e.target.login.value}:${e.target.pass.value}`);
        let url = 'https://webaccounting.herokuapp.com/account/login';
        this.props.login(url, auth);

    };

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <p>
                        <label htmlFor="">Account:
                            <input name='login' type="text"/>
                        </label>
                    </p>
                    <p>
                        <label htmlFor="">Password:
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
    return bindActionCreators({login}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);