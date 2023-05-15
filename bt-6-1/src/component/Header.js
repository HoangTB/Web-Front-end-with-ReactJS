import { Component } from "react";

class Header extends Component{
    render(){
        return(
            <div className="header-area">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="user-menu">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa fa-user" /> My Account
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-heart" /> Wishlist
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user" /> My Cart
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user" /> Checkout
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user" /> Login
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="header-right">
                    <ul className="list-unstyled list-inline">
                      <li className="dropdown dropdown-small">
                        <a
                          data-toggle="dropdown"
                          data-hover="dropdown"
                          className="dropdown-toggle"
                          href="#"
                        >
                          <span className="key">currency :</span>
                          <span className="value">USD </span>
                          <b className="caret" />
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#">USD</a>
                          </li>
                          <li>
                            <a href="#">INR</a>
                          </li>
                          <li>
                            <a href="#">GBP</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown dropdown-small">
                        <a
                          data-toggle="dropdown"
                          data-hover="dropdown"
                          className="dropdown-toggle"
                          href="#"
                        >
                          <span className="key">language :</span>
                          <span className="value">English </span>
                          <b className="caret" />
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#">English</a>
                          </li>
                          <li>
                            <a href="#">French</a>
                          </li>
                          <li>
                            <a href="#">German</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Header;