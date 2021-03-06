import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavCartContainer from '../../container/NavCartContainer';
import LoginContainer from '../../container/LoginContainer';
import Register from './Register';
import logo from '../../picture/logo/logo.png';
import { Button } from 'reactstrap';

import navStyle from './Nav.module.scss';

// const axios = require('axios');

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      modal: false,
      loginmodal: false,
      registermodal: false,
      cart: [],
    }
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.isLoginReducer()
      // axios.get('http://localhost:5002/checklogin', { withCredentials: true })
      //   .then((res) => {
      //     if (res.data.message === 'token success') {
      //       this.props.isLoginReducer()
      //     }
      //   }).catch((error) => {
      //     console.log(error)
      //   })
    }
  }

  loginToggle = () => {
    this.setState({
      loginmodal: !this.state.loginmodal,
    });
  }

  closeRegister = () => {
    this.setState({
      registermodal: !this.state.registermodal,
    });
  }

  registerToggle = () => {
    this.setState({
      registermodal: !this.state.registermodal,
    });
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  }

  handleLogout = () => {
    this.props.unsetTokenReducer()
    localStorage.removeItem('token')
    this.props.isLogoutReducer()
    // axios.get('http://localhost:5002/handlelogout', { withCredentials: true })
    //   .then((res) => {
    //     this.props.isLogoutReducer()
    //   }).catch((error) => {
    //     console.log(error)
    //   })
  }

  render() {
    let { modal, loginmodal, registermodal } = this.state;
    let { closeDropNav } = this.props;

    let isLogin = this.props.ckeckReducer.isLogin;
    return (
      <>
        <nav className={`nav navbar navbar-expand-lg navbar-light bg-light ${navStyle.nav}`}>
          <Link className={`${navStyle.navLogo}`} to="/balloons/">
            <img className={`${navStyle.logoImage}`} src={logo} alt="" />
            <div className="logo-des">Boom Studio</div>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href='/' id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                  ????????????
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <h6 className="dropdown-header">?????????</h6>
                  <Link className="dropdown-item" onClick={closeDropNav} to="/balloons/hotsale">
                    ????????????
                  </Link>
                  <Link className="dropdown-item" onClick={closeDropNav} to="/balloons/hotsalegroup">
                    ????????????
                  </Link>
                  <Link className="dropdown-item" onClick={closeDropNav} to="/balloons/hotsalesingle">
                    ????????????
                  </Link>
                  <div className="dropdown-divider"></div>
                  <h6 className="dropdown-header">???????????????</h6>
                  <Link className="dropdown-item" onClick={closeDropNav} to="/balloons/airballoon">
                    ?????????
                  </Link>
                  <Link className="dropdown-item" onClick={closeDropNav} to="/balloons/airfoilballoon">
                    ???????????????
                  </Link>
                  <div className="dropdown-divider"></div>
                  <h6 className="dropdown-header">?????????</h6>
                  <Link className="dropdown-item" onClick={closeDropNav} to="/balloons/decoratesingle">
                    ????????????
                  </Link>
                  <Link className="dropdown-item" onClick={closeDropNav} to="/balloons/decorategroup">
                    ????????????
                  </Link>
                  <Link className="dropdown-item" onClick={closeDropNav} to="/balloons/handmade">
                    ????????????
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/balloons/allFestival">
                  ????????????
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/balloons/about">
                  ????????????
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/balloons/customized">
                  ???????????????
                </Link>
              </li>
            </ul>
            <form className="form-inline">
              <Button
                className={`mobile-sm-btn margin-right-10`}
                color="primary"
                onClick={this.toggle}
              >
                ?????????({this.props.cartReducer.cart.length})
              </Button>
              {
                isLogin
                  ? ''
                  :
                  <div className="margin-right-10">
                    <Button color="primary mobile-sm-btn" onClick={this.loginToggle}>??????</Button>
                    <LoginContainer loginToggle={this.loginToggle} loginmodal={loginmodal} />
                  </div>
              }
              {
                isLogin
                  ?
                  <Button
                    className="mobile-sm-btn"
                    color="danger"
                    onClick={() => this.handleLogout()}
                  >
                    ??????
                  </Button>
                  :
                  <div>
                    <Button
                      color="primary mobile-sm-btn"
                      onClick={this.registerToggle}
                    >
                      ??????
                    </Button>
                    <Register
                      history={this.props.history}
                      registerToggle={this.registerToggle}
                      registermodal={registermodal}
                      closeRegister={this.closeRegister}
                    />
                  </div>
              }
            </form>
          </div>
        </nav>
        <NavCartContainer toggle={this.toggle} modal={modal} />
      </>
    );
  }
}

export default Nav;
