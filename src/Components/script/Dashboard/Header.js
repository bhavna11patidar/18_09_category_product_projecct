import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
  } from 'reactstrap';

import {Link, withRouter} from 'react-router-dom';
import {onLogout} from './../../Redux/auth/AuthAction';
import {connect} from 'react-redux'; 
class Header extends Component {
    constructor(props){
        super();
        this.state={isOpen:false};
    }
    toggle = () => {
        this.setState({isOpen:true});
    }
    logout=()=>{
        this.props.onLogout(this.props.history);
    }
    render() {
        const {isOpen}=this.state;
        return (
            <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand to="/">reactstrap</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/add-category">Add Category</Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/view-category">View Category</Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/add-product">Add Product</Link>
                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to="/view-product">View Product</Link>
                  </NavItem>
                  <NavItem>
                      <button className="btn btn-warning" onClick={this.logout}>Logout</button>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        )
    }
}


export default connect(null, {onLogout})(withRouter(Header));