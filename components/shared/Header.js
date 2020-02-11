import React, { Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Router from 'next/router';
import ActiveLink from '../ActiveLink';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
 } from 'reactstrap';


const BsNavLink = (props) => {
  const { route, title } = props;
  const className = props.className || "";
  return (
    <ActiveLink activeClassName="active" href={route} route={route}>
      <a className={`nav-link port-navbar-link ${className}`}> {title} </a>
    </ActiveLink>
  )
}


class Header extends Component {
    state = {
      isOpen: false,
      setIsOpen: false,
    } 
    
  render () {
      const {auth, className} = this.props;
      let authButton;
      const toggle = () => this.setState({isOpen: !isOpen});
      auth.isAuth ? authButton="LogOut" : authButton="LogIn";
      const logOut = () => {
        if(auth.isAuth) {
          this.props.onlogOut();
          Router.push('/index');
        }    
      }
    return (
      <div>
        <Navbar className={`port-navbar port-nav-base absolute ${className}`} color="transparent" dark expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">Javier Sanchez</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-vabar-item">
                  <BsNavLink route="/about" title="About" />
              </NavItem>
              <NavItem className="port-vabar-item">
                  <BsNavLink route="/Skills" title="Skills" />
              </NavItem>
              <NavItem className="port-vabar-item">
                  <BsNavLink route="/portafolio" title="Portafolio" />
              </NavItem>
              <NavItem className="port-vabar-item">
                  <BsNavLink route="/Contact" title="Contact" />
              </NavItem>
              <NavItem className="port-vabar-item">
                  <BsNavLink route="/cv" title="CV" />
              </NavItem>
              <NavItem className="port-vabar-item" onClick={logOut}>
                  <BsNavLink route="/Login" title={authButton} />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
      isAuthenticated: state.auth.token !== null,
  }
};
const mapDispatchToProps = dispatch => {
  return {
      onAuth: () => dispatch( actions.authCheckState() ),
      onlogOut: () => dispatch( actions.logOut() )
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);