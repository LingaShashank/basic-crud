import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployee } from '../employeeSlice';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const employees = useSelector((state) => state.employees.list);
  const dispatch = useDispatch();

  return (
    <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.length === 0 ? (
          <tr>
            <td colSpan="4" align="center">No Employees Found</td>
          </tr>
        ) : (
          employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.designation}</td>
              <td>
                <Link to={`/edit/${emp.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => dispatch(deleteEmployee(emp.id))}>Delete</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default EmployeeList;
