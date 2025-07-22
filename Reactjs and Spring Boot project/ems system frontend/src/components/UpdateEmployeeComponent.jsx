import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployeeComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((res) => {
      const { firstName, lastName, emailId } = res.data;
      setFirstName(firstName);
      setLastName(lastName);
      setEmailId(emailId);
    });
  }, [id]);

  const updateEmployee = (e) => {
    e.preventDefault();
    
const employee = { id, firstName, lastName, emailId };
EmployeeService.updateEmployee(employee, id); // ✅ id should be a number or string



    EmployeeService.updateEmployee(employee, id).then(() => {
      navigate('/employees');
    }).catch((err) => {
      console.error("Update failed:", err);
    });
  };

  const cancel = () => {
    navigate('/employees');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">
              <h3 className="text-center mb-4 text-primary fw-semibold">Update Employee</h3>
              <form onSubmit={updateEmployee}>
                <div className="form-group mb-3">
                  <label className="form-label fw-semibold">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label fw-semibold">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <label className="form-label fw-semibold">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                    required
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-success px-4">
                    Save
                  </button>
                  <button type="button" className="btn btn-outline-secondary px-4" onClick={cancel}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployeeComponent;
