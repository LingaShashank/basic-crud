import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../employeeSlice';
import { useNavigate } from 'react-router-dom';

const AddEmployeeForm = () => {
  const [formData, setFormData] = useState({ name: '', designation: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee({ ...formData, id: Date.now().toString() }));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        required
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Designation"
        value={formData.designation}
        required
        onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
      />
      <button type="submit">Add Employee</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '300px',
    margin: 'auto',
  },
};

export default AddEmployeeForm;
