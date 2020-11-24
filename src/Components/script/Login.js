import React, { Component } from 'react';
import {onLogin} from './../Redux/auth/AuthAction';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
 class Login extends Component {
    constructor(props){
        super();
        this.state={email:"",password:""};
    }
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit=()=>{
        //console.log(this.state);
        const {email,password}=this.state;
        const user={email,password};
        this.props.onLogin(user, this.props.history);
        this.setState({email:"",password:""});
    }
    render() {
        const {email,password}=this.state;
        //console.log(this.props);
        const {error_msg}=this.props.auth;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 card mt-4 p-4">
                        <h1 className="text-center text-info mb-4">Login</h1>
                        {error_msg?<p className="text-danger">{error_msg}</p>:""}
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" name="email" className="form-control" value={email} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" value={password} onChange={this.onHandleChange}/>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-info" onClick={this.onSubmit}>Login</button>
                            <p>Not A Registered User<Link to="/register">Click</Link> To Register First</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    auth:state.auth,
})

export default connect(mapStateToProps, {onLogin})(withRouter(Login));
