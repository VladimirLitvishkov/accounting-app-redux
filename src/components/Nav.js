import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {changePosition} from "../actions/PositionAppActions";


class Nav extends React.Component {

    render() {
        switch (this.props.position) {
            case 'edit' :
                return (<div className='row justify-content-center'>
                    <button className='btn btn-light'
                            onClick={() => this.props.changePosition('prof')}
                    >Back to profile
                    </button>
                    <button className='btn btn-dark'
                            onClick={() => {
                                localStorage.removeItem('Authorization');
                                this.props.changePosition('home');
                            }}
                    >Logout
                    </button>
                </div>);
            case 'prof' :
                return (<div className='row justify-content-center'>
                    <button className='btn btn-dark'
                            onClick={() => {
                                localStorage.removeItem('Authorization');
                                this.props.changePosition('home');
                            }}
                    >Logout
                    </button>
                </div>);
            case 'reg' :
                return (<div className='row justify-content-center'>
                    <h1>Registration</h1>
                    <button
                        onClick={() => this.props.changePosition('home')}
                        className='btn btn-dark'
                    >
                        Home
                    </button>
                </div>);
            case 'log' :
                return (<div className='row justify-content-center'>
                    <h1>Login</h1>
                    <button
                        onClick={() => this.props.changePosition('home')}
                        className='btn btn-dark'
                    >
                        Home
                    </button>
                </div>);
            default :
                return (<div className='row justify-content-center'>
                    <button
                        onClick={() => this.props.changePosition('reg')}
                        className='btn btn-primary'
                    >
                        Registration
                    </button>
                    <button
                        onClick={() => this.props.changePosition('log')}
                        className='btn btn-secondary'
                    >
                        Login
                    </button>
                </div>);
        }

    }

}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({changePosition}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);