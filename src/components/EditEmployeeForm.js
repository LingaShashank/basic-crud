import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateEmployee } from '../employeeSlice';
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployeeForm = () => {
  const { id } = useParams();
  const employees = useSelector((state) => state.employees.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ id: '', name: '', designation: '' });

  useEffect(() => {
    const emp = employees.find((e) => e.id === id);
    if (emp) setFormData(emp);
  }, [id, employees]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateEmployee(formData));
    navigate('/');
  };

  if (!formData) return <p>Employee not found!</p>;

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
      <button type="submit">Update Employee</button>
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

export default EditEmployeeForm;
