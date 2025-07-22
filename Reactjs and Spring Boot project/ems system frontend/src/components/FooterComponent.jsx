import React, { Component } from 'react';

class FooterComponent extends Component {
  render() {
    return (
      <footer className="bg-dark text-white py-3 mt-auto">
        <div className="container text-center">
          <p className="mb-0">
            © {new Date().getFullYear()} Employee Management System | Built by <strong>Ganesh Mane</strong>
          </p>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
