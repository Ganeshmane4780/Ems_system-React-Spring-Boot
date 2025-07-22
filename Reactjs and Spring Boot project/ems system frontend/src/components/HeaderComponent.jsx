import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
          <div className="container">
            <Link to="/" className="navbar-brand fs-4">
              Employee Management System
            </Link>

            <div className="collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/employees" className="nav-link">
                    Employees
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/add-employee/_add" className="nav-link">
                    Add Employee
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default HeaderComponent;
