import React, { Component } from 'react';
import Logo from '../img/logo.png';
import Search from '../img/icon-search.png';

class Header extends Component {
  state = {
    isPhone: true
  };
  render() {
    return (
      <header>
        <div className="container grid">
          <div className="logo">
            <img src={Logo} alt="Logo Front End" />
            <i
              className={`fa ${this.state.isPhone ? 'fa-bars' : 'fa-close'}`}
              onClick={() => this.setState({ isPhone: !this.state.isPhone })}
            />
          </div>

          <nav className={`nav ${this.state.isPhone ? 'hide' : ''}`}>
            <ul className="menu">
              <li>
                <a href="">Menu 1</a>
              </li>
              <li>
                <a href="">Menu 2</a>
              </li>
              <li className="menu-3">
                <a href="">Menu 3</a>
                <ul className="submenu">
                  <li>
                    <a href="">Sub Menu 3 Number 1</a>
                  </li>
                  <li>
                    <a href="">Sub Menu 3 Number 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Menu 4</a>
              </li>
              <li>
                <a href="" className="search-icon">
                  <img src={Search} alt="search" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
