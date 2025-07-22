import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <Router>
      <HeaderComponent />
      <div className="container">
        <Routes>
          <Route path="/" element={<ListEmployeeComponent />} />
          <Route path="/employees" element={<ListEmployeeComponent />} />
          <Route path="/add-employee/:id" element={<CreateEmployeeComponent />} />
          <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} />
        </Routes>
      </div>
      <FooterComponent />
    </Router>
  );
}

export default App;
