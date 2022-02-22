import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavCategories extends Component {
  render() {
    const { closeDropNav } = this.props
    return (
      <div className="relative">
        <ul className="nav-link-subitems">
          <br />
          <div>暢銷類</div>
          <Link className="link-subitem" onClick={closeDropNav} to="/balloons/hotsale">
            熱銷商品
          </Link>
          <Link className="link-subitem" onClick={closeDropNav} to="/balloons/hotsalegroup">
            熱銷套組
          </Link>
          <Link className="link-subitem" onClick={closeDropNav} to="/balloons/hotsalesingle">
            精選單品
          </Link>
          <div>空飄氣球類</div>
          <Link className="link-subitem" onClick={closeDropNav} to="/balloons/airballoon">
            空飄串
          </Link>
          <Link className="link-subitem" onClick={closeDropNav} to="/balloons/airfoilballoon">
            質感空飄串
          </Link>
          <div>佈置類</div>
          <Link className="link-subitem" onClick={closeDropNav} to="/balloons/decoratesingle">
            佈置單品
          </Link>
          <Link className="link-subitem" onClick={closeDropNav} to="/balloons/decorategroup">
            佈置套組
          </Link>
          <Link className="link-subitem" onClick={closeDropNav} to="/balloons/handmade">
            手做氣球
          </Link>
        </ul>
      </div>
    );
  }
}

export default NavCategories;
