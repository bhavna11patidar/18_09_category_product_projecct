import React, { Component } from 'react';
import {onRegister} from './../Redux/auth/AuthAction';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
 class Registration extends Component {
    constructor(props){
        super();
        this.state={name:"", email:"",password:"",gender:""};
    }
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit=()=>{
        //console.log(this.state);
        const {name,email,password,gender}=this.state;
        const user={name,email,password,gender};
        this.props.onRegister(user);
        this.setState({name:"", email:"",password:"",gender:""});
    }
    render() {
        const {name,email,password,gender}=this.state;
        //console.log(this.props);
        const {success_msg, error_msg}=this.props.auth;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 card mt-4 p-4">
                        <h1 className="text-center text-info mb-4">Registration</h1>
                        {success_msg?<p className="text-success">{success_msg}</p>:""}
                        {error_msg?<p className="text-danger">{error_msg}</p>:""}
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" className="form-control" value={name} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" name="email" className="form-control" value={email} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" value={password} onChange={this.onHandleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Gneder</label>
                            <input type="radio" name="gender" className="form-control-check" value="Male" onChange={this.onHandleChange}/>Male
                            <input type="radio" name="gender" className="form-control-check" value="Female" onChange={this.onHandleChange}/>Female
                        </div>
                        <div className="text-center">
                            <button className="btn btn-info" onClick={this.onSubmit}>Register</button>
                            <p>Already Registered <Link to="/">Click</Link> To Login</p>
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

export default connect(mapStateToProps, {onRegister})(withRouter(Registration));
