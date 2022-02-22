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
                  商品分類
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <h6 className="dropdown-header">暢銷類</h6>
                  <Link className="dropdown-item" onClick={closeDropNav} to="/balloons/hotsale">
                    熱銷商品
                  </Link>
                  <Link className="dropdown-item" onClick={closeDropNav} to="/balloons/hotsalegroup">
                    熱銷套組
                  </Link>
                  <Link className="dropdown-item" onClick={closeDropNav} to="/balloons/hotsalesingle">
                    精選單品
                  </Link>
                  <div className="dropdown-divider"></div>
                  <h6 className="dropdown-header">空飄氣球類</h6>
                  <Link className="dropdown-item" onClick={closeDropNav} to="/balloons/airballoon">
                    空飄串
                  </Link>
                  <Link className="dropdown-item" onClick={closeDropNav} to="/balloons/airfoilballoon">
                    質感空飄串
                  </Link>
                  <div className="dropdown-divider"></div>
                  <h6 className="dropdown-header">佈置類</h6>
                  <Link className="dropdown-item" onClick={closeDropNav} to="/balloons/decoratesingle">
                    佈置單品
                  </Link>
                  <Link className="dropdown-item" onClick={closeDropNav} to="/balloons/decorategroup">
                    佈置套組
                  </Link>
                  <Link className="dropdown-item" onClick={closeDropNav} to="/balloons/handmade">
                    手做氣球
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/balloons/allFestival">
                  節慶精選
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/balloons/about">
                  氣球老師
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/balloons/customized">
                  客製化氣球
                </Link>
              </li>
            </ul>
            <form className="form-inline">
              <Button
                className={`mobile-sm-btn margin-right-10`}
                color="primary"
                onClick={this.toggle}
              >
                購物車({this.props.cartReducer.cart.length})
              </Button>
              {
                isLogin
                  ? ''
                  :
                  <div className="margin-right-10">
                    <Button color="primary mobile-sm-btn" onClick={this.loginToggle}>登入</Button>
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
                    登出
                  </Button>
                  :
                  <div>
                    <Button
                      color="primary mobile-sm-btn"
                      onClick={this.registerToggle}
                    >
                      註冊
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
