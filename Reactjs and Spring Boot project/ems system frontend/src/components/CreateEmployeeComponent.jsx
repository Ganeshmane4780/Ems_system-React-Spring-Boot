// src/components/CreateEmployeeComponent.jsx

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const CreateEmployeeComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    emailId: ''
  });

  // Fetch employee details if updating
  useEffect(() => {
    if (id !== '_add') {
      EmployeeService.getEmployeeById(id)
        .then((res) => {
          setEmployee(res.data);
        })
        .catch((error) => {
          console.error("Error fetching employee:", error);
        });
    }
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle Save or Update
  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();

    if (id === '_add') {
      // Add mode
      EmployeeService.createEmployee(employee)
        .then(() => navigate('/employees'))
        .catch((err) => console.error("Create failed:", err));
    } else {
      // Update mode (⚠️ Fixed argument order)
      EmployeeService.updateEmployee(employee, id)
        .then(() => navigate('/employees'))
        .catch((err) => console.error("Update failed:", err));
    }
  };

  // Cancel button handler
  const cancel = () => {
    navigate('/employees');
  };

  return (
    <div className="container mt-5">
      <div className="card shadow rounded p-4 mx-auto" style={{ maxWidth: '600px' }}>
        <h2 className="text-center mb-4">{id === '_add' ? 'Add Employee' : 'Update Employee'}</h2>
        <form onSubmit={saveOrUpdateEmployee}>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              placeholder="Enter first name"
              name="firstName"
              className="form-control"
              value={employee.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              name="lastName"
              className="form-control"
              value={employee.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              placeholder="Enter email"
              name="emailId"
              className="form-control"
              value={employee.emailId}
              onChange={handleChange}
              required
            />
          </div>

          <div className="d-flex justify-content-between">
            <button className="btn btn-primary" type="submit">
              Save
            </button>
            <button className="btn btn-secondary" type="button" onClick={cancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployeeComponent;
