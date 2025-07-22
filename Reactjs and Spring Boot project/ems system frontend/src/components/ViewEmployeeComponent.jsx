import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const ViewEmployeeComponent = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then(res => {
      setEmployee(res.data);
    });
  }, [id]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg rounded-4 border-0">
            <div className="card-header bg-primary text-white text-center rounded-top-4">
              <h4 className="mb-0 fw-semibold">Employee Details</h4>
            </div>
            <div className="card-body p-4">
              <div className="mb-3">
                <label className="form-label fw-semibold">First Name</label>
                <div className="form-control bg-light text-muted">
                  {employee.firstName || 'N/A'}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Last Name</label>
                <div className="form-control bg-light text-muted">
                  {employee.lastName || 'N/A'}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email ID</label>
                <div className="form-control bg-light text-muted">
                  {employee.emailId || 'N/A'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployeeComponent;
