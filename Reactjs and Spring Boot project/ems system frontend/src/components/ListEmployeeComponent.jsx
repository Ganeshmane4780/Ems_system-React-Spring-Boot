// src/components/ListEmployeeComponent.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
      setEmployees(res.data);
    });
  }, []);

  const addEmployee = () => {
    navigate('/add-employee/_add');
  };

  const editEmployee = (id) => {
    navigate(`/add-employee/${id}`);
  };

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id).then(() => {
      setEmployees(employees.filter((emp) => emp.id !== id));
    });
  };

  const viewEmployee = (id) => {
    navigate(`/view-employee/${id}`);
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <h2 className="fw-bold m-0">Employees</h2>
        <button className="btn btn-success px-4 py-2" onClick={addEmployee}>
          + Add Employee
        </button>
      </div>

      <div className="table-responsive shadow rounded-4 overflow-hidden">
        <table className="table table-striped table-hover text-center align-middle mb-0">
          <thead className="table-dark">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td>
                    <button
                      onClick={() => editEmployee(employee.id)}
                      className="btn btn-sm btn-outline-info me-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => deleteEmployee(employee.id)}
                      className="btn btn-sm btn-outline-danger me-2"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => viewEmployee(employee.id)}
                      className="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">
                  <div className="text-muted py-4">No employees found.</div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEmployeeComponent;
