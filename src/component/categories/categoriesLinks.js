import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CategoriesLinks extends Component {

  render() {
    return (
      <div>
        <ul className="categoriesLinks">
          <li className="category">
            <Link to="/balloons/Categories">全部商品</Link>
          </li>

          <br />
          <li className="category-title">暢銷類</li>
          <Link className="category" to="/balloons/hotsale">熱銷商品</Link>
          <Link className="category" to="/balloons/hotsalegroup">熱銷套組</Link>
          <Link className="category" to="/balloons/hotsalesingle">精選單品</Link>

          <br />
          <li className="category-title">空飄氣球類</li>
          <Link className="category" to="/balloons/airballoon">空飄串</Link>
          <Link className="category" to="/balloons/airfoilballoon">質感空飄串</Link>

          <br />
          <li className="category-title">佈置類</li>
          <Link className="category" to="/balloons/decoratesingle">佈置單品</Link>
          <Link className="category" to="/balloons/decorategroup">佈置套組</Link>

          <br />
          <li className="category-title">手做氣球</li>
          <Link className="category" to="/balloons/handmade">手做氣球</Link>

        </ul>
      </div>
    );
  }
}

export default CategoriesLinks;
